import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import APropos from './components/APropos';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NosServices from './components/NosServices';
import Rgpd from './components/Rgpd';
import EtapesDansLaCreationDunSite from './components/EtapesDansLaCreationDunSite';
import Formulaire from './components/Formulaire';
import FormulaireContact from './components/FormulaireContact';
import Devis from './components/Devis';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import './App.css';
import './i18n'; // Importation d'i18n
import { useTranslation } from 'react-i18next';


import flagFR from './assets/images/fr.png';
import flagEN from './assets/images/en.png';


// Importation des logos
import logo1 from './assets/images/logo05.1.png';
import logo3 from './assets/images/Sans titre-2.1.png';

// Importation des fonds
import fondAccueil from './assets/images/fondecran/fond12.jpg';
import fondAPropos from './assets/images/fondecran/fond12.jpg';
import fondServices from './assets/images/fondecran/fond12.jpg';
import fondPortfolio from './assets/images/fondecran/fond12.jpg';
import fondContact from './assets/images/fondecran/fond12.jpg';
import fondRgpd from './assets/images/fondecran/fond12.jpg';
import fondDevis from './assets/images/fondecran/fond12.jpg';

// Mappage des routes aux fonds
const fondsRoutes = {
  '/': fondAccueil,
  '/a-propos': fondAPropos,
  '/nos-services': fondServices,
  '/portfolio': fondPortfolio,
  '/contact': fondContact,
  '/rgpd': fondRgpd,
  '/devis': fondDevis,
};

function App() {
  const location = useLocation();
  const { i18n } = useTranslation(); // Hook de traduction

  // Gestion des fonds d'écran
  const [currentBackground, setCurrentBackground] = useState(fondAccueil);
  const [nextBackground, setNextBackground] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  // Fonction pour changer de langue
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Mise à jour des fonds d'écran selon la route
  useEffect(() => {
    const newBackground = fondsRoutes[location.pathname] || fondAccueil;
    if (newBackground !== currentBackground) {
      setNextBackground(newBackground);
      setTransitioning(true);
    }
  }, [location, currentBackground]);

  // Transition des fonds d'écran
  useEffect(() => {
    if (transitioning) {
      const timeout = setTimeout(() => {
        setCurrentBackground(nextBackground);
        setNextBackground(null);
        setTransitioning(false);
      }, 1000); // Durée de transition (en ms)
      return () => clearTimeout(timeout);
    }
  }, [transitioning, nextBackground]);

  return (











    <div className="app-container">




      {/* Conteneur des fonds d'écran */}
      <div className="background-container">
        <div
          className="background current"
          style={{
            backgroundImage: `url(${currentBackground})`,
          }}
        ></div>
        {nextBackground && (
          <div
            className="background next"
            style={{
              backgroundImage: `url(${nextBackground})`,
            }}
          ></div>
        )}
      </div>
.
      {/* Header avec logo et commutateur de langue */}
      <header className="header">
        {/* <div className="language-switcher">
          <button onClick={() => changeLanguage('fr')}>Français</button>
          <button onClick={() => changeLanguage('en')}>English</button>
        </div> */}



        
        <div className="gros">
              <div className="logo-container">
                    <img src={logo1} alt="Logo" className="logo" />
                    <div className="MiseEnPage02">
                      <div>
                        <img src={logo3} alt="Logo secondaire" className="logo3" />
                      </div>
                    </div>
              </div>

              <div className="language-switcher">
                    <div>
                        <img
                                  src={flagFR}
                                  alt="Français"
                                  className="flag-iconfr"
                                  onClick={() => changeLanguage('fr')}
                                />
                    </div>
                    <div>
                        <img
                                  src={flagEN}
                                  alt="English"
                                  className="flag-iconen"
                                  onClick={() => changeLanguage('en')}
                                />
                        </div>

              
              </div>
        </div>










        
      </header>




      {/* Barre de navigation */}
      <Navbar />

      

      {/* Définition des routes */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/nos-services" element={<NosServices />} />
        <Route path="/rgpd" element={<Rgpd />} />
        <Route path="/etapesCreationSite" element={<EtapesDansLaCreationDunSite />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/formulaire-devis" element={<Formulaire />} />
        <Route path="/formulaire-contact" element={<FormulaireContact />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
