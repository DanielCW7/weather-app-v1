import './App.css';
import Nav from './containers/nav';
import Footer from './containers/footer';
import News from './pages/newsPage';
import Home from './pages/homePage'
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Sports from './pages/sportsPage';
// import pages and route here, nav and footer will wrap every page as a global element

const App = () => {
  return (
    <HashRouter basename='/'>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/News" element={<News />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App;
