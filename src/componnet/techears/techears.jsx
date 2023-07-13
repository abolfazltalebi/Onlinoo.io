import { mentor1, mentor2, mentor3, mentor4 } from "../../assets/img/index";
function Tech() {
  return (
    <>
      {/* title section-5 */}
      <section className="title-section5 my-6 max-w-4xl md:max-w-xs md:mx-auto">
        <div className=" bg-emerald-500 rounded-lg py-2 flex flex-col items-center justify-center">
          <h2 className="text-2xl text-white">اساتید برتر آنلاینو</h2>
        </div>
      </section>
      {/* section 5 */}
      <section className="section5 flex flex-col items-center justify-center md:flex-row md:gap-4">
        {/* card cource 1 */}
        <div className="my-3 flex flex-col items-center transition-all hover:scale-105 cursor-pointer">
          <div>
            <img src={mentor1} className="rounded-[11px] " alt="" />
          </div>
          <div className="cap">
            <h2 className="text-center text-white my-4 bg-emerald-500 px-[76px] rounded-lg  text-2xl">
              احمد محمدی
            </h2>
            <h2 className="text-center text-black my-4 text-2xl">
              طراح وب سایت
            </h2>
            <div className="flex items-center justify-center">
              <button className="text-white bg-emerald-500 rounded-[11px] px-12 py-2 hover:scale-110">
                دیدن رزمه
              </button>
            </div>
          </div>
        </div>
        {/* card cource 2 */}
        <div className="my-3 flex flex-col items-center transition-all hover:scale-105 cursor-pointer">
          <div>
            <img src={mentor2} className="rounded-[11px] " alt="" />
          </div>
          <div className="cap">
            <h2 className="text-center text-white my-4 bg-emerald-500 px-[76px] rounded-lg  text-2xl">
              دیانا محمدیان
            </h2>
            <h2 className="text-center text-black my-4 text-2xl">سئو وب</h2>
            <div className="flex items-center justify-center">
              <button className="text-white bg-emerald-500 rounded-[11px] px-12 py-2 hover:scale-110">
                دیدن رزمه
              </button>
            </div>
          </div>
        </div>
        {/* card cource 3 */}
        <div className="my-3 flex flex-col items-center transition-all hover:scale-105 cursor-pointer">
          <div>
            <img src={mentor3} className="rounded-[11px] " alt="" />
          </div>
          <div className="cap">
            <h2 className="text-center text-white my-4 bg-emerald-500 px-[76px] rounded-lg  text-2xl">
              مریم الهی
            </h2>
            <h2 className="text-center text-black my-4 text-2xl">
              دیجیتال مارکتینگ
            </h2>
            <div className="flex items-center justify-center">
              <button className="text-white bg-emerald-500 rounded-[11px] px-12 py-2 hover:scale-110">
                دیدن رزمه
              </button>
            </div>
          </div>
        </div>
        {/* card cource 3 */}
        <div className="my-3 flex flex-col items-center transition-all hover:scale-105 cursor-pointer">
          <div>
            <img src={mentor4} className="rounded-[11px] " alt="" />
          </div>
          <div className="cap">
            <h2 className="text-center text-white my-4 bg-emerald-500 px-[76px] rounded-lg  text-2xl">
              مارال علیزاده
            </h2>
            <h2 className="text-center text-black my-4 text-2xl">
              ارز دیجیتال
            </h2>
            <div className="flex items-center justify-center">
              <button className="text-white bg-emerald-500 rounded-[11px] px-12 py-2 hover:scale-110">
                دیدن رزمه
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Tech;
