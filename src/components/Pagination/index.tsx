'use client';
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className='flex items-center justify-center md:justify-end mt-4'>
      <button
        onClick={handlePreviousPage}
        className={`p-1 border rounded-full ${
          currentPage === 1
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-white hover:bg-gray-100'
        }`}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </button>
      <span className='mx-2'>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        className={`p-1 border rounded-full ${
          currentPage === totalPages
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-white hover:bg-gray-100'
        }`}
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
