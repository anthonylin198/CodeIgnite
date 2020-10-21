import "../styles/globals.css"; // Component is replaced here by any page

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
