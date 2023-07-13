
import { bgSection4 } from "../../assets/img/index";
function Onlinoo() {
  return (
    <>
      {/* title sectio-3 */}
      <section className="title-section3 my-6 max-w-4xl md:max-w-xs md:mx-auto">
        <div className=" bg-emerald-400 rounded-lg py-2  flex flex-col items-center justify-center">
          <h2 className="text-2xl text-white">فرق کلاس آنلاین با آنلاینو </h2>
        </div>
      </section>
      {/* section 3 */}
      <section className=" flex flex-col md:flex-row items-center max-w-6xl">
        <div className="image">
          <img src={bgSection4} alt="" />
        </div>
        <div className="caption-s3 my-3 max-w-4xl">
          <h2 className=" text-2xl md:my-8">
            آنلاینو یه پلترفم بی رقیب در سطح{" "}
            <span className="font-bold text-emerald-500">جهان اولین</span> رتبه
            را دارد....
          </h2>
          <p className="my-3 md:my-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است .چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است مشاهده آموزش ها
          </p>
          <div className="flex items-center justify-center mt-4">
            <button className="bg-emerald-600 px-12 rounded-lg py-2 text-white transition-all hover:scale-105">
              بریم برای آموزش
            </button>
          </div>
        </div>
      </section>
      ;
    </>
  );
}
export default Onlinoo;
