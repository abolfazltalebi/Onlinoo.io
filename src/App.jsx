import "./App.css";
import {
  Contact,
  Course,
  Header,
  Footer,
  HeroSection,
  Onlinoo,
  OnlinoWhy,
  Professors,
  Nazarat,

} from "./componnet";

function App() {
  return (
    <>
      <div className="font-vazir" dir="rtl">
        <Header />
        <main className="container my-5">
          <HeroSection />
          <OnlinoWhy />
          <Onlinoo />
          <Professors />
          <Contact />
          <Course />
          <Nazarat />
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
