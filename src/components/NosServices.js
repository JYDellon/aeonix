// import React, { useEffect } from 'react';
// import axios from 'axios'; // Importation d'Axios pour envoyer la requête
// import { useTranslation } from 'react-i18next'; // Hook pour la traduction
// import './NosServices.css';

// const NosServices = () => {
//   const { t } = useTranslation(); // Hook de traduction

//   const services = [
//     "vitrine",
//     "ecommerce",
//     "seo",
//     "hosting",
//     "maintenance"
//   ];

//   // Nom unique pour cette page
//   const pageName = 'nos-services';

//   // Fonction pour enregistrer la visite
//   const recordVisit = async () => {
//     try {
//       const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
//       if (!visitedPages[pageName]) {
//         const response = await axios.post(
//           `https://apiaeonix-production.up.railway.app/api/visit/${pageName}`,
//           {},
//           {
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           }
//         );
//         console.log("Visite enregistrée avec succès", response.data);

//         visitedPages[pageName] = true;
//         sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
//       } else {
//         console.log("La visite pour cette page a déjà été enregistrée pendant cette session.");
//       }
//     } catch (error) {
//       console.error("Erreur lors de l'enregistrement de la visite :", error);
//     }
//   };

//   // Enregistrement de la visite au chargement du composant
//   useEffect(() => {
//     recordVisit();
//   }, []);

//   return (
//     <>
//       <div className="intro-textNosServices">
//         <h2 className="titre-intro-nos-services">
//           {t('nosServices.pageTitle')}
//         </h2>
//       </div>

//       <div className="services-container">
//         <div className="services-grid">
//           {services.map((serviceKey, index) => (
//             <div key={index} className="service-card">
//               <h3 className="service-title">{t(`nosServices.services.${serviceKey}.title`)}</h3>
//               <div className="service-description">{t(`nosServices.services.${serviceKey}.description`)}</div>
//               <div className="service-details">
//                 {t(`nosServices.services.${serviceKey}.details`, { returnObjects: true }).map((detail, detailIndex) => (
//                   <div key={detailIndex} className="service-detail">
//                     <strong>{detail.title}: </strong>{detail.description}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default NosServices;








import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Pour enregistrer la visite
import { useTranslation } from 'react-i18next'; // Pour les traductions
import './NosServices.css';

function NosServices() {
  const { t } = useTranslation(); // Accès aux traductions
  const [selectedService, setSelectedService] = useState(null);

  const pageName = 'nos-services';

  // Fonction pour enregistrer la visite
  useEffect(() => {
    const recordVisit = async () => {
      try {
        const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
        if (!visitedPages[pageName]) {
          await axios.post(
            `https://apiaeonix-production.up.railway.app/api/visit/${pageName}`,
            {},
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          visitedPages[pageName] = true;
          sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
        }
      } catch (error) {
        console.error("Erreur lors de l'enregistrement de la visite :", error);
      }
    };

    recordVisit();
  }, []);

  // Fonction pour afficher/cacher les détails d'un service
  const toggleService = (index) => {
    setSelectedService(selectedService === index ? null : index);
  };

  const services = Object.keys(t('nosServices.services', { returnObjects: true }));

  return (
    <>
      {/* Texte d'introduction */}
      <div className="intro-text-nos-services">
        <h2>{t('nosServices.pageTitle')}</h2>
      </div>

      {/* Liste des services */}
      <div className="services-container">
        {services.map((serviceKey, index) => {
          const service = t(`nosServices.services.${serviceKey}`, { returnObjects: true });

          return (
            <div
              key={index}
              className={`service-toggle-container ${index % 2 === 0 ? 'gauche' : 'droite'}`}
              style={{
                animationDelay: `${index * 0.1}s`, // Effet de cascade
              }}
            >
              {/* En-tête du service */}
              <div
                className={`service-toggle-header ${
                  selectedService === index ? 'active' : ''
                }`}
                onClick={() => toggleService(index)}
              >
                <h3>{service.title}</h3>
              </div>

              {/* Contenu du service */}
              {selectedService === index && (
                <div className="service-toggle-details">
                  <p className="service-description">{service.description}</p>
                  <ul className="service-details">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>
                        <strong>{detail.title}: </strong>
                        {detail.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NosServices;
