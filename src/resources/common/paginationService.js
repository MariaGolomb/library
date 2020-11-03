const { DEFAULT_PAGE_SIZE } = require('./paginationConstants');
const createError = require('http-errors');

const createQueryObject = (requestQuery) => {
    const pageNumber = parseInt(requestQuery.pageNumber, 10) ? parseInt(requestQuery.pageNumber, 10) : 1;
    const pageSize = requestQuery.pageSize ? parseInt(requestQuery.pageSize, 10) : DEFAULT_PAGE_SIZE;

    const queryParams = {};

    if (pageNumber < 0 || pageNumber === 0) {
        throw createError(400, 'Invalid page number');
    }

    queryParams.skip = pageSize * (pageNumber - 1);
    queryParams.limit = pageSize;

    return queryParams;
};

module.exports = createQueryObject;
