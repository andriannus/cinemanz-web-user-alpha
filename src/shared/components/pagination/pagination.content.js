import React from 'react';

import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PaginationPropTypes } from 'shared/components/pagination/pagination.prop-types';

import 'shared/components/pagination/pagination.style.scss';

const Container = ({ handlePrevPage, handleNextPage, meta }) => {
  return (
    <nav className="pagination is-rounded is-right" role="navigation">
      <ul className="pagination-list">
        <span className="pagination-pages has-text-grey">
          {`${meta.page} of ${meta.totalPage} pages`}
        </span>

        <li>
          <button
            disabled={!meta.prevPage}
            className="pagination-link"
            type="button"
            onClick={handlePrevPage}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </li>

        <li>
          <button
            disabled={!meta.nextPage}
            className="pagination-link"
            type="button"
            onClick={handleNextPage}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

Container.propTypes = PaginationPropTypes;

export default Container;
