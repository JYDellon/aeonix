// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Importation d'Axios pour envoyer la requête
// import './EtapesDansLaCreationDunSite.css';

// function EtapesDansLaCreationDunSite() {
//     const etapes = [
//         "Vos besoins",
//         "Maquettes & Propositions",
//         "Développement web",
//         "Mise en ligne",
//         "Accompagnement continu",
//     ];

//     const etapesDetails = [
//         "Nous commencerons par une discussion pour comprendre vos attentes et objectifs. Cette étape essentielle nous permettra de poser les bases d’un site qui correspond parfaitement à vos besoins.",
//         "À partir de vos idées, nous concevons des maquettes ou des schémas détaillés, accompagnés d’une proposition sur-mesure. Vous aurez ainsi une vision claire du futur site et pourrez valider son design avant de passer au développement.",
//         "Une fois la maquette validée, nous développons votre site avec soin, en intégrant chaque fonctionnalité selon vos besoins. Chaque étape est minutieusement testée pour garantir un rendu performant et conforme à vos attentes.",
//         "Une fois votre site finalisé, nous le mettons en ligne et veillons à ce qu’il soit parfaitement fonctionnel, prêt à offrir la meilleure expérience à vos visiteurs.",
//         "Après la mise en ligne, nous restons à vos côtés pour un suivi personnalisé. Nous vous accompagnons dans l’évolution de votre site, en effectuant des mises à jour, des ajustements, ou en répondant à vos besoins changeants.",
//     ];

//     const [etapeSelectionnee, setEtapeSelectionnee] = useState(null);

//     // Fonction pour gérer l'ouverture et la fermeture des étapes
//     const toggleEtape = (index) => {
//         setEtapeSelectionnee(etapeSelectionnee === index ? null : index);
//     };

//     // Enregistrer la visite lors du chargement de la page
//     useEffect(() => {
//         const recordVisit = async () => {
//             try {
//                 const response = await axios.post('https://aeonixbackend.vercel.app/api/visit/etapesCreationSite', {}, {
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 });
//                 console.log("Visite enregistrée avec succès", response.data);
//             } catch (error) {
//                 console.error("Erreur lors de l'enregistrement de la visite :", error);
//             }
//         };

//         recordVisit();
//     }, []);

//     return (
//         <>
//             <div>
//                 {/* Texte d'introduction */}
//                 <div className="intro-text">
//                     <h2>
//                         Votre site web clés en main
//                     </h2>
//                 </div>
//             </div>
//             <div className="etapes-container">
//                 {etapes.map((etape, index) => (
//                     <div key={index} className="etape-toggle-container">
//                         {/* En-tête de l'étape */}
//                         <div
//                             className={`etape-toggle-header ${
//                                 etapeSelectionnee === index ? 'active' : ''
//                             }`}
//                             onClick={() => toggleEtape(index)}
//                         >
//                             <div>
//                                 <h3>{etape}</h3>
//                             </div>
//                         </div>

//                         {/* Détails de l'étape */}
//                         {etapeSelectionnee === index && (
//                             <div className="etape-toggle-details">
//                                 <p className="texte">{etapesDetails[index]}</p>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

// export default EtapesDansLaCreationDunSite;























// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Importation d'Axios pour envoyer la requête
// import './EtapesDansLaCreationDunSite.css';

// function EtapesDansLaCreationDunSite() {
//     const etapes = [
//         "Vos besoins",
//         "Maquettes & Propositions",
//         "Développement web",
//         "Mise en ligne",
//         "Accompagnement continu",
//     ];

//     const etapesDetails = [
//         "Nous commencerons par une discussion pour comprendre vos attentes et objectifs. Cette étape essentielle nous permettra de poser les bases d’un site qui correspond parfaitement à vos besoins.",
//         "À partir de vos idées, nous concevons des maquettes ou des schémas détaillés, accompagnés d’une proposition sur-mesure. Vous aurez ainsi une vision claire du futur site et pourrez valider son design avant de passer au développement.",
//         "Une fois la maquette validée, nous développons votre site avec soin, en intégrant chaque fonctionnalité selon vos besoins. Chaque étape est minutieusement testée pour garantir un rendu performant et conforme à vos attentes.",
//         "Une fois votre site finalisé, nous le mettons en ligne et veillons à ce qu’il soit parfaitement fonctionnel, prêt à offrir la meilleure expérience à vos visiteurs.",
//         "Après la mise en ligne, nous restons à vos côtés pour un suivi personnalisé. Nous vous accompagnons dans l’évolution de votre site, en effectuant des mises à jour, des ajustements, ou en répondant à vos besoins changeants.",
//     ];

