import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quotes from "./components/Quotes";
import ContactForm from "./components/ContactForm";
import Login from "./components/Login";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Quotes />
              <About />
              <ContactForm />
               <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}