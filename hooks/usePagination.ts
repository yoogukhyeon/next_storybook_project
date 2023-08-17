import { useState, useEffect } from 'react';

const usePagination = (page: number = 1, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(page);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  return { currentPage, startIndex, endIndex, setCurrentPage, itemsPerPage };
};

export default usePagination;
