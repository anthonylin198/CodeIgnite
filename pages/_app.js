// import "../styles/globals.css"; // Component is replaced here by any page
import { Provider } from "react-redux";
import store from "../redux/store";

import Layout from "../components/Layout";
import { GlobalProvider } from "../context/GlobalContext";

import "../assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf";
import "../assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf";
import "../assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf";
import "../assets/fonts/typography-font/Circular-Std-Book.ttf";
import "../assets/fonts/typography-font/CircularStd-Black.ttf";
import "../assets/fonts/typography-font/CircularStd-BlackItalic.ttf";
import "../assets/fonts/typography-font/CircularStd-Bold.ttf";
import "../assets/fonts/typography-font/CircularStd-BoldItalic.ttf";
import "../assets/fonts/typography-font/CircularStd-Book.ttf";
import "../assets/fonts/typography-font/CircularStd-BookItalic.ttf";
import "../assets/fonts/typography-font/CircularStd-Medium.ttf";
import "../assets/fonts/typography-font/CircularStd-MediumItalic.ttf";

import "../assets/fonts/icon-font/fonts/avasta.ttf";
import "../assets/fonts/icon-font/css/style.css";

import "../components/Layout/bootstrap-custom.scss";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/aos/dist/aos.css";

import "../assets/fonts/icon-font/css/style.css";
import "../assets/fonts/typography-font/typo.css";
import "../assets/fonts/fontawesome-5/css/all.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
