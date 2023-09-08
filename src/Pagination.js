import React from 'react';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((number) => number + 1);

  return (
    <div className="pagination">
      <button onClick={() => setCurrentPage(1)}>First</button>
      <button
        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={number === currentPage ? 'active' : ''}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() =>
          setCurrentPage(
            currentPage < totalPages ? currentPage + 1 : totalPages
          )
        }
      >
        Next
      </button>
      <button onClick={() => setCurrentPage(totalPages)}>Last</button>
    </div>
  );
};

export default Pagination;
