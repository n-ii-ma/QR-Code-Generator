import { useState } from "react";
import "./App.css";

function App() {
  const [link, setLink] = useState("");
  const [qrcode, setQrcode] = useState("");

  const handleGenerate = (e) => {
    e.preventDefault();

    setQrcode(`https://qrtag.net/api/qr_8.png?url=https://${link}`);
  };

  return (
    <div className="App">
      <h3>Generate Your Unique QR Code!</h3>
      <form>
        <input
          type="link"
          className="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="E.g.: www.twitter.com"
          required
        />
        <br />
        <button type="submit" onClick={handleGenerate}>
          Generate QR Code
        </button>
        <br />
        <br />
        {!qrcode.length ? "" : <img src={qrcode} alt="qrtag" />}
      </form>
    </div>
  );
}

export default App;
