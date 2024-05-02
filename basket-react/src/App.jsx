import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasketProfile from "./pages/BasketProfile";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import MainProvider from "./context/MainProvider";
import WishListProvider from "./context/WishListProvider";
import WishListPage from "./pages/WishListPage";

function App() {
  return (
    <>
      {/* context in artiq hamiya sozu kecir yeni icindekiler onun children dir */}
      <MainProvider>
        <WishListProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/basket" element={<BasketProfile />} />
                <Route path="/wishlist" element={<WishListPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </WishListProvider>
      </MainProvider>
    </>
  );
}

export default App;
