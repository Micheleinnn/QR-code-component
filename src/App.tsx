import './App.css'
import React from 'react';

const App = () => {
    return (
        <layout className="layout">
            <div className="container">
            <section className="qrCode">
                <img className="qrCodeImg" src="../public/image-qr-code.png" alt="QR Code"/>
                <div className="mainText"> Improve your front-end skills by building projects</div>
                <div className="text"> Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
            </section>
            </div>
        </layout>
    );
};

export default App;
