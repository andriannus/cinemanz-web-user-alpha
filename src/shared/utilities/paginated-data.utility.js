export const getPaginatedData = ({ data, page, perPage, total }) => {
  const totalPage = Math.ceil(total / perPage);
  const prevPage = page - 1 ? page - 1 : null;
  const nextPage = totalPage > page ? page + 1 : null;

  const paginatedData = {
    data,
    meta: {
      page,
      perPage,
      prevPage,
      nextPage,
      total,
      totalPage,
    },
  };

  return paginatedData;
};

export default getPaginatedData;
