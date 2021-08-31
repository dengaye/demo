/**
 * xr (c) James Cleveland 2015
 * URL: https://github.com/radiosilence/xr
 * License: BSD
 */

// @ts-ignore
import encode from 'querystring/encode';

const Methods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
    OPTIONS: 'OPTIONS',
};

const Events = {
    READY_STATE_CHANGE: 'readystatechange',
    LOAD_START: 'loadstart',
    PROGRESS: 'progress',
    ABORT: 'abort',
    ERROR: 'error',
    LOAD: 'load',
    TIMEOUT: 'timeout',
    LOAD_END: 'loadend',
};

const defaults = {
    method: Methods.GET,
    data: undefined,
    headers: {
        'Content-Type': 'application/json',
        'API-TICKET': null,
        'API-TYPE': 'coding',
        'CODING-PROJECT': sessionStorage.getItem('codingProject'),
    },
    dump: JSON.stringify,
    load: JSON.parse,
    xmlHttpRequest: () => new XMLHttpRequest(),
    promise: (fn: any) => new Promise(fn),
    withCredentials: false,
    noContentType: false,
    parseResponseText: true,
};

function res(xhr: any, data: any) {
    return data;
}
/* eslint no-restricted-syntax: 0 */
function assign(l: any, ...rs) {
    for (const i in rs) {
        if (!{}.hasOwnProperty.call(rs, i)) continue;
        const r = rs[i];
        if (typeof r !== 'object') continue;
        for (const k in r) {
            if (!{}.hasOwnProperty.call(r, k)) continue;
            l[k] = r[k];
        }
    }
    return l;
}

let config = {};

function configure(opts: any) {
    config = assign({}, config, opts);
}

function promise(args: any, fn: any) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'promise' does not exist on type '{}'.
    return (args && args.promise ? args.promise : config.promise || defaults.promise)(fn);
}

function xr(args: any) {
    return promise(args, (resolve: any, reject: any) => {
        const opts = assign({}, defaults, config, args);
        const xhr = opts.xmlHttpRequest();

        xhr.withCredentials = opts.withCredentials;

        if (opts.abort) {
            args.abort(() => {
                // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
                reject(res(xhr));
                xhr.abort();
            });
        }

        xhr.addEventListener(Events.LOAD, () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                let data = null;
                if (xhr.responseText) {
                    data =
                        opts.parseResponseText === true
                            ? opts.load(xhr.responseText)
                            : xhr.responseText;
                }
                resolve(res(xhr, data));
            } else {
                // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
                reject(res(xhr));
            }
        });

        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        xhr.addEventListener(Events.ABORT, () => reject(res(xhr)));
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        xhr.addEventListener(Events.ERROR, () => reject(res(xhr)));
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        xhr.addEventListener(Events.TIMEOUT, () => reject(res(xhr)));

        for (const k in opts.events) {
            if (!{}.hasOwnProperty.call(opts.events, k)) continue;
            xhr.addEventListener(k, opts.events[k].bind(null, xhr), false);
        }

        // add upload events support
        // see: https://github.com/radiosilence/xr/pull/10/files
        for (const k in opts.uploadEvents) {
            if (!{}.hasOwnProperty.call(opts.uploadEvents, k) || !opts.uploadEvents[k]) continue;
            xhr.upload.addEventListener(k, opts.uploadEvents[k].bind(null, xhr), false);
        }

        // open xhr after addEventListener
        // see: http://stackoverflow.com/a/16038947
        xhr.open(
            opts.method,
            opts.params ? `${opts.url.split('?')[0]}?${encode(opts.params)}` : opts.url,
            true
        );

        // call .open(..) before setting the request headers
        // https://stackoverflow.com/a/28524593/9126011

        const headers = opts.headers || {};
        if (opts.noContentType) delete headers['Content-Type'];
        for (const k in headers) {
            if (!{}.hasOwnProperty.call(headers, k)) continue;
            xhr.setRequestHeader(k, headers[k]);
        }

        const data = typeof opts.data === 'object' && !opts.raw ? opts.dump(opts.data) : opts.data;
        if (data !== undefined) xhr.send(data);
        else xhr.send();
    });
}

xr.assign = assign;
xr.encode = encode;
xr.configure = configure;
xr.Methods = Methods;
xr.Events = Events;
xr.defaults = defaults;

xr.get = (url: any, params: any, args: any) =>
    xr(assign({ url, method: Methods.GET, params }, args));
xr.put = (url: any, data: any, args: any) => xr(assign({ url, method: Methods.PUT, data }, args));
xr.post = (url: any, data: any, args: any) => xr(assign({ url, method: Methods.POST, data }, args));
xr.patch = (url: any, data: any, args: any) =>
    xr(assign({ url, method: Methods.PATCH, data }, args));
xr.del = (url: any, args: any) => xr(assign({ url, method: Methods.DELETE }, args));
xr.options = (url: any, args: any) => xr(assign({ url, method: Methods.OPTIONS }, args));

export default xr;
