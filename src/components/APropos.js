

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios'; // Importation d'Axios pour envoyer la requête
// // import './APropos.css';

// // function APropos() {
// //     const chapitres = [
// //         "Qui sommes-nous ?",
// //         "Notre mission",
// //         "Nos valeurs",
// //         "Notre vision pour l’avenir",
// //         "Pourquoi nous choisir ?"
// //     ];

// //     const chapitresDetails = [
// //         "Créée en 2025, notre société s’engage à accompagner les entreprises dans leur transformation digitale grâce à des solutions web modernes, esthétiques et performantes.\n\nSpécialisés dans la conception de sites vitrines et e-commerce, nous mettons notre expertise au service des entreprises de toutes tailles, pour les aider à se démarquer et à atteindre leurs objectifs en ligne.\n\nDepuis notre lancement, nous avons déjà collaboré avec [nombre ou type de clients, ex. : plusieurs TPE, PME ou artisans] et avons à cœur de construire des relations durables basées sur la qualité, la confiance et l’innovation.",

// //         "Notre mission est claire :\n\n- Fournir des sites web sur mesure, à la fois beaux et fonctionnels.\n- Aider nos clients à développer leur visibilité et leur notoriété en ligne.\n- Simplifier la création et la gestion de leur présence numérique grâce à des outils adaptés.\n\nNous savons qu’un site internet n’est pas seulement une vitrine : c’est un levier essentiel pour atteindre vos prospects et fidéliser vos clients.",

// //         "Nos valeurs sont au cœur de tout ce que nous entreprenons :\n\n- Innovation : Nous utilisons des technologies modernes pour offrir des solutions durables et évolutives.\n- Proximité : Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et dépasser leurs attentes.\n- Excellence : Nous mettons un point d’honneur à livrer des projets de haute qualité, dans les délais impartis.\n- Simplicité : Nous créons des solutions faciles à prendre en main pour garantir votre autonomie.",

// //         "Nous avons l’ambition de devenir un partenaire clé pour les entreprises souhaitant se démarquer en ligne.\n\nDans les prochaines années, nous souhaitons :\n\n- Collaborer avec un réseau élargi de clients dans divers secteurs.\n- Proposer des services innovants pour anticiper les nouvelles attentes du marché.\n- Continuer à offrir un service client irréprochable, afin de bâtir une réputation solide et durable.",

// //         "Depuis notre création, nous avons fait nos preuves en accompagnant des entreprises ambitieuses dans leurs projets numériques. Voici pourquoi nos clients nous font confiance :\n\n- Une approche personnalisée : Chaque projet est unique, et nous prenons le temps de comprendre vos besoins.\n- Des solutions modernes et performantes : Nous utilisons des technologies récentes pour garantir la qualité et la longévité de vos sites.\n- Un accompagnement complet : De l’idée initiale à la mise en ligne, nous vous guidons à chaque étape.\n- Un excellent rapport qualité-prix : Nous offrons des prestations de qualité à des tarifs compétitifs."
// //     ];

// //     const [chapitreSelectionne, setChapitreSelectionne] = useState(null);

// //     const toggleChapitre = (index) => {
// //         setChapitreSelectionne(chapitreSelectionne === index ? null : index);
// //     };

// //     // Fonction pour enregistrer la visite
// //     const recordVisit = async () => {
// //         try {
// //             const response = await axios.post(
// //                 'https://apiaeonix-production.up.railway.app/api/visit/a-propos',
// //                 {},
// //                 {
// //                     headers: {
// //                         'Content-Type': 'application/json',
// //                     }
// //                 }
// //             );
// //             console.log("[recordVisit] Visite enregistrée avec succès :", response.data);
// //         } catch (error) {
// //             console.error("[recordVisit] Erreur lors de l'enregistrement de la visite :", error);
// //         }
// //     };

// //     // Vérification et enregistrement de la visite unique par session
// //     useEffect(() => {
// //         const pageName = 'a-propos'; // Nom unique de la page
// //         const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};

// //         if (!visitedPages[pageName]) {
// //             console.log(`[useEffect] La page "${pageName}" n'a pas encore été visitée dans cette session.`);
// //             recordVisit();
// //             visitedPages[pageName] = true;
// //             sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
// //         } else {
// //             console.log(`[useEffect] La page "${pageName}" a déjà été visitée dans cette session.`);
// //         }
// //     }, []);

