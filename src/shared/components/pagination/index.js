import React from 'react';

import PaginationContent from 'shared/components/pagination/pagination.content';
import { PaginationPropTypes } from 'shared/components/pagination/pagination.prop-types';

const Pagination = ({ handlePrevPage, handleNextPage, meta }) => (
  <PaginationContent
    handlePrevPage={handlePrevPage}
    handleNextPage={handleNextPage}
    meta={meta}
  />
);

Pagination.propTypes = PaginationPropTypes;

export default Pagination;
