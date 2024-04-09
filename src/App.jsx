import Navbar from "./components/NavBar/navbar";
import Hero from "./components/Hero/hero";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import "./App.css";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <Skills />
        <Works />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
