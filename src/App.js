import { useState } from "react";
import Slider from './components/Slider';
import Primary from "./palettes/Primary";
import Complementary from "./palettes/Complementary";
import Triadic from "./palettes/Triadic";
import "./css/App.css";

function App() {
  const [primary, setPrimary] = useState("#e26969");
  const [shift, setShift] = useState(15);

  return (
    <div className="App">
      <h1>Palette Generator</h1>
      <p>Generate a series of hue shifted palettes. Hue shifting combines hue alongside lightness when shading and highlighting. Select the central colour of your primary palette. Adjust the shift higher to intensify the effect or adjust lower to generate a monochromatic palette.</p>
      <p>If you found this tool helpful, I'd love to see what you created. Drop me an email at <a href="mailto:hello@joannahosking.com">hello@joannahosking.com &rarr;</a></p>
      <Slider shift={shift} setShift={setShift} />
      <div id="palettes-wrapper">
        <h2>Primary</h2>
        <Primary primary={primary} setPrimary={setPrimary} shift={shift} />
        <h2>Complementary</h2>
        <Complementary primary={primary} shift={shift} />
        <h2>Triadic</h2>
        <Triadic primary={primary} shift={shift} />
      </div>
      <footer className="copyright"><p><a href="https://buymeacoffee.com/joannahosking">Buy me a coffee?</a></p><p>&copy; {new Date().getFullYear()} <a href="https://joannahosking.com/" target="_blank" rel="noreferrer">Joanna Hosking</a></p></footer>
    </div>
  );
}

export default App;
