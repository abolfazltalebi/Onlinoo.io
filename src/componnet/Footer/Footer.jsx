function Footer() {
  return (
    <>
      <footer className="flex flex-col justify-around md:flex-row bg-emerald-500 p-3 rounded-2xl">
        <div className="first-1 lg:w-1/4 md:w-1/2 w-full px-4">
          <div className="title w-[35%] md:w-full ">
            <h3 className="text-center md:text-right text-black bg-white md:bg-transparent md:text-white md:text-2xl rounded-2xl py-2  my-3">
              دسترسی سریع
            </h3>
          </div>
          <div>
            <ul className=" list-none">
              <li className="my-3 text-white text-right hover:translate-x-[-15px] transition-all">
                <a href="">صفحه اصلی</a>
              </li>
              <li className="my-3 text-white text-right hover:translate-x-[-15px] transition-all">
                <a href="">درباره ما</a>
              </li>
              <li className="my-3 text-white text-right hover:translate-x-[-15px] transition-all">
                <a href="">تماس با ما</a>
              </li>
              <li className="my-3 text-white text-right hover:translate-x-[-15px] transition-all">
                <a href="">آدرس ما</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="first-2 lg:w-1/4 md:w-1/2 w-full px-4">
          <div className="title w-[32%] md:w-full ">
            <h3 className="text-center md:text-right text-black bg-white md:bg-transparent md:text-white md:text-2xl rounded-2xl py-2  my-3">
              آدرس ما
            </h3>
          </div>
          <div>
            <ul className=" list-none">
              <li className="my-3 text-white text-right hover:translate-x-[-15px] transition-all">
                <a href="">تهران سعادت آباد خیابان فرزاد</a>
              </li>
              <li className="my-3 text-white text-right hover:translate-x-[-15px] transition-all">
                <a href="">گیلان خیابان امین</a>
              </li>
              <li className="my-3 text-white text-right hover:translate-x-[-15px] transition-all">
                <a href="">خوزستان خیابان احمد محمدیان</a>
              </li>
              <li className="my-3 text-white text-right hover:translate-x-[-15px] transition-all">
                <a href="">آدرس ما</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <div className="title w-[50%] md:w-full ">
            <h3 className="text-center md:text-right text-black bg-white md:bg-transparent md:text-white md:text-2xl rounded-2xl py-2  my-3">
              از تخیفیف ها باخبر شو
            </h3>
          </div>
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative w-40 md:w-auto xl:mr-4 lg:mr-0 md:mr-4 mr-2">
              <label
                htmlFor="footer-field"
                className="leading-9  text-lg text-white"
              >
                ایمیل شما
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg- bg-opacity-50   border border-gray-300 rounded-2xl text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="lg:mt-2 lg:ms-3 ms-2 xl:mt-0 flex-shrink-0 inline-flex text-black bg-white border-0 py-2 px-6 rounded-2xl">
              ارسال
            </button>
          </div>
        </div>
      </footer>
      <section className="flex justify-around">
        <div className="flex flex-col gap-4 items-center justify-around md:flex-row px-5 py-6">
          <a className="flex items-center justify-center md:justify- text-gray-900 title-font">
            <span className="ml-3 text-xl">آنلاینو</span>
          </a>
          <p className="flex md:border-gray-200 md:border-l-2 md:ml-4 md:mt-0 md:pl-4 md:py-2 mt-4 text-gray-500 text-sm">
            طراحی شده توسط ابوالفضل طالبی
            <a
              href="https://instagram.com/Abolfazltalebi.wp"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Abolfazltalebi.wp
            </a>
          </p>
          <span className="inline-flex md:ml-auto md:mt-0 mt-4 justify-center md:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </section>{" "}
    </>
  );
}
export default Footer;
