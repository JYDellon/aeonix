import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import axios from 'axios';
import { useTranslation } from 'react-i18next'; // Importation du hook
import './Accueil.css';
import siteVitrine from '../assets/images/developpement-front.jpg';
import siteEcommerce from '../assets/images/siteVitrine.jpg';
import sitePersonnalise from '../assets/images/together.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Accueil() {
    const navigate = useNavigate();
    const { t } = useTranslation(); // Hook pour les traductions
    const pageUrl  = 'accueil'; // Nom unique pour la page

    // Configuration du carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,

    };

    const recordVisit = async () => {
        try {
            // Vérifier si la page a déjà été enregistrée dans sessionStorage
            const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || {};
            if (!visitedPages[pageUrl ]) {
                // Si non, envoyer la requête pour enregistrer la visite
                const response = await axios.post(
                    `https://api-aeonix.vercel.app/api/visit/${pageUrl }`,


                    {},
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                console.log("Visite enregistrée avec succès :", response.data);

                // Ajouter cette page aux pages visitées dans sessionStorage
                visitedPages[pageUrl ] = true;
                sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
            } else {
                console.log("La visite pour cette page a déjà été enregistrée pendant cette session.");
            }
        } catch (error) {
            console.error("Erreur lors de l'enregistrement de la visite :", error);
        }
    };

    // Enregistrer la visite lors du premier chargement de la page pour la session
    useEffect(() => {
        recordVisit();
    }, []);

    return (
        <>
            <div className="intro-textAccueil">
                <h2>{t('welcome')}</h2> {/* Traduction du texte d'introduction */}
            </div>
            <div className="centrage">
                <div className="accueil-container">
                    {/* Carte : Étapes de création du site */}
                    <div className="cardm" onClick={() => navigate('/etapesCreationSite')}>
                        <h3>{t('cards.siteWebTitle')}</h3> {/* Titre traduit */}
                        <h3>{t('cards.siteWebSubtitle')}</h3> {/* Sous-titre traduit */}
                    </div>

                    {/* Carte : Devis */}
                    <div className="cardmDevis" onClick={() => navigate('/devis')}>
                        <h3>{t('cards.devisTitle')}</h3> {/* Titre traduit */}
                        <h3>{t('cards.devisSubtitle')}</h3> {/* Sous-titre traduit */}
                    </div>

                    {/* Carousel */}
                    <div className="carousel-container">
                        <Slider {...settings}>
                            <div className="slide">
                                <div className="slide-content">
                                    <img src={siteVitrine} alt={t('carousel.slide1')} className="carousel-image" />
                                    <h3>{t('carousel.slide1')}</h3> {/* Texte traduit */}
                                </div>
                            </div>
                            <div className="slide">
                                <div className="slide-content">
                                    <img src={siteEcommerce} alt={t('carousel.slide2')} className="carousel-image" />
                                    <h3>{t('carousel.slide2')}</h3> {/* Texte traduit */}
                                </div>
                            </div>
                            <div className="slide">
                                <div className="slide-content">
                                    <img src={sitePersonnalise} alt={t('carousel.slide3')} className="carousel-image" />
                                    <h3>{t('carousel.slide3')}</h3> {/* Texte traduit */}
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Accueil;
