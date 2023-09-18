import './scss/main.scss';
import Header from './components/header/Header';
import HomeBanner from './components/home-banner/HomeBanner';
import ThreeCard from './components/three-card/ThreeCard';
import BorderlessCardsContainer from './components/borderless-cards-container/BorderlessCardsContainer';

function App() {
  return (
    <div className="App global-font">
      <Header />
      <HomeBanner />
      <ThreeCard />
      <BorderlessCardsContainer />
    </div>
  );
}

export default App;
