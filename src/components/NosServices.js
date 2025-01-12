// import React, { useEffect } from 'react';
// import axios from 'axios'; // Importation d'Axios pour envoyer la requête
// import './NosServices.css';

// const NosServices = () => {
//   const services = [
//     {
//       title: 'Les sites vitrines',
//       description: 'Un site vitrine met en avant les informations essentielles d\'une entreprise, facile à naviguer.',
//       details: [
//         { title: 'Caractéristiques', description: 'Mise en avant des informations clés, sans fonction e-commerce.' },
//         { title: 'Objectif', description: 'Renforcer la présence en ligne et faciliter la prise de contact.' },
//       ],
//     },
//     {
//       title: 'Les sites e-commerce',
//       description: 'Créer une boutique en ligne avec des options de paiement sécurisées et une gestion de stock optimisée.',
//       details: [
//         { title: 'Caractéristiques', description: 'Boutique en ligne, gestion des paiements et stocks en temps réel.' },
//         { title: 'Objectif', description: 'Faciliter la vente en ligne et offrir une expérience utilisateur optimisée.' },
//       ],
//     },
//     {
//       title: 'Référencement SEO',
//       description: 'Optimisation de votre site pour être bien référencé sur Google et augmenter la visibilité.',
//       details: [
//         { title: 'Caractéristiques', description: 'Optimisation des mots-clés et amélioration de la vitesse du site.' },
//         { title: 'Objectif', description: 'Augmenter la visibilité sur les moteurs de recherche et générer du trafic qualifié.' },
//       ],
//     },
//     {
//       title: 'Hébergement sécurisé',
//       description: 'Assurez la sécurité de votre site avec un hébergement robuste et des sauvegardes régulières.',
//       details: [
//         { title: 'Caractéristiques', description: 'Protection des données et hébergement avec des backups fréquents.' },
//         { title: 'Objectif', description: 'Assurer la disponibilité et la sécurité des données.' },
//       ],
//     },
//     {
//       title: 'Gestion et maintenance',
//       description: 'Mise à jour continue et support technique pour que votre site fonctionne parfaitement.',
//       details: [
//         { title: 'Caractéristiques', description: 'Maintenance régulière, mises à jour et support technique.' },
//         { title: 'Objectif', description: 'Garantir le bon fonctionnement et la sécurité du site.' },
//       ],
//     },
//   ];

//   // Nom unique pour cette page
//   const pageName = 'nos-services';

//   // Fonction pour enregistrer la visite
//   const recordVisit = async () => {
//     try {
//       // Vérifier si la page a déjà été enregistrée dans sessionStorage
//       const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
//       if (!visitedPages[pageName]) {
//         // Si non, envoyer la requête pour enregistrer la visite
//         const response = await axios.post(`https://apiaeonix-production.up.railway.app/api/visit/${pageName}`, {}, {
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         });
//         console.log("Visite enregistrée avec succès", response.data);

//         // Ajouter cette page aux pages visitées dans sessionStorage
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
//           Nos prestations
//         </h2>
//       </div>

//       <div className="services-container">
//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div key={index} className="service-card">
//               <h3 className="service-title">{service.title}</h3>
//               <div className="service-description">{service.description}</div>
//               <div className="service-details">
//                 {service.details.map((detail, detailIndex) => (
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
  const recordVisit = async () => {
    try {
      const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
      if (!visitedPages[pageName]) {
        const response = await axios.post(
          `https://apiaeonix-production.up.railway.app/api/visit/${pageName}`,
          {},
          {
            headers: {
              'Content-Type': 'application/json',
            },
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

  // Enregistrement de la visite au chargement du composant
  useEffect(() => {
    recordVisit();
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
