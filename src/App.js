import { BrowserRouter, Routes, Route, useMatch } from 'react-router-dom';
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
import AboutPage from './routes/about/AboutPage';

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

function Container() {
  let homeMatch = useMatch('/')
  let webDesignMatch = useMatch('/web-design')
  let appDesignMatch = useMatch('/app-design');
  let graphicDesignMatch = useMatch('/graphic-design');
  // console.log(homeMatch)

  let leafClassName = '';
  
  if(homeMatch) {
    leafClassName = 'two-leaf rotate-leaf'
  }
  if(webDesignMatch) {
    leafClassName = 'one-leaf'
  }
  if(appDesignMatch) {
    leafClassName = 'one-leaf'
  }
  if(graphicDesignMatch) {
    leafClassName = 'one-leaf'
  }

  let globalClassName = `App global-font${leafClassName ? ' '+leafClassName : ''}`

  return (
    <>
        <div className={globalClassName}>
            <Header />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/graphic-design" element={<GraphicDesignPage text={textContent.graphicDesign.text} />} />
                <Route exact path="/web-design" element={<WebDesignPage />} />
                <Route exact path="/app-design" element={<AppDesingPage />} />
                <Route exact path="/about" element={<AboutPage />} />
              </Routes>
            <Banner />
            <Footer />
        </div>
    
    </>
  )
}

function App() {
  return (
      <BrowserRouter>
        <Container />
      </BrowserRouter>
  );
}

export default App;
