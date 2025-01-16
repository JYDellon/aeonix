// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useTranslation } from 'react-i18next'; // Import du hook de traduction
// // import './Rgpd.css';

// // function Rgpd() {
// //   const { t } = useTranslation(); // Utilisez le hook pour accéder aux traductions
// //   const [isMounted, setIsMounted] = useState(false);
// //   const [sectionSelectionnee, setSectionSelectionnee] = useState(null);

// //   // Nom unique de la page
// //   const pageName = 'rgpd';

// //   // Fonction pour enregistrer la visite de la page
// //   const recordVisit = async () => {
// //     try {
// //       // Vérifier si la page a déjà été enregistrée dans sessionStorage
// //       const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
// //       if (!visitedPages[pageName]) {
// //         // Si non, envoyer la requête pour enregistrer la visite
// //         const response = await axios.post('https://apiaeonix-production.up.railway.app/api/visit/rgpd', {}, {
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //         });
// //         console.log("Visite enregistrée avec succès :", response.data);

// //         // Ajouter cette page aux pages visitées dans sessionStorage
// //         visitedPages[pageName] = true;
// //         sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
// //       } else {
// //         console.log("La visite pour cette page a déjà été enregistrée pendant cette session.");
// //       }
// //     } catch (error) {
// //       console.error("Erreur lors de l'enregistrement de la visite :", error);
// //     }
// //   };

// //   useEffect(() => {
// //     setIsMounted(true);
// //     recordVisit(); // Enregistrer la visite au montage si elle n'a pas été enregistrée dans cette session
// //   }, []);

// //   const toggleSection = (index) => {
// //     setSectionSelectionnee(sectionSelectionnee === index ? null : index);
// //   };

// //   const contenuRgpd = t('rgpd.sections', { returnObjects: true }).map((section, index) => {
// //     const animationClass = index % 2 === 0 ? 'gauche' : 'droite';

// //     return (
// //       <div
// //         key={index}
// //         className={`rgpd-toggle-container ${animationClass}`}
// //       >
// //         <div
// //           className={`rgpd-toggle-header ${
// //             sectionSelectionnee === index ? 'active' : ''
// //           }`}
// //           onClick={() => toggleSection(index)}
// //         >
// //           <h3>{section}</h3>
// //         </div>
// //         <div
// //           className={`rgpd-toggle-details ${
// //             sectionSelectionnee === index ? 'show' : 'hide'
// //           }`}
// //         >
// //           <p className="texte">{t(`rgpd.details.${index}`)}</p>
// //         </div>
// //       </div>
// //     );
// //   });

// //   return (
// //     <>
// //       <div className="intro-textRgpd">
// //         <h2>{t('rgpd.title')}</h2> {/* Titre traduit */}
// //       </div>

// //       <div className="rgpd-container">
// //         {/* Sections dynamiques */}
// //         {contenuRgpd}
// //       </div>
// //     </>
// //   );
// // }

// // export default Rgpd;
















// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useTranslation } from 'react-i18next';
// // import './Rgpd.css';

// // function Rgpd() {
// //   const { t } = useTranslation();
// //   const [isMounted, setIsMounted] = useState(false);
// //   const [sectionSelectionnee, setSectionSelectionnee] = useState(null);

// //   const pageName = 'rgpd';

// //   // Enregistrer la visite
// //   const recordVisit = async () => {
// //     try {
// //       const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
// //       if (!visitedPages[pageName]) {
// //         await axios.post('https://apiaeonix-production.up.railway.app/api/visit/rgpd', {}, {
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //         });
// //         visitedPages[pageName] = true;
// //         sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
// //       }
// //     } catch (error) {
// //       console.error("Erreur lors de l'enregistrement de la visite :", error);
// //     }
// //   };

// //   useEffect(() => {
// //     setIsMounted(true);
// //     recordVisit();
// //   }, []);

// //   const toggleSection = (index) => {
// //     setSectionSelectionnee(sectionSelectionnee === index ? null : index);
// //   };

// //   const contenuRgpd = t('rgpd.sections', { returnObjects: true }).map((section, index) => {
// //     const animationClass = index % 2 === 0 ? 'gauche' : 'droite';

// //     return (
// //       <div
// //         key={index}
// //         className={`rgpd-toggle-container ${animationClass}`}
// //       >
// //         <div
// //           className={`rgpd-toggle-header ${
// //             sectionSelectionnee === index ? 'active' : ''
// //           }`}
// //           onClick={() => toggleSection(index)}
// //         >
// //           <h3>{section}</h3>
// //         </div>
// //         <div
// //           className={`rgpd-toggle-details ${
// //             sectionSelectionnee === index ? 'show' : 'hide'
// //           }`}
// //         >
// //           <p className="texte">{t(`rgpd.details.${index}`)}</p>
// //         </div>
// //       </div>
// //     );
// //   });

// //   return (
// //     <>
// //       {/* Titre RGPD avec style mis en valeur */}
// //       <div className="title-highlight-rgpd">
// //         <h2>{t('rgpd.title')}</h2>
// //       </div>

// //       <div className="rgpd-container">
// //         {contenuRgpd}
// //       </div>
// //     </>
// //   );
// // }

// // export default Rgpd;















// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useTranslation } from 'react-i18next';
// // import './Rgpd.css';

