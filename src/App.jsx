import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import Booking from "./sections/Booking";
import Popular from "./sections/Popular";
import Note from "./sections/Note";
import Faq from "./sections/Faq";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Booking />
      <Popular />
      <Note />
      <Faq />
      <Footer />
    </>
  );
};

export default App;
