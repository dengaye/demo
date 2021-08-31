import xr from './xr';

export const postUploadWithProgress = (url: string, data: any, onProgress?: any, raw = true) => {
    return xr({
        method: xr.Methods.POST,
        url,
        data,
        raw,
        uploadEvents: {
            [xr.Events.PROGRESS]: (xhr: any, xhrProgressEvent: any) => {
                if (xhrProgressEvent.lengthComputable) {
                    const value =
                        (((xhrProgressEvent.loaded / xhrProgressEvent.total) * 100) / 3) | 0;
                    if (onProgress) {
                        onProgress(value);
                    }
                }
            },
        },
        noContentType: true,
    });
};
