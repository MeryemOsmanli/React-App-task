import "./App.css";
import FirstSection from "./components/firstsection/FirstSection";
import Navbar from "./components/navbar/Navbar";
import SecondSection from "./components/secondsection/SecondSection";
import ThirdSection from "./components/thirdsection/ThirdSection";

function App() {
  return (
    <>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </>
  );
}

export default App;
