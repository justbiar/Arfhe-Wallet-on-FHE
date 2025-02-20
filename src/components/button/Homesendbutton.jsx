import React from "react";
import { useNavigate } from "react-router-dom";
import './Homesendbutton.css';
import App from "../../App";
function NavigationButton({ label, path }) {
    const navigate = useNavigate();
    
    return (
        <button 
            onClick={() => navigate(path)} 
            className="action-btn">
            {label}
        </button>
    );
}

// Butonları dışa aktarma
export function Homesendbutton() {
    return <NavigationButton label="Gönder" path="/home/send" />;
}

export function HomeDiscoverybutton() {
    return <NavigationButton label="Keşfet" path="/discovery" />;
}

export function HomeHistorybutton() {
    return <NavigationButton label="Geçmiş" path="/history" />;
}

export function HomeRevokebutton() {
    return <NavigationButton label="İptal" path="/revoke" />;
}