import { useState, useEffect } from "react";
import Primary from "./palettes/Primary";
import Complementary from "./palettes/Complementary";
import Triadic from "./palettes/Triadic";
import "./sass/App.scss";

function App() {
  const [primary, setPrimary] = useState("#e26969");
  const [shift, setShift] = useState(15);

  useEffect(() => {
    console.log(primary);
  }, [primary]);

  return (
    <div className="App">
      <h1>Shifty Palette Generator</h1>
      <p>Hue shifting utilises hue in addition to lightness when shading and highlighting. </p>
      <div className="shift-slider">
        <label>Shift:</label>
        <input type="range" min="0" max="30" value={shift} onChange={(e) => setShift(e.target.value)} />
        <p>{shift}</p>
      </div>
      <h2>Primary</h2>
      <p></p>
      <Primary primary={primary} setPrimary={setPrimary} shift={shift} />
      <h2>Complementary</h2>
      <Complementary primary={primary} shift={shift} />
      <h2>Triadic</h2>
      <Triadic primary={primary} shift={shift} />
    </div>
  );
}

export default App;
