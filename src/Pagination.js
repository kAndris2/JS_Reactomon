import React from 'react';

const Pagination = ({ pokesPerPage, totalPokes, paginate, currPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokes / pokesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav id="pagenav" className="d-flex justify-content-center">
      <ul className='pagination'>
        <li className="page-item">
          {currPage - 1 === 0
            ? <p></p>
            : <a onClick={() => paginate(currPage-1)} className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
          }
            
        </li>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#' className='page-link' >
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          {console.log(pageNumbers)}
          {currPage === pageNumbers.length
            ? <p></p>
            : <a onClick={() => paginate(currPage+1)} className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
          }
        </li>
      </ul>
    </nav>
    
  );
};

export default Pagination;