// //     return (
// //         <div className="apropos-container">
// //             {chapitres.map((chapitre, index) => (
// //                 <div
// //                     key={index}
// //                     className={`chapitre-toggle-container ${
// //                         index % 2 === 0 ? 'gauche' : 'droite'
// //                     }`}
// //                     style={{
// //                         animationDelay: `${index * 0.1}s`,
// //                     }}
// //                 >
// //                     {/* En-tête du chapitre */}
// //                     <div
// //                         className="chapitre-toggle-header"
// //                         onClick={() => toggleChapitre(index)}
// //                         aria-expanded={chapitreSelectionne === index}
// //                         role="button"
// //                         tabIndex="0"
// //                     >
// //                         <h3>{chapitre}</h3>
// //                     </div>

// //                     {/* Détails du chapitre */}
// //                     <div
// //                         className={`chapitre-toggle-details ${
// //                             chapitreSelectionne === index ? 'show' : ''
// //                         }`}
// //                     >
// //                         <p className="texte">{chapitresDetails[index]}</p>
// //                     </div>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // }

// // export default APropos;

























// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios'; // Importation d'Axios pour envoyer la requête
// // import { useTranslation } from 'react-i18next'; // Importation de useTranslation
// // import './APropos.css';

// // function APropos() {
// //     const { t } = useTranslation(); // Hook pour accéder aux traductions

// //     const chapters = t('apropos.chapters', { returnObjects: true });
// //     const chapterDetails = t('apropos.details', { returnObjects: true });

// //     const [selectedChapter, setSelectedChapter] = useState(null);

// //     const toggleChapter = (index) => {
// //         setSelectedChapter(selectedChapter === index ? null : index);
// //     };

// //     // Fonction pour enregistrer la visite
// //     const recordVisit = async () => {
// //         try {
// //             const response = await axios.post(
// //                 'https://apiaeonix-production.up.railway.app/api/visit/a-propos',
// //                 {},
// //                 {
// //                     headers: {
// //                         'Content-Type': 'application/json',
// //                     }
// //                 }
// //             );
// //             console.log("[recordVisit] Visite enregistrée avec succès :", response.data);
// //         } catch (error) {
// //             console.error("[recordVisit] Erreur lors de l'enregistrement de la visite :", error);
// //         }
// //     };

// //     // Vérification et enregistrement de la visite unique par session
// //     useEffect(() => {
// //         const pageName = 'a-propos'; // Nom unique de la page
// //         const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};

// //         if (!visitedPages[pageName]) {
// //             console.log(`[useEffect] La page "${pageName}" n'a pas encore été visitée dans cette session.`);
// //             recordVisit();
// //             visitedPages[pageName] = true;
// //             sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
// //         } else {
// //             console.log(`[useEffect] La page "${pageName}" a déjà été visitée dans cette session.`);
// //         }
// //     }, []);

// //     return (
// //         <div className="apropos-container">
// //             {chapters.map((chapter, index) => (
// //                 <div
// //                     key={index}
// //                     className={`chapitre-toggle-container ${
// //                         index % 2 === 0 ? 'gauche' : 'droite'
// //                     }`}
// //                     style={{
// //                         animationDelay: `${index * 0.1}s`,
// //                     }}
// //                 >
// //                     {/* En-tête du chapitre */}
// //                     <div
// //                         className="chapitre-toggle-header"
// //                         onClick={() => toggleChapter(index)}
// //                         aria-expanded={selectedChapter === index}
// //                         role="button"
// //                         tabIndex="0"
// //                     >
// //                         <h3>{chapter}</h3>
// //                     </div>

// //                     {/* Détails du chapitre */}
// //                     <div
// //                         className={`chapitre-toggle-details ${
// //                             selectedChapter === index ? 'show' : ''
// //                         }`}
// //                     >
// //                         <p className="texte">{chapterDetails[index]}</p>
// //                     </div>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // }

// // export default APropos;



























// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Importation d'Axios pour envoyer la requête
// import { useTranslation } from 'react-i18next'; // Importation de useTranslation
// import './APropos.css';

// function APropos() {
//     const { t } = useTranslation(); // Hook pour accéder aux traductions

//     const chapters = t('apropos.chapters', { returnObjects: true });
//     const chapterDetails = t('apropos.details', { returnObjects: true });

//     const [selectedChapter, setSelectedChapter] = useState(null);

//     const toggleChapter = (index) => {
//         setSelectedChapter(selectedChapter === index ? null : index);
//     };

//     // Fonction pour enregistrer la visite
//     const recordVisit = async () => {
//         try {
//             const response = await axios.post(
//                 'https://apiaeonix-production.up.railway.app/api/visit/a-propos',
//                 {},
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                     }
//                 }
//             );
//             console.log("[recordVisit] Visite enregistrée avec succès :", response.data);
//         } catch (error) {
//             console.error("[recordVisit] Erreur lors de l'enregistrement de la visite :", error);
//         }
//     };

