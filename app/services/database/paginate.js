'use strict';

const paginate = async (query, paginateOptions) => {
  const result = {
    data: [],
    paginate: {
      total: 0,
      offset: paginateOptions.offset,
      perPage: paginateOptions.perPage,
    },
  };

  const total = query.clone();
  result.data = await query
    .limit(paginateOptions.perPage)
    .offset(paginateOptions.offset);

  const count = await total
    .clearSelect()
    .count({ total: '*' })
    .first();

  result.paginate.total = count.total;

  return result;
};

module.exports = paginate;
