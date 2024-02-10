import { useState, useEffect } from "react";
import Primary from "./palettes/Primary";
import Complementary from "./palettes/Complementary";
import Triadic from "./palettes/Triadic";
import "./sass/App.scss";

function App() {
  const [primary, setPrimary] = useState("#e26969");

  useEffect(() => {
    console.log(primary);
  }, [primary]);

  return (
    <div className="App">
      <Primary primary={primary} setPrimary={setPrimary} />
      <h2>Complementary</h2>
      <Complementary primary={primary} />
      <h2>Triadic</h2>
      <Triadic primary={primary} />
    </div>
  );
}

export default App;
