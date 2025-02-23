import { useState, useEffect } from "react";
import Bottommenu from "../components/menu/Bottommenu";
import "./Account.css";
import ImportWalletButton from "../components/button/Importwalletbutton";

const Account = () => {
  const [accounts, setAccounts] = useState(["Hesap 1", "Hesap 2"]); // Başlangıçta 2 hesap olsun

  useEffect(() => {
    console.log("✅ Account bileşeni render edildi!");
  }, []);

  const addAccount = () => {
    if (accounts.length < 6) {
      setAccounts([...accounts, `Hesap ${accounts.length + 1}`]);
    }
  };

  const deleteAccount = () => {
    if (accounts.length > 1) {
      setAccounts(accounts.slice(0, -1));
    }
  };

  return (
    <div className="app-container">
      <h2>Network</h2>
      <label for="network">Network</label>
<select id="network">
    <option value="bitcoin">Bitcoin</option>
    <option value="etherium">ERC20</option>
    <option value="bnb">BEP20</option>
    <option value="solana">Solana</option>
    <option value="arf">Arf</option>
</select>

      <div className="accounts-container">
        {accounts.map((account, index) => (
          <div key={index} className="account-item">
            <span>{account}</span>
            <div className="icons">
              <button className="icon-button">🔳</button> {/* QR kod ikonu */}
              <button className="icon-button">👁</button> {/* Göster/Gizle */}
              <button
                className="icon-button"
                onClick={deleteAccount}
                disabled={accounts.length <= 1}
              >
                🗑
              </button>{" "}
              {/* Çöp kutusu */}
            </div>
          </div>
        ))}
      </div>

      <div className="actions">
        <button
          className="primary-button"
          onClick={addAccount}
          disabled={accounts.length >= 6}
        >
          Cüzdan Oluştur
        </button>

        <ImportWalletButton />
      </div>

      <div className="bottom-nav">
        <Bottommenu />
      </div>
    </div>
  );
};

export default Account;
