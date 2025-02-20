import React from "react";
import "./History.css"; // CSS dosyasını import ettik
import Bottommenu from "../components/menu/Bottommenu";


const transactions = [
  { type: "Takas", details: "100 USDC -> 100 DAI", tx: "Dx5asf4s5g4r5h4th5tf4fh5jfn4488egiy", time: "11:36 15.02.2025" },
  { type: "Gönderme", details: "100 USDC -> Dx5asf4...5g5", tx: "Dx5asf4s5g4r5h4th5tf4fh5jfn4488egiy", time: "11:36 15.02.2025" },
  { type: "Takas", details: "100 USDC -> 100 DAI", tx: "Dx5asf4s5g4r5h4th5tf4fh5jfn4488egiy", time: "11:36 15.02.2025" },
  { type: "Takas", details: "100 USDC -> 100 DAI", tx: "Dx5asf4s5g4r5h4th5tf4fh5jfn4488egiy", time: "11:36 15.02.2025" },
  { type: "Takas", details: "100 USDC -> 100 DAI", tx: "Dx5asf4s5g4r5h4th5tf4fh5jfn4488egiy", time: "11:36 15.02.2025" },
];

const History = () => {
  return (
    <div className="container">
      <div className="transaction-list">
        {transactions.map((tx, index) => (
          <div key={index} className="transaction-box">
            <p className="type">{tx.type}</p>
            <p className="details">{tx.details}</p>
            <p className="tx">İşlem: {tx.tx}</p>
            <p className="time">{tx.time}</p>
          </div>
        ))}
      </div>
      <div className='header'>
      <h1 className="app-title"></h1>
    <img src="/history2.png" alt='Logo' className='history-logo' />
    </div>

      {/* Alt Menü */}
      <div>
        <Bottommenu/>
      </div>
    </div>
  );
};

export default History;
