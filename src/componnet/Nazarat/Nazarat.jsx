function App() {
  return (
    <>
      {/* title sectio-6 */}
      <section className="title-section3 my-6 max-w-4xl md:max-w-xs md:mx-auto">
        <div className=" bg-emerald-500 rounded-lg py-2  flex flex-col items-center justify-center">
          <h2 className="text-2xl text-white">نظرات دانشجویان</h2>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center  scrollbar-hide overflow-y-auto p-5 gap-4 ">
        <div className="item-nazarat1 hover:bg-transparent transition-all hover:rotate-2 hover:shadow hover:shadow-emerald-500 bg-emerald-500 rounded-lg p-3">
          <div>
            <h2 className="bg-white  rounded-full py-2 my-5">
              دانشجوی دوره طراجی سایت
            </h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>
        <div className="item-nazarat1 hover:bg-transparent transition-all hover:rotate-2 hover:shadow hover:shadow-emerald-500 bg-emerald-500 rounded-lg p-3">
          <div>
            <h2 className="bg-white  rounded-full py-2 my-5">
              دانشجوی دوره سئو سایت
            </h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>
        <div className="item-nazarat1 hover:bg-transparent transition-all hover:rotate-2 hover:shadow hover:shadow-emerald-500 bg-emerald-500 rounded-lg p-3">
          <div>
            <h2 className="bg-white  rounded-full py-2 my-5">
              دانشجوی دوره بازار بورس
            </h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>
        <div className="item-nazarat1 hover:bg-transparent transition-all hover:rotate-2 hover:shadow hover:shadow-emerald-500 bg-emerald-500 rounded-lg p-3">
          <div>
            <h2 className="bg-white  rounded-full py-2 my-5">
              دانشجوی دوره دیجیتال مارکتینگ
            </h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default App;
