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
    // useEffect(() => {
    //     const recordVisit = async () => {
    //         const pageName = 'etapesCreationSite';
    //         try {
    //             const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
    //             if (!visitedPages[pageName]) {
    //                 const response = await axios.post(
    //                     `https://apiaeonix-production.up.railway.app/api/visit/${pageName}`,
    //                     {},
    //                     {
    //                         headers: {
    //                             'Content-Type': 'application/json',
    //                         },
    //                     }
    //                 );
    //                 console.log("Visite enregistrée avec succès", response.data);
    //                 visitedPages[pageName] = true;
    //                 sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
    //             } else {
    //                 console.log("La visite pour cette page a déjà été enregistrée pendant cette session.");
    //             }
    //         } catch (error) {
    //             console.error("Erreur lors de l'enregistrement de la visite :", error);
    //         }
    //     };

    //     recordVisit();
    // }, []);


    useEffect(() => {
        const recordVisit = async () => {
            const pageName = 'etapesCreationSite';
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
