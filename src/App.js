import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import Header from './components/header/Header';
import HomeBanner from './components/home-banner/HomeBanner';
import ThreeCard from './components/three-card/ThreeCard';
import BorderlessCardsContainer from './components/borderless-cards-container/BorderlessCardsContainer';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import GraphicDesignPage from './routes/graphic-design/GraphicDesignPage';
import WebDesignPage from './routes/web-design/WebDesignPage';
import AppDesingPage from './routes/app-design/AppDesignPage';

function Home() {
  return (
    <div>
      <HomeBanner />
      <ThreeCard />
      <BorderlessCardsContainer />
    </div>
  )
}

let textContent = {
  graphicDesign: {
    text: `We deliver eye-catching branding materials that are 
    tailored to meet your business objectives.`
  }
}

function App() {
  return (
      <BrowserRouter>
        <div className="App global-font">
            <Header />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/graphic-design" element={<GraphicDesignPage text={textContent.graphicDesign.text} />} />
                <Route exact path="/web-design" element={<WebDesignPage />} />
                <Route exact path="/app-design" element={<AppDesingPage />} />
              </Routes>
            <Banner />
            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
