function App() {
  return (
    <>
      <header className="flex md:fle-row items-center justify-between bg-emerald-400 p-[12px] rounded-[10px] w-[98%] my-[-20px] m-auto">
        <div className="w-[40%] md:w-1/2 my-2 md:my-0">
          <h2 className="text-center text-white text-2xl">آنلاینو</h2>
        </div>
        <div className="w-full  my-2 md:my-0 hidden md:inline-block">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
            <a href="" className="mr-5 hover:border-b-2 hover:border-white hover:translate-y-[-4px] cursor-pointer transition-all text-white  p-1">
              صفحه اصلی
            </a>
            <a className="mr-5 hover:border-b-2 hover:border-white hover:translate-y-[-4px] cursor-pointer transition-all text-white  p-1">
              کلاس های ما
            </a>
            <a className="mr-5 hover:border-b-2 hover:border-white hover:translate-y-[-4px] cursor-pointer transition-all text-white  p-1">
              تعرفه های ما
            </a>
            <a className="mr-5 hover:border-b-2 hover:border-white hover:translate-y-[-4px] cursor-pointer transition-all text-white  p-1">
              تماس با ما
            </a>
            <a className="mr-5 hover:border-b-2 hover:border-white hover:translate-y-[-4px] cursor-pointer transition-all text-white  p-1">
              همکاری با ما
            </a>
          </nav>
        </div>
        <div className="w-[60%] md:w-1/2 my-2 md:my-0 flex items-center justify-center">
          <button className="bg-white rounded-full px-8 py-2 me-4  transition-all hover:scale-105">
            ورود به پنل
          </button>
          <div className="bg-white rounded-full p-[8px]  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
}
export default App;
