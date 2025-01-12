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
                'https://localhost:8000/api/visit/a-propos',
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
