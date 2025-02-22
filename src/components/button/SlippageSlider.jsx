import React, { useState } from "react";
import "./SlippageSlider.css"; // CSS dosyası import ediliyor

const SlippageSlider = () => {
  const [slippage, setSlippage] = useState(0); // Slipaj yüzdesini tutan state

  return (
    <div className="slippage-container">
      <label htmlFor="slippage" className="slippage-label">
        Slipaj: {slippage.toFixed(1)}%
      </label>
      <input
        type="range"
        id="slippage"
        min="0"
        max="10"
        step="0.1"
        value={slippage}
        onChange={(e) => setSlippage(parseFloat(e.target.value))}
        className="slippage-slider"
      />
    </div>
  );
};

export default SlippageSlider;
