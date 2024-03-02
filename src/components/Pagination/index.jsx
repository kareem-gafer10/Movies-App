import ReactPaginate from "react-paginate";

const Pagination = ({pageCount,getPage}) => {

  const handlePageClick = (e) => {
    getPage(e.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next"
      onPageChange={handlePageClick}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      previousLabel="previous"
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      breakAriaLabels="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

export default Pagination;