// // function Rgpd() {
// //   const { t } = useTranslation();
// //   const [sectionSelectionnee, setSectionSelectionnee] = useState(null);

// //   const pageName = 'rgpd';

// //   // Enregistrer la visite
// //   const recordVisit = async () => {
// //     try {
// //       const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
// //       if (!visitedPages[pageName]) {
// //         await axios.post('https://apiaeonix-production.up.railway.app/api/visit/rgpd', {}, {
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //         });
// //         visitedPages[pageName] = true;
// //         sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
// //       }
// //     } catch (error) {
// //       console.error("Erreur lors de l'enregistrement de la visite :", error);
// //     }
// //   };

// //   useEffect(() => {
// //     recordVisit();
// //   }, []);

// //   const toggleSection = (index) => {
// //     setSectionSelectionnee(sectionSelectionnee === index ? null : index);
// //   };

// //   const contenuRgpd = t('rgpd.sections', { returnObjects: true }).map((section, index) => (
// //     <div
// //       key={index}
// //       className="rgpd-toggle-container"
// //     >
// //       <div
// //         className={`rgpd-toggle-header ${sectionSelectionnee === index ? 'active' : ''}`}
// //         onClick={() => toggleSection(index)}
// //       >
// //         <h3>{section}</h3>
// //       </div>
// //       <div className="rgpd-toggle-details">
// //         {sectionSelectionnee === index && <p>{t(`rgpd.details.${index}`)}</p>}
// //       </div>
// //     </div>
// //   ));

// //   return (
// //     <>
// //       {/* Titre RGPD mis en valeur */}
// //       <div className="title-highlight-rgpd">
// //         <h2>{t('rgpd.title')}</h2>
// //       </div>

// //       <div className="rgpd-container">
// //         {contenuRgpd}
// //       </div>
// //     </>
// //   );
// // }

// // export default Rgpd;


















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useTranslation } from 'react-i18next';
// import './Rgpd.css';

// function Rgpd() {
//   const { t } = useTranslation();
//   const [sectionSelectionnee, setSectionSelectionnee] = useState(null);

//   const pageName = 'rgpd';

//   // Enregistrer la visite
//   const recordVisit = async () => {
//     try {
//       const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
//       if (!visitedPages[pageName]) {
//         await axios.post('https://apiaeonix-production.up.railway.app/api/visit/rgpd', {}, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         visitedPages[pageName] = true;
//         sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
//       }
//     } catch (error) {
//       console.error("Erreur lors de l'enregistrement de la visite :", error);
//     }
//   };

//   useEffect(() => {
//     recordVisit();
//   }, []);

//   const toggleSection = (index) => {
//     setSectionSelectionnee(sectionSelectionnee === index ? null : index);
//   };

//   const contenuRgpd = t('rgpd.sections', { returnObjects: true }).map((section, index) => (
//     <div
//       key={index}
//       className={`rgpd-toggle-container ${index % 2 === 0 ? 'gauche' : 'droite'}`}
//       style={{
//         animationDelay: `${index * 0.1}s`, // Délais pour un effet en cascade
//       }}
//     >
//       <div
//         className={`rgpd-toggle-header ${sectionSelectionnee === index ? 'active' : ''}`}
//         onClick={() => toggleSection(index)}
//       >
//         <h3>{section}</h3>
//       </div>
//       <div className={`rgpd-toggle-details ${sectionSelectionnee === index ? 'show' : ''}`}>
//         {sectionSelectionnee === index && <p>{t(`rgpd.details.${index}`)}</p>}
//       </div>
//     </div>
//   ));

//   return (
//     <>
//       {/* Titre RGPD mis en valeur */}
//       <div className="title-highlight-rgpd">
//         <h2>{t('rgpd.title')}</h2>
//       </div>

//       <div className="rgpd-container">
//         {contenuRgpd}
//       </div>
//     </>
//   );
// }

// export default Rgpd;
















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import './Rgpd.css';

function Rgpd() {
  const { t } = useTranslation(); // Traductions
  const [sectionSelectionnee, setSectionSelectionnee] = useState(null);

  const pageName = 'rgpd';

  // Enregistrer la visite
  useEffect(() => {
    const recordVisit = async () => {
      try {
        const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
        if (!visitedPages[pageName]) {
          await axios.post(
            'https://apiaeonix-production.up.railway.app/api/visit/rgpd',
            {},
            { headers: { 'Content-Type': 'application/json' } }
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

  // Basculer la section
  const toggleSection = (index) => {
    setSectionSelectionnee(sectionSelectionnee === index ? null : index);
  };

  const sections = t('rgpd.sections', { returnObjects: true });
  const details = t('rgpd.details', { returnObjects: true });

  return (
    <>
      {/* Titre RGPD */}
      <div className="intro-text-rgpd">
        <h2>{t('rgpd.title')}</h2>
      </div>

      {/* Conteneur principal */}
      <div className="rgpd-container">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`rgpd-toggle-container ${index % 2 === 0 ? 'gauche' : 'droite'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* En-tête de la section */}
            <div
              className={`rgpd-toggle-header ${
                sectionSelectionnee === index ? 'active' : ''
              }`}
              onClick={() => toggleSection(index)}
            >
              <h3>{section}</h3>
            </div>

            {/* Détails */}
            {sectionSelectionnee === index && (
              <div className="rgpd-toggle-details">
                <p>{details[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Rgpd;
