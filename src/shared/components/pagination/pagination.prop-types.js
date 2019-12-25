import propTypes from 'prop-types';

export const PaginationPropTypes = {
  meta: propTypes.shape({
    page: propTypes.number,
    perPage: propTypes.number,
    prevPage: propTypes.number,
    nextPage: propTypes.number,
    total: propTypes.number,
    totalPage: propTypes.number,
  }).isRequired,
  handlePrevPage: propTypes.func.isRequired,
  handleNextPage: propTypes.func.isRequired,
};

export default PaginationPropTypes;
