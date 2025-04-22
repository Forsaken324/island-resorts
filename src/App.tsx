import "./App.css";
// navigation
import NavBar from "./components/navigation/NavBar";

// sections
import WelcomeSection from "./components/main/welcomesection/WelcomeSection";
import ServicesSection from "./components/main/servicessesction/ServicesSection";
import Locations from "./components/main/locationssection/Locations";
import AboutUs from "./components/main/aboutsection/AboutUs";
import Contact from "./components/main/contactsection/Contact";
import Footer from "./components/main/footersection/Footer";

// contexts
import { MenuContextProvider } from "./contexts/MenuContextFile";

const App = () => {
  return (
    <>
      <MenuContextProvider>
        <NavBar />
        <WelcomeSection />
        <ServicesSection />
        <Locations />
        <AboutUs />
        <Contact />
        <Footer />
      </MenuContextProvider>
    </>
  );
};

export default App;
