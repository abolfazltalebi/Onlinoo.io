// import "../App.css";
// import "../../assets/img/index";
function contact() {
  return (
    <>
      {/* title sectio-6 */}
      <section className="title-section3 my-6 max-w-4xl md:max-w-xs md:mx-auto">
        <div className=" bg-emerald-400 rounded-lg py-2  flex flex-col items-center justify-center">
          <h2 className="text-2xl text-white">تماس با آنلاینو</h2>
        </div>
      </section>
      {/*  section 6  */}
      <section className="section6 text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h2 className="title-font text-right font-medium text-3xl text-gray-900">
              تماس با آنلاینو و گرفتن مشاوره کاملا رایگان با آنلاینو
            </h2>
            <div className="flex flex-col items-center justify-center">
              {/* location */}
              <div className="location w-[90%] ps-4 my-3 flex gap-4">
                <div className="loc-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="loc-caption">
                  <h3>دفتر مرکزی :تهران سعادت آباد خیابان فرزان</h3>
                </div>
              </div>
              {/* phone number */}
              <div className="p-number w-[90%] ps-4 my-3 flex gap-4">
                <div className="p-number-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
                <div className="loc-caption">
                  <h3> شماره تماس ما :+989933379000</h3>
                </div>
              </div>
              {/* email number */}
              <div className="email w-[90%] ps-4 my-3 flex gap-4">
                <div className="email-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                  </svg>
                </div>
                <div className="loc-caption">
                  <h3>ایمیل ما: onlinoo@example.com</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-emerald-400 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-white text-2xl font-medium title-font text-right mb-5">
              فرم تماس با ما
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-9 text-lg text-white"
              >
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="phone" className="leading-9 text-lg text-white">
                شماره تماس شما
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-black my-6 bg-white border-0 py-2 px-8 focus:outline-none transition-all hover:scale-[.90] hover:rounded-full rounded text-lg">
              ارسال فرم مشاوره
            </button>
            <p className="text-xs text-gray-500 mt-3">
              این فرم فقط برای تماس با شما استفاده می شود.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default contact;