//     const [etapeSelectionnee, setEtapeSelectionnee] = useState(null);

//     // Fonction pour gérer l'ouverture et la fermeture des étapes
//     const toggleEtape = (index) => {
//         setEtapeSelectionnee(etapeSelectionnee === index ? null : index);
//     };

//     // Enregistrer la visite lors du chargement de la page
//     useEffect(() => {
//         const recordVisit = async () => {
//             const pageName = 'etapesCreationSite';
//             try {
//                 // Vérifier si la page a déjà été enregistrée dans sessionStorage
//                 const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
//                 if (!visitedPages[pageName]) {
//                     // Si non, envoyer la requête pour enregistrer la visite
//                     const response = await axios.post(
//                         `https://aeonixbackend.vercel.app/api/visit/${pageName}`,
//                         {},
//                         {
//                             headers: {
//                                 'Content-Type': 'application/json',
//                             },
//                         }
//                     );
//                     console.log("Visite enregistrée avec succès", response.data);

//                     // Ajouter cette page aux pages visitées dans sessionStorage
//                     visitedPages[pageName] = true;
//                     sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
//                 } else {
//                     console.log("La visite pour cette page a déjà été enregistrée pendant cette session.");
//                 }
//             } catch (error) {
//                 console.error("Erreur lors de l'enregistrement de la visite :", error);
//             }
//         };

//         recordVisit();
//     }, []);

//     return (
//         <>
//             <div>
//                 {/* Texte d'introduction */}
//                 <div className="intro-text">
//                     <h2>
//                         Votre site web clés en main
//                     </h2>
//                 </div>
//             </div>
//             <div className="etapes-container">
//                 {etapes.map((etape, index) => (
//                     <div key={index} className="etape-toggle-container">
//                         {/* En-tête de l'étape */}
//                         <div
//                             className={`etape-toggle-header ${
//                                 etapeSelectionnee === index ? 'active' : ''
//                             }`}
//                             onClick={() => toggleEtape(index)}
//                         >
//                             <div>
//                                 <h3>{etape}</h3>
//                             </div>
//                         </div>

//                         {/* Détails de l'étape */}
//                         {etapeSelectionnee === index && (
//                             <div className="etape-toggle-details">
//                                 <p className="texte">{etapesDetails[index]}</p>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

// export default EtapesDansLaCreationDunSite;


















import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importation d'Axios pour envoyer la requête
import { useTranslation } from 'react-i18next'; // Importez le hook
import './EtapesDansLaCreationDunSite.css';

function EtapesDansLaCreationDunSite() {
    const { t } = useTranslation(); // Hook pour traductions
    const [etapeSelectionnee, setEtapeSelectionnee] = useState(null);

    // Fonction pour gérer l'ouverture et la fermeture des étapes
    const toggleEtape = (index) => {
        setEtapeSelectionnee(etapeSelectionnee === index ? null : index);
    };

    // Enregistrer la visite lors du chargement de la page
    useEffect(() => {
        const recordVisit = async () => {
            const pageName = 'etapesCreationSite';
            try {
                const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
                if (!visitedPages[pageName]) {
                    const response = await axios.post(
                        `https://aeonixbackend.vercel.app/api/visit/${pageName}`,
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

        recordVisit();
    }, []);

    return (
        <>
            <div>
                {/* Texte d'introduction */}
                <div className="intro-text">
                    <h2>{t('etapes.title')}</h2>
                </div>
            </div>
            <div className="etapes-container">
                {t('etapes.steps', { returnObjects: true }).map((etape, index) => (
                    <div key={index} className="etape-toggle-container">
                        {/* En-tête de l'étape */}
                        <div
                            className={`etape-toggle-header ${
                                etapeSelectionnee === index ? 'active' : ''
                            }`}
                            onClick={() => toggleEtape(index)}
                        >
                            <div>
                                <h3>{etape}</h3>
                            </div>
                        </div>

                        {/* Détails de l'étape */}
                        {etapeSelectionnee === index && (
                            <div className="etape-toggle-details">
                                <p className="texte">
                                    {t(`etapes.details.${index}`)}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default EtapesDansLaCreationDunSite;
