interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <nav className="d-flex justify-content-center" aria-label="pagination">
      <ul className="pagination pagination-alt mb-0">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`} onClick={() => goToPage(currentPage - 1)}>
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">
              <i className="uil uil-arrow-left"></i>
            </span>
          </a>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`} onClick={() => goToPage(index + 1)}>
            <a className="page-link" href="#">
              {index + 1}
            </a>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={() => goToPage(currentPage + 1)}
        >
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">
              <i className="uil uil-arrow-right"></i>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
