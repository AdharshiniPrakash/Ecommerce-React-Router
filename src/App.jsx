import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <BrowserRouter>
      <div className="app-root">
        <Header />
        <Hero />
        <main className="container">
          <Routes>
            <Route index element={<Home />} />
            <Route path={"products"} element={<Products />} />
            <Route path={"contact"} element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
