/**
 * 解析器
 * 一个函数，具有于填充数据的字段相同的名称。可以从任何数据源获取数据，然后将数据转化为客户端所需要的数据
 */
const resolvers = {
    Query: {
        trackForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTrackForHome();
        }
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        }
    }
};

module.exports = resolvers;
