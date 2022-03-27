import Banner from "../Home/banner/banner";
import About from "../Home/about/about";
import Services from "../Home/services/services";
import Team from "../Home/team/team";
import Testimonial from "../Home/testimonial/testimonial";
import Gallery from "../Home/gallery/gallery";


export default function Home() {
  return (
        <>
        <Banner />
        <About />
        <Services />
        <Team /> 
        <Testimonial /> 
        <Gallery />
        </>
  );
}
