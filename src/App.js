import './scss/main.scss';
import Header from './components/header/Header';
import HomeBanner from './components/home-banner/HomeBanner';
import ThreeCard from './components/three-card/ThreeCard';

function App() {
  return (
    <div className="App global-font">
      <Header />
      <HomeBanner />
      <ThreeCard />
    </div>
  );
}

export default App;
