import './scss/main.scss';
import Header from './components/header/Header';
import HomeBanner from './components/home-banner/HomeBanner';
import ThreeCard from './components/three-card/ThreeCard';
import BorderlessCardsContainer from './components/borderless-cards-container/BorderlessCardsContainer';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';

function App() {
  return (
    <div className="App global-font">
      <Header />
      <HomeBanner />
      {/* <ThreeCard /> */}
      <BorderlessCardsContainer />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
