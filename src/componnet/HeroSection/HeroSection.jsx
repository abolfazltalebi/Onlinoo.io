import { bgSection1 } from "../../assets/img/index";
function Section() {
  return (
    <>
      <section className="flex flex-col items-center justify-center md:flex-row mt-12">
        <div className="image my-3 md:w-[%] ">
          <img src={bgSection1} alt="" />
        </div>
        <div className="caption my-3 max-w-2xl">
          <h2 className="text-emerald-500 font-bold my-3 text-center ">
            به آنلاینو، سایتی که آموزش آنلاین را به سادگی و بهترین شکل برای شما
            فراهم می‌کند، خوش آمدید!
          </h2>
          <p className="text-base">
            با استفاده از آنلاینو، شما میتوانید به صورت آنلاین و از هر جایی که
            دوست دارید، به بهترین ویدئوهای آموزشی دسترسی پیدا کنید. از طریق سایت
            ما، میتوانید به دوره‌های آموزشی با کیفیت بالا، تمرین‌های عملی، منابع
            مفید و تمرین‌های تعاملی دسترسی داشته باشید.
          </p>
          <div className="flex items-center justify-center my-9">
            <button className="bg-emerald-600 px-12 rounded-lg py-2 text-white transition-all hover:scale-105">
              بریم برای آموزش
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Section;
