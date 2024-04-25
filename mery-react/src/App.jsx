import "./App.css";
import Card from "./components/card/Card";
import FirstSection from "./components/firstsection/FirstSection";
import Navbar from "./components/navbar/Navbar";
import SecondSection from "./components/secondsection/SecondSection";
import ThirdSection from "./components/thirdsection/ThirdSection";

function App() {
  const data = [
    {
      id: 2,
      description: "Sweet and savory sauces relishes spreads and seasonings",
      name: "Condiments",
    },
    {
      id: 1,
      description: "Soft drinks coffees teas beers and ales",
      name: "Beverages",
    },
    {
      id: 3,
      description: "Desserts candies and sweet breads",
      name: "Confections",
    },
    {
      id: 4,
      description: "Cheeses",
      name: "Dairy Products",
    },
    {
      id: 5,
      description: "Breads crackers pasta and cereal",
      name: "Grains/Cereals",
    },
    {
      id: 6,
      description: "Prepared meats",
      name: "Meat/Poultry",
    },
    {
      id: 7,
      description: "Dried fruit and bean curd",
      name: "Produce",
    },
    {
      id: 8,
      description: "Seaweed and fish",
      name: "Seafood",
    },
  ];
  return (
    <>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      {/* <Card name="mery" description="salam1" />
      <Card name="rufat" description="salam2" /> */}
      {data.map((x) => (
        <Card key={x.id} name={x.name} description={x.description} />
      ))}
    </>
  );
}

export default App;
