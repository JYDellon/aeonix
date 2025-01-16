


import React, { useEffect } from 'react';
import axios from 'axios'; // Importation d'Axios pour envoyer la requête
import './Portfolio.css';
import JRAUTO from '../assets/images/PORTFOLIO.jpg';
import SECOND_SITE from '../assets/images/hebergement-deploiement.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Si vous utilisez FontAwesome
import { useTranslation } from 'react-i18next'; // Importation de useTranslation

function Portfolio() {
  const { t } = useTranslation(); // Utilisation du hook pour accéder aux traductions
  const pageName = 'portfolio'; // Nom unique pour cette page

  // Fonction pour enregistrer une visite
  const recordVisit = async () => {
    try {
      const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
      if (!visitedPages[pageName]) {
        const response = await axios.post(
          'https://apiaeonix-production.up.railway.app/api/visit/portfolio',
          {},
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        console.log("Visite enregistrée avec succès", response.data);

        visitedPages[pageName] = true;
        sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
      } else {
        console.log("La visite pour cette page a déjà été enregistrée pendant cette session.");
      }
    } catch (error) {
      console.error("Erreur lors de l'enregistrement de la visite :", error);
    }
  };

  useEffect(() => {
    recordVisit();
  }, []); // Le tableau vide garantit que cela ne se déclenche qu'une fois au premier rendu

  return (
    <div className="portfolio-container">
{/* Titre mis en valeur */}
<h1 className="highlighted-title">{t('portfolio.title')}</h1>
      <div className="portfolio-items">
        {/* Étude de cas 1 */}
        <section className="portfolio-item">
          <div className="portfolio-content">
            <div className="portfolio-text">
              <h3 className="portfolio-titre">{t('portfolio.jrAuto.title')}</h3>
              <p className="portfolio-description">{t('portfolio.jrAuto.description1')}</p>
              <p className="portfolio-description">{t('portfolio.jrAuto.description2')}</p>
              <div className="portfolio-cta-container">
                <a
                  href="https://jydellon.github.io/JRAuto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-cta"
                >
                  {t('portfolio.jrAuto.visit')}
                </a>
              </div>
            </div>
            <div className="image-container">
              <a
                href="https://jydellon.github.io/JRAuto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={JRAUTO} alt={t('portfolio.jrAuto.title')} className="portfolio-image" />
              </a>
            </div>
          </div>
        </section>

        {/* Étude de cas 2 */}
        <section className="portfolio-item">
          <div className="portfolio-content">
            <div className="portfolio-text">
              <h3 className="portfolio-titre">{t('portfolio.ashantiBeauty.title')}</h3>
              <p className="portfolio-description">{t('portfolio.ashantiBeauty.description1')}</p>
              <p className="portfolio-description">{t('portfolio.ashantiBeauty.description2')}</p>
              <div className="portfolio-cta-container">
                <a
                  href="https://jydellon.github.io/JRAuto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-cta"
                >
                  {t('portfolio.ashantiBeauty.visit')}
                </a>
              </div>
            </div>
            <div className="image-container">
              <a
                href="https://jydellon.github.io/JRAuto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={SECOND_SITE} alt={t('portfolio.ashantiBeauty.title')} className="portfolio-image" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
