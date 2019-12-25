import React, { useContext } from 'react';

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
  const { paginatedData } = useContext(TheaterContext);

  if (!paginatedData.data) return null;

  return (
    <>
      {paginatedData.data.map(data => {
        return (
          <article key={data.id} className="media">
            <div className="media-content">
              <p>{data.name}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Content;
