import "swiper/swiper.min.css";
import "./assets/boxicons-2.1.2/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Routers from "./config/Routers";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routers />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
