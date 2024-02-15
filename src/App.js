import { useState } from "react";
import Slider from './components/Slider';
import Primary from "./palettes/Primary";
import Complementary from "./palettes/Complementary";
import Triadic from "./palettes/Triadic";
import "./sass/App.scss";

function App() {
  const [primary, setPrimary] = useState("#e26969");
  const [shift, setShift] = useState(15);

  return (
    <div className="App">
      <h1>Shifty Palette Generator</h1>
      <p>Hue shifting combines hue alongside lightness when shading and highlighting. Select the central colour of your primary palette. Adjust the shift higher to intensify the effect or adjust lower to generate a monochromatic palette.</p>
      <Slider shift={shift} setShift={setShift} />
      <div id="palettes-wrapper">
        <h2>Primary</h2>
        <Primary primary={primary} setPrimary={setPrimary} shift={shift} />
        <h2>Complementary</h2>
        <Complementary primary={primary} shift={shift} />
        <h2>Triadic</h2>
        <Triadic primary={primary} shift={shift} />
      </div>
      <footer className="copyright"><p>Built by <a href="https://joannahosking.com/" target="_blank" rel="noreferrer">Joanna Hosking</a></p><p>&copy; {new Date().getFullYear()}</p></footer>
    </div>
  );
}

export default App;