//     // Vérification et enregistrement de la visite unique par session
//     useEffect(() => {
//         const pageName = 'a-propos'; // Nom unique de la page
//         const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};

//         if (!visitedPages[pageName]) {
//             console.log(`[useEffect] La page "${pageName}" n'a pas encore été visitée dans cette session.`);
//             recordVisit();
//             visitedPages[pageName] = true;
//             sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
//         } else {
//             console.log(`[useEffect] La page "${pageName}" a déjà été visitée dans cette session.`);
//         }
//     }, []);

//     // Fonction pour formater les détails avec des retours à la ligne
//     const formatTextWithParagraphs = (text) => {
//         return text.split('\n\n').map((paragraph, index) => (
//             <p key={index} className="texte-paragraphe">{paragraph}</p>
//         ));
//     };

//     return (
//         <div className="apropos-container">
//             {chapters.map((chapter, index) => (
//                 <div
//                     key={index}
//                     className={`chapitre-toggle-container ${
//                         index % 2 === 0 ? 'gauche' : 'droite'
//                     }`}
//                     style={{
//                         animationDelay: `${index * 0.1}s`,
//                     }}
//                 >
//                     {/* En-tête du chapitre */}
//                     <div
//                         className="chapitre-toggle-header"
//                         onClick={() => toggleChapter(index)}
//                         aria-expanded={selectedChapter === index}
//                         role="button"
//                         tabIndex="0"
//                     >
//                         <h3>{chapter}</h3>
//                     </div>

//                     {/* Détails du chapitre */}
//                     <div
//                         className={`chapitre-toggle-details ${
//                             selectedChapter === index ? 'show' : ''
//                         }`}
//                     >
//                         {formatTextWithParagraphs(chapterDetails[index])}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default APropos;



















import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importation d'Axios pour envoyer la requête
import { useTranslation } from 'react-i18next'; // Importation de useTranslation
import './APropos.css';

function APropos() {
    const { t } = useTranslation(); // Hook pour accéder aux traductions

    const chapters = t('apropos.chapters', { returnObjects: true });
    const chapterDetails = t('apropos.details', { returnObjects: true });

    const [selectedChapter, setSelectedChapter] = useState(null);

    const toggleChapter = (index) => {
        setSelectedChapter(selectedChapter === index ? null : index);
    };

    // Fonction pour enregistrer la visite
    const recordVisit = async () => {
        try {
            const response = await axios.post(
                'https://apiaeonix-production.up.railway.app/api/visit/a-propos',
                {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
            console.log("[recordVisit] Visite enregistrée avec succès :", response.data);
        } catch (error) {
            console.error("[recordVisit] Erreur lors de l'enregistrement de la visite :", error);
        }
    };

    // Vérification et enregistrement de la visite unique par session
    useEffect(() => {
        const pageName = 'a-propos'; // Nom unique de la page
        const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};

        if (!visitedPages[pageName]) {
            console.log(`[useEffect] La page "${pageName}" n'a pas encore été visitée dans cette session.`);
            recordVisit();
            visitedPages[pageName] = true;
            sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
        } else {
            console.log(`[useEffect] La page "${pageName}" a déjà été visitée dans cette session.`);
        }
    }, []);

    // Fonction pour formater les détails avec des retours à la ligne
    const formatTextWithParagraphs = (text) => {
        return text.split('\n\n').map((paragraph, index) => (
            <p key={index} className="texte-paragraphe" style={{ margin: '10px', lineHeight: '1.6' }}>{paragraph}</p>
        ));
    };

    return (
        <div className="apropos-container">
            {chapters.map((chapter, index) => (
                <div
                    key={index}
                    className={`chapitre-toggle-container ${
                        index % 2 === 0 ? 'gauche' : 'droite'
                    }`}
                    style={{
                        animationDelay: `${index * 0.1}s`,
                    }}
                >
                    {/* En-tête du chapitre */}
                    <div
                        className="chapitre-toggle-header"
                        onClick={() => toggleChapter(index)}
                        aria-expanded={selectedChapter === index}
                        role="button"
                        tabIndex="0"
                    >
                        <h3>{chapter}</h3>
                    </div>

                    {/* Détails du chapitre */}
                    <div
                        className={`chapitre-toggle-details ${
                            selectedChapter === index ? 'show' : ''
                        }`}
                        style={{
                            padding: selectedChapter === index ? '20px' : '0px',
                            border: selectedChapter === index ? '1px solid #ccc' : 'none',
                            borderRadius: '8px',
                            margin: '0px 0',
                            overflow: 'hidden',
                            transition: 'padding 0.3s ease, border 0.3s ease',
                        }}
                    >
                        {selectedChapter === index && formatTextWithParagraphs(chapterDetails[index])}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default APropos;
