import Nav from './containers/nav';
import Footer from './containers/footer';
import News from './pages/newsPage';
import Home from './pages/homePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages and route here, nav and footer will wrap every page as a global element

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
