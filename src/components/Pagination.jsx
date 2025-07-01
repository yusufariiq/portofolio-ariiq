const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    itemsPerPage,
    totalItems
}) => {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++){
                pages.push(i);
            }
        } else {
            const startPage = Math.max(1, currentPage - 2);
            const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

            for (let i = startPage; i <= endPage; i++){
                pages.push(i)
            }
        }

        return pages;
    };

    if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
        <div className="text-sm text-gray-400">
            Showing {startItem}-{endItem} of {totalItems} items
        </div>

        <div className="flex items-center gap-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-md bg-secondary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-button transition-colors"
            >
                Previous
            </button>

            {getPageNumbers().map((page) => {
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-2 rounded-md transition-colors
                        ${currentPage === page
                            ? 'bg-button text-white'
                            : 'bg-secondary text-white hover:bg-button'
                        }
                    `}
                >

                </button>
            })}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-md bg-secondary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-button transition-colors"
            >
                Next
            </button>
        </div>
    </div>
  )
}

export default Pagination