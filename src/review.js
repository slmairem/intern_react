const StarIcon = ({ filled = true }) => (
    <svg
      className={`w-4 h-4 ${filled ? 'text-yellow-300' : 'text-gray-300'}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
  
  const Reviews = () => (
    <div className="h-full w-full mt-2 mb-4 ml-4">
      <article className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-start">
          <img className="w-10 h-10 rounded me-4" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt="User" />
          <div className="flex flex-col flex-grow">
            <div className="flex justify-between items-start">
              <p className="font-bold text-black">Username</p>
              <footer className="text-sm text-gray-500">
                Reviewed on <time>March 3, 2017</time>
              </footer>
            </div>
            <div className="flex items-center mb-1">
              <div className="flex mb-2">
                {[...Array(4)].map((_, i) => (
                <StarIcon key={i} />
                ))}
                <StarIcon filled={false} />
              </div>
              <h3 className="ms-2 text-base font-semibold text-gray-900">Bu bir yorumdur.</h3>
            </div>
            <p className="text-gray-500 mt-2line-clamp-3">Bu bir yorumdur.</p>
            <div className="flex items-center justify-between mt-2">
                <a className="px-2 py-1.5 text-xs font-medium text-gray-900 no-underline rounded-lg border border-gray-200 bg-white hover:bg-gray-500 hover:text-slate-950 cursor-pointer ">Helpful</a>
                <p className="text-xs text-gray-500">19 people found this helpful</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
  
  export default Reviews;
  