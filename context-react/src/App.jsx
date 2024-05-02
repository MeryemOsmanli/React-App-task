import "./App.css";
import CounterProvider from "./context/CounterProvider";
import Layout from "./layout/Layout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <CounterProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="home" element={<Home />} />
              {/* <Route path="blogs" element={<Blogs />} /> */}
              <Route path="detail" element={<Detail />} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </CounterProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
