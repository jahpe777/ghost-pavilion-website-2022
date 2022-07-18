import { Route } from "react-router-dom";

import "./App.css";

import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import LandingPage from "./LandingPage/LandingPage";
import WatchPage from "./WatchPage/WatchPage";
import ListenPage from "./ListenPage/ListenPage";
import SpeakPage from "./SpeakPage/SpeakPage";

const App = () => {
  return (
    <div className="App">
      <header className="App-Header">
        <Route path="/" element={<NavBar />} />
      </header>
      <main className="Header">
        <Route path="/" element={<LandingPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/listen" element={<ListenPage />} />
        <Route path="/speak" element={<SpeakPage />} />
      </main>
      <footer>
        <Route path="/" element={<Footer />} />
      </footer>
    </div>
  );
};

export default App;
