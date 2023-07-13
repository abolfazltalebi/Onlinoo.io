import {
  cardWeb,
  cardSeo,
  cardMarket,
  cardBitcoin,
} from "../../assets/img/index";
function App() {
  return (
    <>
      {/* title sectio-4 */}
      <section className="title-section4 my-6 max-w-4xl md:max-w-xs md:mx-auto">
        <div className=" bg-emerald-400 rounded-lg py-2  flex flex-col items-center justify-center">
          <h2 className="text-2xl text-white">دروره های برتر آنلاینو</h2>
        </div>
      </section>
      {/* section 4 */}
      <section className="section4 flex flex-col items-center justify-center md:flex-row md:gap-4">
        {/* card cource 1 */}
        <div className=" bg-emerald-500 rounded-lg p-4 my-3 flex flex-col items-center transition-all hover:translate-y-[-10px] cursor-pointer">
          <div>
            <img src={cardWeb} alt="" />
          </div>
          <div className="cap">
            <h2 className="text-center text-white my-2 text-2xl">
              طراحی وب سایت
            </h2>
            <p className="text-white my-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
          </div>
        </div>
        {/* card cource 2 */}
        <div className=" bg-emerald-500 rounded-lg p-4 my-3 flex flex-col items-center transition-all hover:translate-y-[-10px] cursor-pointer">
          <div>
            <img src={cardSeo} alt="" />
          </div>
          <div className="cap">
            <h2 className="text-center text-white my-2 text-2xl">
              سئو وب سیایت
            </h2>
            <p className="text-white my-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
          </div>
        </div>
        {/* card cource 3 */}
        <div className=" bg-emerald-500 rounded-lg p-4 my-3 flex flex-col items-center transition-all hover:translate-y-[-10px] cursor-pointer">
          <div>
            <img src={cardMarket} alt="" />
          </div>
          <div className="cap">
            <h2 className="text-center text-white my-2 text-2xl">
              دیجیتال مارکتینگ
            </h2>
            <p className="text-white my-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
          </div>
        </div>
        {/* card cource 3 */}
        <div className=" bg-emerald-500 rounded-lg p-4 my-3 flex flex-col items-center transition-all hover:translate-y-[-10px] cursor-pointer">
          <div>
            <img src={cardBitcoin} alt="" />
          </div>
          <div className="cap">
            <h2 className="text-center text-white my-2 text-2xl">
              ارز دیجیتال و بازار بورس
            </h2>
            <p className="text-white my-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default App;
