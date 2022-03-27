import Head from "next/head";

//Fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
//React-lightbox,react-datepicker
import "react-image-lightbox/style.css";
import "react-datepicker/dist/react-datepicker.css";
//carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//CSS
import "../assets/css/all.css";
import "../assets//css/all.min.css";
import "../assets/css/style.css";


function MyApp({ Component, pageProps }) {
  
  return (
    <>
    {/*Bootstrap meta tag*/}
    <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    
    <Component {...pageProps} />
    </>
    );

}

export default MyApp;
