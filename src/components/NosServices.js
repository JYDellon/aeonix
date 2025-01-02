import React, { useEffect } from 'react';
import axios from 'axios'; // Importation d'Axios pour envoyer la requête
import { useTranslation } from 'react-i18next'; // Hook pour la traduction
import './NosServices.css';

const NosServices = () => {
  const { t } = useTranslation(); // Hook de traduction

  const services = [
    "vitrine",
    "ecommerce",
    "seo",
    "hosting",
    "maintenance"
  ];

  // Nom unique pour cette page
  const pageName = 'nos-services';

  // Fonction pour enregistrer la visite
  // const recordVisit = async () => {
  //   try {
  //     const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
  //     if (!visitedPages[pageName]) {
  //       const response = await axios.post(
  //         `https://apiaeonix-production.up.railway.app/api/visit/${pageName}`,
  //         {},
  //         {
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         }
  //       );
  //       console.log("Visite enregistrée avec succès", response.data);

  //       visitedPages[pageName] = true;
  //       sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
  //     } else {
  //       console.log("La visite pour cette page a déjà été enregistrée pendant cette session.");
  //     }
  //   } catch (error) {
  //     console.error("Erreur lors de l'enregistrement de la visite :", error);
  //   }
  // };

  // // Enregistrement de la visite au chargement du composant
  // useEffect(() => {
  //   recordVisit();
  // }, []);




  const recordVisit = (pageName) => {
    // Vérifier si la page a déjà été enregistrée dans sessionStorage
    const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
    if (!visitedPages[pageName]) {
      // Si non, envoyer la requête pour enregistrer la visite via JSONP
      const script = document.createElement('script');
      script.src = `https://apiaeonix-production.up.railway.app/api/visit/${pageName}?callback=handleVisitResponse`;
      document.body.appendChild(script);

      // Ajouter cette page aux pages visitées dans sessionStorage
      visitedPages[pageName] = true;
      sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
    } else {
      console.log("La visite pour cette page a déjà été enregistrée pendant cette session.");
    }
  };

  // Fonction de callback JSONP
  const handleVisitResponse = (response) => {
    console.log("Visite enregistrée avec succès :", response);
  };

  // Enregistrement de la visite au chargement du composant
  useEffect(() => {
    recordVisit(pageName);
  }, []);





  
  return (
    <>
      <div className="intro-textNosServices">
        <h2 className="titre-intro-nos-services">
          {t('nosServices.pageTitle')}
        </h2>
      </div>

      <div className="services-container">
        <div className="services-grid">
          {services.map((serviceKey, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{t(`nosServices.services.${serviceKey}.title`)}</h3>
              <div className="service-description">{t(`nosServices.services.${serviceKey}.description`)}</div>
              <div className="service-details">
                {t(`nosServices.services.${serviceKey}.details`, { returnObjects: true }).map((detail, detailIndex) => (
                  <div key={detailIndex} className="service-detail">
                    <strong>{detail.title}: </strong>{detail.description}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NosServices;
