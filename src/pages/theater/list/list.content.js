import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import TheaterContext from 'pages/theater/shared/services/theater.context';

import Pagination from 'shared/components/pagination';

const Content = () => {
  const {
    isLoading,
    paginatedData,
    handlePrevPage,
    handleNextPage,
  } = useContext(TheaterContext);

  return (
    <>
      <nav className="level">
        <div className="level-item has-text-centered">
          <p className="title">Theater</p>
        </div>
      </nav>

      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <ListTheater />

          <Pagination
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            meta={paginatedData.meta}
          />
        </>
      )}
    </>
  );
};

const ListTheater = () => {
  const { paginatedData, pathname } = useContext(TheaterContext);

  if (!paginatedData.data) return null;

  return (
    <>
      {paginatedData.data.map(data => {
        return (
          <article key={data.id} className="media">
            <div className="media-content">
              <div className="content">
                <Link to={`${pathname}/${data.id}`}>{data.name}</Link>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Content;
