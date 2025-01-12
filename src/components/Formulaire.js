import ModalSuccess from './ModalSuccess';
import './Formulaire.css';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import ModalError from './ModalError';  // Import de la modale
import { useTranslation } from 'react-i18next'; // Importation pour la traduction

const Formulaire = () => {
  const [etape, setEtape] = useState(1);
  const [typeDeProjet, setTypeDeProjet] = useState('');
  const [urlSite, setUrlSite] = useState('');
  const [urlSiteRefonte, setUrlSiteRefonte] = useState('');
  const [objectifs, setObjectifs] = useState('');
  const [fonctionnalites, setFonctionnalites] = useState([]);
  const [graphisme, setGraphisme] = useState('');
  const [nom, setNom] = useState('');
  const [nomEntreprise, setNomEntreprise] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const navigate = useNavigate();
  const [besoinsHébergement, setBesoinsHébergement] = useState({
    hebergement: false,
    seo: false,
    vitesse: false,
    nomDomaine: false,
    migration: false,
  });  const [etape3Sub, setEtape3Sub] = useState(1);
const [prenom, setPrenom] = useState('');
const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false); // État pour la modale de succès
const { t } = useTranslation(); // Hook pour traductions

  const [descriptionBesoins, setDescriptionBesoins] = useState('');
  const [prestation, setPrestation] = useState('');
  const [refonteChoisie, setRefonteChoisie] = useState(false);
  const [typeProjetSelectionne, setTypeProjetSelectionne] = useState('');
  const [progression, setProgression] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);  // État pour afficher la modale d'erreur
  const [errorMessage, setErrorMessage] = useState('');  // Message d'erreur à afficher
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [domaineOption, setDomaineOption] = useState('');
  const [maintenanceOption, setMaintenanceOption] = useState('');
  const [langueOption, setLangueOption] = useState('');
  

  const handleBesoinsChange = (e) => {
    const { name, checked } = e.target;
    setBesoinsHébergement((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleFonctionnaliteChange = (fonctionnalite) => {
    setFonctionnalites((prev) =>
      prev.includes(fonctionnalite)
        ? prev.filter((item) => item !== fonctionnalite)
        : [...prev, fonctionnalite]
    );
  };

  const handleNomChange = (e) => {
    const value = e.target.value;
    if (validateNomPrenom(value)) {
      setNom(value);
    }
  };

  const handlePrenomChange = (e) => {
    const value = e.target.value;
    if (validateNomPrenom(value)) {
      setPrenom(value);
    }
  };

  const handleTelephoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setTelephone(value);
  };


  const formatTelephone = () => {
    if (validateTelephone(telephone)) {
        const formatted = telephone.replace(/(\d{2})(?=\d)/g, '$1-'); // Ajoute un tiret tous les deux chiffres
        setTelephone(formatted);
    } else {
        // Afficher l'erreur dans la modale
        setErrorMessage("Le numéro de téléphone doit contenir exactement 10 chiffres.");
        setIsModalVisible(true); // Affiche la modale d'erreur
    }
};

  const validateNomPrenom = (value) => {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ \-]+$/.test(value); // Allowing letters, spaces, and hyphens
  };
  
  const validateUrl = (url) => {
    const urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$/;
    return urlRegex.test(url);
  };

  const validateTelephone = (value) => {
    return /^\d{10}$/.test(value); // Ensuring the telephone has exactly 10 digits
  };  

  const handleSelection = (service) => {
    setPrestation(service);
    setEtape(2);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };


  useEffect(() => {
    const calcProgression = () => {
      let progress = 0;
  
      if (etape === 1) {
        progress = 14.29;
      } else if (etape === 2) {
        progress = 28.58;
      } else if (etape === 3) {
        if (etape3Sub === 1) {
          progress = 42.87;
        } else if (etape3Sub === 2) {
          progress = 57.16;
        }
      } else if (etape === 4) {
        progress = 71.45;
      }else if (etape === 5) {
        progress = 85.74;
      }else if (etape === 6) {
        progress = 100;
      }

      setProgression(progress);
    };
  
    calcProgression();
  }, [etape, etape3Sub]);
  



const handleSuivant = (e) => {
        if (etape === 2) {
          if (!typeProjetSelectionne) {
              setErrorMessage("Veuillez choisir un type de projet avant de continuer.");
              setIsModalVisible(true); // Afficher la modale d'erreur
              return;
          }

          // Si le type de projet est "création" et que les objectifs ne sont pas renseignés
          if (typeProjetSelectionne === "création" && !objectifs.trim()) {
              setErrorMessage("Veuillez remplir 'Vos objectifs' avant de continuer.");
              setIsModalVisible(true);
              return;
          }

          if (
              typeProjetSelectionne === "refonte" &&
              (!urlSiteRefonte.trim() || !objectifs.trim() || !validateUrl(urlSiteRefonte))  // Validation de l'URL
          ) {
              setErrorMessage(
                  "Pour une refonte, veuillez remplir l'URL du site à refondre ainsi que vos objectifs avant de continuer."
              );
              setIsModalVisible(true);
              return;
          }
      }

      if (etape === 3) {
          if (etape3Sub === 2 && !graphisme) {
              setErrorMessage("Veuillez sélectionner une option de graphisme avant de continuer.");
              setIsModalVisible(true);
              return;
          }
          if (etape3Sub < 2) {
              setEtape3Sub(etape3Sub + 1);
          } else {
              setEtape(etape + 1);
          }
      } else 
      if (etape === 4) {
        if (!domaineOption) {
          setErrorMessage("Veuillez sélectionner une option pour le domaine et l'hébergement.");
          setIsModalVisible(true);
          return;
        }
        if (!maintenanceOption) {
          setErrorMessage("Veuillez sélectionner une option pour la maintenance.");
          setIsModalVisible(true);
          return;
        }

      }

      if (etape === 5) {
        if (!langueOption) {
          setErrorMessage("Veuillez sélectionner une option pour les langues disponibles.");
          setIsModalVisible(true);
          return;
        }
      }

      if (etape === 6) {
        if (!nom.trim() || !prenom.trim()) {
          setErrorMessage("Veuillez remplir votre nom et prénom avant de continuer.");
          setIsModalVisible(true);
          return;
        }
        if (!email.trim() || !validateEmail(email)) {
          setErrorMessage("Veuillez saisir un email valide avant de continuer.");
          setIsModalVisible(true);
          return;
        }
        envoyerEmail(e);
      }


      if (etape >= 6) {
        return;
    }

      setEtape(etape + 1);
};


  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  const validatePhoneNumber = (telephone) => {
    const phoneRegex = /^(\+?\d{1,2}[-\s]?)?(\(?\d{1,3}\)?[-\s]?)?[\d\s-]{7,15}$/;
    return phoneRegex.test(telephone);
  };

  const handlePrecedent = () => {
    if (etape === 3) {
      if (etape3Sub > 1) {
        setEtape3Sub(etape3Sub - 1);
      } else {
        setEtape(etape - 1);
      }
    } 
    // else {
    //   setEtape(etape - 1);
    // }
  };


  // const envoyerEmail = async (e) => {
  //   e.preventDefault();
  
  //   // Traductions des réponses utilisateur de l'anglais vers le français
  //   const traductions = {
  //     prestation: {
  //       vitrine: "Site vitrine",
  //       ecommerce: "Site e-commerce",
  //       custom: "Site personnalisé",
  //       hosting: "Hébergement / Nom de domaine",
  //     },
  //     fonctionnalites: {
  //       "Registration forms, quote requests": "Formulaires d'inscription, demande de devis",
  //       "Blog": "Blog",
  //       "Private or privileged space (client/member access)": "Espace privé ou privilégié (accès client/membre)",
  //       "Appointment booking": "Prise de rendez-vous",
  //       "Reservation": "Réservation",
  //       "File management (upload)": "Gestion de fichiers (téléchargement)",
  //       "Dynamic map like Google Maps (locations)": "Carte dynamique type Google Maps (localisations)",
  //     },
  //     graphisme: {
  //       "I have no elements": "Je n'ai aucun élément",
  //       "I want my logo and graphic charter to be created": "Je veux faire créer mon logo et ma charte graphique",
  //       "I provide detailed instructions for the graphics (graphic charter, zoning, mockups...)":
  //         "Je fournis des instructions détaillées pour le graphisme (charte graphique, zoning, maquettes...)",
  //     },
  //     specific_needs_labels: {
  //       hebergement: "Hébergement",
  //       seo: "Référencement naturel (SEO)",
  //       vitesse: "Amélioration de la vitesse de chargement",
  //       nomDomaine: "Nom de domaine",
  //       migration: "Migration d'hébergement",
  //     },
  //   };
  
  //   // Traduction des réponses
  //   const prestationTraduit = traductions.prestation[prestation] || prestation;
  //   const fonctionnalitesTraduites = fonctionnalites
  //     .map((fonctionnalite) => traductions.fonctionnalites[fonctionnalite] || fonctionnalite)
  //     .join(', ');
  //   const graphismeTraduit = traductions.graphisme[graphisme] || graphisme;
  //   const besoinsHebergementTraduits = Object.entries(besoinsHébergement)
  //     .filter(([_, checked]) => checked)
  //     .map(([key]) => traductions.specific_needs_labels[key] || key)
  //     .join(', ') || 'Aucun besoin spécifique';
  
  //   // Traduction des champs texte saisis par l'utilisateur
  //   const objectifsTraduit = await traduireTexte(objectifs, "fr");
  //   const descriptionBesoinsTraduit = await traduireTexte(descriptionBesoins, "fr");
  //   const urlSiteTraduit = await traduireTexte(urlSite, "fr");
  //   const urlSiteRefonteTraduit = await traduireTexte(urlSiteRefonte, "fr");
  
  //   // Créer les paramètres du modèle d'e-mail
  //   const templateParams = {
  //     prenom,
  //     nom,
  //     email,
  //     telephone,
  //     nomEntreprise,
  //     prestation: prestationTraduit,
  //     descriptionBesoins: descriptionBesoinsTraduit,
  //     objectifs: objectifsTraduit,
  //     urlSite: prestation === 'hosting' && urlSiteTraduit.trim() !== '' ? urlSiteTraduit : '',
  //     fonctionnalites: fonctionnalitesTraduites,
  //     graphisme: graphismeTraduit,
  //     typeProjet: typeProjetSelectionne === 'création'
  //       ? `Création d'un site ${prestationTraduit}`
  //       : `Refonte d'un site ${prestationTraduit}`,
  //     urlSiteRefonte: refonteChoisie ? urlSiteRefonteTraduit : '',
  //     besoinsHebergement: besoinsHebergementTraduits,
  
  //     // Ajout des nouvelles pages
  //     domaineOption: domaineOption || "Non spécifié",
  //     maintenanceOption: maintenanceOption || "Non spécifié",
  //     langueOption: langueOption || "Non spécifié",
  //   };
  
  //   try {
  //     const response = await fetch('https://localhost:8000/api/devis', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(templateParams),
  //     });
  
  //     if (response.ok) {
  //       setIsSuccessModalVisible(true); // Afficher la modale de succès
  //     } else {
  //       setErrorMessage("Une erreur est survenue lors de l'envoi de votre demande.");
  //       setIsModalVisible(true); // Afficher la modale d'erreur
  //     }
  //   } catch (error) {
  //     setErrorMessage("Une erreur est survenue lors de l'envoi de votre demande.");
  //     setIsModalVisible(true); // Afficher la modale d'erreur
  //   }
  // };
  





  const envoyerEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Activer le spinner
    
    try {
        // Traductions des réponses utilisateur de l'anglais vers le français
        const traductions = {
            prestation: {
                vitrine: "Site vitrine",
                ecommerce: "Site e-commerce",
                custom: "Site personnalisé",
                hosting: "Hébergement / Nom de domaine",
            },
            fonctionnalites: {
                "Registration forms, quote requests": "Formulaires d'inscription, demande de devis",
                "Blog": "Blog",
                "Private or privileged space (client/member access)": "Espace privé ou privilégié (accès client/membre)",
                "Appointment booking": "Prise de rendez-vous",
                "Reservation": "Réservation",
                "File management (upload)": "Gestion de fichiers (téléchargement)",
                "Dynamic map like Google Maps (locations)": "Carte dynamique type Google Maps (localisations)",
            },
            graphisme: {
                "I have no elements": "Je n'ai aucun élément",
                "I want my logo and graphic charter to be created": "Je veux faire créer mon logo et ma charte graphique",
                "I provide detailed instructions for the graphics (graphic charter, zoning, mockups...)":
                    "Je fournis des instructions détaillées pour le graphisme (charte graphique, zoning, maquettes...)",
            },
            specific_needs_labels: {
                hebergement: "Hébergement",
                seo: "Référencement naturel (SEO)",
                vitesse: "Amélioration de la vitesse de chargement",
                nomDomaine: "Nom de domaine",
                migration: "Migration d'hébergement",
            },
        };

        // Traduction des réponses
        const prestationTraduit = traductions.prestation[prestation] || prestation;
        const fonctionnalitesTraduites = fonctionnalites
            .map((fonctionnalite) => traductions.fonctionnalites[fonctionnalite] || fonctionnalite)
            .join(', ');
        const graphismeTraduit = traductions.graphisme[graphisme] || graphisme;
        const besoinsHebergementTraduits = Object.entries(besoinsHébergement)
            .filter(([_, checked]) => checked)
            .map(([key]) => traductions.specific_needs_labels[key] || key)
            .join(', ') || 'Aucun besoin spécifique';

        // Traduction des champs texte saisis par l'utilisateur
        const objectifsTraduit = await traduireTexte(objectifs, "fr");
        const descriptionBesoinsTraduit = await traduireTexte(descriptionBesoins, "fr");
        const urlSiteTraduit = await traduireTexte(urlSite, "fr");
        const urlSiteRefonteTraduit = await traduireTexte(urlSiteRefonte, "fr");

        // Créer les paramètres du modèle d'e-mail
        const templateParams = {
            prenom,
            nom,
            email,
            telephone,
            nomEntreprise,
            prestation: prestationTraduit,
            descriptionBesoins: descriptionBesoinsTraduit,
            objectifs: objectifsTraduit,
            urlSite: prestation === 'hosting' && urlSiteTraduit.trim() !== '' ? urlSiteTraduit : '',
            fonctionnalites: fonctionnalitesTraduites,
            graphisme: graphismeTraduit,
            typeProjet: typeProjetSelectionne === 'création'
                ? `Création d'un site ${prestationTraduit}`
                : `Refonte d'un site ${prestationTraduit}`,
            urlSiteRefonte: refonteChoisie ? urlSiteRefonteTraduit : '',
            besoinsHebergement: besoinsHebergementTraduits,

            // Ajout des nouvelles pages
            domaineOption: domaineOption || "Non spécifié",
            maintenanceOption: maintenanceOption || "Non spécifié",
            langueOption: langueOption || "Non spécifié",
        };

        // Envoyer l'email via l'API
        const response = await fetch('https://localhost:8000/api/devis', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(templateParams),
        });

        if (response.ok) {
            setIsSuccessModalVisible(true); // Afficher la modale de succès
        } else {
            setErrorMessage("Une erreur est survenue lors de l'envoi de votre demande.");
            setIsModalVisible(true); // Afficher la modale d'erreur
        }
    } catch (error) {
        setErrorMessage("Une erreur est survenue lors de l'envoi de votre demande.");
        setIsModalVisible(true); // Afficher la modale d'erreur
    } finally {
        setIsSubmitting(false); // Désactiver le spinner
    }
};















  
  // Fonction pour traduire le texte (en utilisant une bibliothèque ou une API, comme Google Translate)
  const traduireTexte = async (texte, langueCible) => {
    // Simulez ici une API ou utilisez une traduction locale si disponible
    // Exemple de traduction manuelle pour le contexte local
    return texte; // Retournez le texte tel quel pour cet exemple
  };
  




  const closeSuccessModal = () => {
    setIsSuccessModalVisible(false);
    navigate('/'); // Redirection après fermeture.
  };
  

  return (
    <>

      {isModalVisible && <ModalError message={errorMessage} onClose={closeModal} />}
  {isSuccessModalVisible && <ModalSuccess message="Votre demande a été envoyée avec succès !" onClose={closeSuccessModal} />}
      <div className="formulaire-devisS">



                {/* Progress Bar */}
                <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${progression}%` }}
              />
            </div>





            {/* {etape === 1 && (
              <div className="step-container">


                <p className="selection-header">Quelle prestation vous intéresse ?</p>

                <div className="cards-container">
                  {['site vitrine', 'Site e-commerce', 'Site personnalisé', 'Hébergement / Nom de domaine'].map((service) => (
                    <div
                      key={service}
                      className={`card ${prestation === service ? 'selected' : ''}`}
                      onClick={() => handleSelection(service)}
                      role="button"
                      aria-label={`Choisir ${service}`}
                      tabIndex={0}
                    >
                      <h3>{service}</h3>
                    </div>
                  ))}
                </div>
              </div>
            )} */}

{etape === 1 && (
          <div className="step-container">
            <p className="selection-header">{t('formulaire.step1_title')}</p>
            <div className="cards-container">
              {[
                t('formulaire.services.vitrine'),
                t('formulaire.services.ecommerce'),
                t('formulaire.services.custom'),
                t('formulaire.services.hosting')
              ].map((service) => (
                <div
                  key={service}
                  className={`card ${prestation === service ? 'selected' : ''}`}
                  onClick={() => handleSelection(service)}
                  role="button"
                  aria-label={`Choisir ${service}`}
                  tabIndex={0}
                >
                  <h3>{service}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

            {/* {etape === 2 && (
              <div className="etape-2-container">
                {prestation === 'hébergement / nom de domaine' && (
                  <div className="besoins-section">
                    <h1>Vos besoins :</h1>
                    <fieldset className="fieldset-besoins">
                      <legend>Besoins spécifiques</legend>
                      <div className="conteneur-besoins">
                        <div className="colonne-gauche">
                          <div className="besoins-container">
                            {[
                              { name: "hebergement", label: "Hébergement" },
                              { name: "seo", label: "Référencement naturel (SEO)" },
                              { name: "vitesse", label: "Amélioration de la vitesse de chargement" },
                              { name: "nomDomaine", label: "Nom de domaine" },
                              { name: "migration", label: "Migration d'hébergement" }
                            ].map(({ name, label }) => (
                              <div key={name} className="besoin-option">
                                <label className="checkbox-label">
                                  <input
                                    type="checkbox"
                                    name={name}
                                    checked={besoinsHébergement[name]}
                                    onChange={handleBesoinsChange}
                                    className="checkbox-input"
                                  />
                                  <span className="label-text">{label}</span>
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="colonne-droite">
                          <div className="url-container">
                            <label htmlFor="urlSite" className="label-text">Quelle est l'URL de votre site ?</label>
                            <textarea
                              id="urlSite"
                              value={urlSite}
                              onChange={(e) => setUrlSite(e.target.value)}
                              className="textarea-url"
                              placeholder="Exemple : www.monsite.com"
                            />
                          </div>

                          <div className="description-container">
                            <label htmlFor="descriptionBesoins" className="label-text">Description détaillée de votre besoin :</label>
                            <textarea
                              id="descriptionBesoins"
                              value={descriptionBesoins}
                              onChange={(e) => setDescriptionBesoins(e.target.value)}
                              className="textarea-description"
                              placeholder="Décrivez vos besoins spécifiques..."
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                )}

                {prestation !== 'hébergement / nom de domaine' && (
                  <div className="type-projet-container">
                    <fieldset className="fieldset-type-projet">
                      <legend>Type de projet</legend>
                      <div className="type-projet-options">
                        <div className="type-projet-option">
                          <label>
                            <input
                              type="radio"
                              name="typeProjet"
                              value="création"
                              checked={typeProjetSelectionne === 'création'}
                              onChange={(e) => {
                                setTypeProjetSelectionne(e.target.value);
                                setRefonteChoisie(false);
                              }}
                            />
                            <span className="label-text">Création d'un {prestation}</span>
                          </label>
                        </div>
                        <div className="type-projet-option">
                          <label>
                            <input
                              className="label-text2"
                              type="radio"
                              name="typeProjet"
                              value="refonte"
                              checked={typeProjetSelectionne === 'refonte'}
                              onChange={(e) => {
                                setTypeProjetSelectionne(e.target.value);
                                setRefonteChoisie(true);
                              }}
                            />
                            <span className="label-text2 label-text">Vous avez un site à refondre</span>
                          </label>
                        </div>
                      </div>



                      <div className="objectifs-container">
                        <label htmlFor="objectifs" className="label-text">Vos objectifs :</label>
                        <textarea
                          id="objectifs"
                          value={objectifs}
                          onChange={(e) => setObjectifs(e.target.value)}
                          required
                          className="textarea-objectifs"
                          placeholder="Décrivez les objectifs de votre projet..."
                        />
                      </div>
                      {refonteChoisie && (
                        <div className="url-refonte-container">
                          <label htmlFor="urlSiteRefonte" className="label-text">URL du site à refondre :</label>
                          <textarea
                            id="urlSiteRefonte"
                            value={urlSiteRefonte}
                            onChange={(e) => setUrlSiteRefonte(e.target.value)}
                            className="textarea-url"
                            placeholder="Exemple : www.monsite.com"
                          />
                        </div>
                      )}
                    </fieldset>
                  </div>
                )}
              </div>
            )} */}

            {etape === 2 && (
              <div className="etape-2-container">
                {/* Section spécifique pour l'hébergement */}
                {prestation === t('formulaire.services.hosting') && (
                  <div className="besoins-section">
                    <h1>{t('formulaire.step2_title')}</h1>
                    <fieldset className="fieldset-besoins">
                      <legend>{t('formulaire.specific_needs')}</legend>
                      <div className="conteneur-besoins">
                        <div className="colonne-gauche">
                          <div className="besoins-container">
                            {[
                              { name: "hebergement", label: t('formulaire.services.hosting') },
                              { name: "seo", label: t('formulaire.specific_needs.seo') },
                              { name: "vitesse", label: t('formulaire.specific_needs.speed') },
                              { name: "nomDomaine", label: t('formulaire.specific_needs.domain_name') },
                              { name: "migration", label: t('formulaire.specific_needs.migration') }
                            ].map(({ name, label }) => (
                              <div key={name} className="besoin-option">
                                <label className="checkbox-label">
                                  <input
                                    type="checkbox"
                                    name={name}
                                    checked={besoinsHébergement[name]}
                                    onChange={handleBesoinsChange}
                                    className="checkbox-input"
                                  />
                                  <span className="label-text">{label}</span>
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="colonne-droite">
                          <div className="url-container">
                            <label htmlFor="urlSite" className="label-text">
                              {t('formulaire.website_url')}
                            </label>
                            <textarea
                              id="urlSite"
                              value={urlSite}
                              onChange={(e) => setUrlSite(e.target.value)}
                              className="textarea-url"
                              placeholder={t('formulaire.website_url_placeholder')}
                            />
                          </div>

                          <div className="description-container">
                            <label htmlFor="descriptionBesoins" className="label-text">
                              {t('formulaire.detailed_description')}
                            </label>
                            <textarea
                              id="descriptionBesoins"
                              value={descriptionBesoins}
                              onChange={(e) => setDescriptionBesoins(e.target.value)}
                              className="textarea-description"
                              placeholder={t('formulaire.detailed_description_placeholder')}
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                )}

                {/* Section pour les autres prestations */}
                {prestation !== t('formulaire.services.hosting') && (
                  <div className="type-projet-container">
                    <fieldset className="fieldset-type-projet">
                      <legend>{t('formulaire.project_type')}</legend>
                      <div className="type-projet-options">
                        <div className="type-projet-option">
                          <label>
                            <input
                              type="radio"
                              name="typeProjet"
                              value="création"
                              checked={typeProjetSelectionne === 'création'}
                              onChange={(e) => {
                                setTypeProjetSelectionne(e.target.value);
                                setRefonteChoisie(false);
                              }}
                            />
                            <span className="label-text">{t('formulaire.creation_project')}</span>
                          </label>
                        </div>
                        <div className="type-projet-option">
                          <label>
                            <input
                              type="radio"
                              name="typeProjet"
                              value="refonte"
                              checked={typeProjetSelectionne === 'refonte'}
                              onChange={(e) => {
                                setTypeProjetSelectionne(e.target.value);
                                setRefonteChoisie(true);
                              }}
                            />
                            <span className="label-text">{t('formulaire.refonte_project')}</span>
                          </label>
                        </div>
                      </div>

                      <div className="objectifs-container">
                        <label htmlFor="objectifs" className="label-text">
                          {t('formulaire.project_objectives')}
                        </label>
                        <textarea
                          id="objectifs"
                          value={objectifs}
                          onChange={(e) => setObjectifs(e.target.value)}
                          required
                          className="textarea-objectifs"
                          placeholder={t('formulaire.project_objectives_placeholder')}
                        />
                      </div>

                      {refonteChoisie && (
                        <div className="url-refonte-container">
                          <label htmlFor="urlSiteRefonte" className="label-text">
                            {t('formulaire.refonte_site_url')}
                          </label>
                          <textarea
                            id="urlSiteRefonte"
                            value={urlSiteRefonte}
                            onChange={(e) => setUrlSiteRefonte(e.target.value)}
                            className="textarea-url"
                            placeholder={t('formulaire.refonte_site_url_placeholder')}
                          />
                        </div>
                      )}
                    </fieldset>
                  </div>
                )}
              </div>
            )}



            {/* {etape === 3 && (
              <div className="etape3-container">
                {etape3Sub === 1 && (
                  <div className="fonctionnalites-container">
                    <fieldset className="fonctionnalites-section">
                      <legend>Fonctionnalités</legend>
                      <div className="fonctionnalites-options">
                        {[
                          "Formulaires d'inscription,demande de devis",
                          'Blog ',
                          'Espace privé ou privilégié (accès client/membre)',
                          'Prise de rendez-vous',
                          'Réservation',
                          'Gestion de fichiers (téléchargement)',
                          'Carte dynamique type Google Maps (localisations )'
                        ].map((fonctionnalite) => (
                          <div key={fonctionnalite} className="fonctionnalite-option">
                            <label>
                              <input
                                type="checkbox"
                                value={fonctionnalite}
                                checked={fonctionnalites.includes(fonctionnalite)}
                                onChange={() => handleFonctionnaliteChange(fonctionnalite)}
                              />
                              <span className="label-text">{fonctionnalite}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>

                  </div>
                )}

                {etape3Sub === 2 && (
                  <div className="graphisme-container">
                    <fieldset className="graphisme-section">
                      <legend>Le graphisme</legend>
                      <div className="graphisme-options">
                        {[
                          "Je n'ai aucun élément",
                          'Je veux faire créer mon logo et ma charte graphique',
                          'Je fournis des instructions détaillées pour le graphisme (charte graphique, zoning, maquettes...)'
                        ].map((option) => (
                          <div key={option} className="graphisme-option">
                            <label>
                              <input
                                type="radio"
                                name="graphisme"
                                value={option}
                                checked={graphisme === option}
                                onChange={(e) => setGraphisme(e.target.value)}
                              />
                              <span className="label-text">{option}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                )}
              </div>
            )} */}

          {etape === 3 && (
            <div className="etape3-container">
              {etape3Sub === 1 && (
                <div className="fonctionnalites-container">
                  <fieldset className="fonctionnalites-section">
                    <legend>{t('formulaire.step3_title')}</legend>
                    <div className="fonctionnalites-options">
                      {t('formulaire.features', { returnObjects: true }).map((fonctionnalite, index) => (
                        <div key={index} className="fonctionnalite-option">
                          <label>
                            <input
                              type="checkbox"
                              value={fonctionnalite}
                              checked={fonctionnalites.includes(fonctionnalite)}
                              onChange={() => handleFonctionnaliteChange(fonctionnalite)}
                            />
                            <span className="label-text">{fonctionnalite}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              )}

              {etape3Sub === 2 && (
                <div className="graphisme-container">
                  <fieldset className="graphisme-section">
                    <legend>{t('formulaire.graphics_title')}</legend>
                    <div className="graphisme-options">
                      {t('formulaire.graphics_options', { returnObjects: true }).map((option, index) => (
                        <div key={index} className="graphisme-option">
                          <label>
                            <input
                              type="radio"
                              name="graphisme"
                              value={option}
                              checked={graphisme === option}
                              onChange={(e) => setGraphisme(e.target.value)}
                            />
                            <span className="label-text">{option}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              )}
            </div>
          )}



{etape === 4 && (
  <div className="etape4-container">
    <fieldset className="domaine-section">
      <legend>{t('formulaire.domain_hosting_title')}</legend>
      <div className="options-container">
        {[
          t('formulaire.domain_hosting.options.option1'),
          t('formulaire.domain_hosting.options.option2'),
          t('formulaire.domain_hosting.options.option3'),
        ].map((option, index) => (
          <div key={index} className="option-group">
            <label>
              <input
                type="radio"
                name="domaineOption"
                value={option}
                checked={domaineOption === option}
                onChange={(e) => setDomaineOption(e.target.value)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </fieldset>

    <fieldset className="maintenance-section">
      <legend>{t('formulaire.maintenance_title')}</legend>
      <div className="options-container">
        {[
          t('formulaire.maintenance.options.option1'),
          t('formulaire.maintenance.options.option2'),
        ].map((option, index) => (
          <div key={index} className="option-group">
            <label>
              <input
                type="radio"
                name="maintenanceOption"
                value={option}
                checked={maintenanceOption === option}
                onChange={(e) => setMaintenanceOption(e.target.value)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
{/* 
    <fieldset className="langue-section">
      <legend>{t('formulaire.language_title')}</legend>
      <div className="options-container">
        {[
          t('formulaire.language.options.option1'),
          t('formulaire.language.options.option2'),
        ].map((option, index) => (
          <div key={index} className="option-group">
            <label>
              <input
                type="radio"
                name="langueOption"
                value={option}
                checked={langueOption === option}
                onChange={(e) => setLangueOption(e.target.value)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </fieldset> */}
  </div>
)}





{etape === 5 && (
  <div className="etape5-container">
    <fieldset className="langue-section">
      <legend>{t('formulaire.language_title')}</legend>
      <div className="options-container">
        {[
          t('formulaire.language.options.option1'),
          t('formulaire.language.options.option2'),
        ].map((option, index) => (
          <div key={index} className="option-group">
            <label>
              <input
                type="radio"
                name="langueOption"
                value={option}
                checked={langueOption === option}
                onChange={(e) => setLangueOption(e.target.value)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  </div>
)}
{etape === 6 && (
  <div className="etape6-container">
    <fieldset className="coordonees-section">
      <legend>{t('formulaire.coordinates_title')}</legend>
      <div className="coordonnees-container">
        {/* Nom et Prénom */}
        <div className="input-row">
          <div className="input-group">
            <label className="label1">{t('formulaire.name_label')}</label>
            <input
              type="text"
              value={nom}
              onChange={handleNomChange}
              className="input1"
            />
          </div>
          <div className="input-group">
            <label className="label1">{t('formulaire.first_name_label')}</label>
            <input
              type="text"
              value={prenom}
              onChange={handlePrenomChange}
              className="input1"
            />
          </div>
        </div>

        {/* Email et Téléphone */}
        <div className="input-row">
          <div className="input-group">
            <label className="label3">{t('formulaire.email_label')}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input3"
            />
          </div>
          <div className="input-group">
            <label className="label4">{t('formulaire.phone_label')}</label>
            <input
              type="text"
              value={telephone}
              onChange={handleTelephoneChange}
              onBlur={formatTelephone}
              className="input4"
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>
)}


{/* {etape > 1 && (
  <div className="footerFormulaire">
    <button onClick={handlePrecedent}>{t('formulaire.previous_button')}</button>
    <button onClick={handleSuivant}>
      {etape === 6 ? t('formulaire.send_button') : t('formulaire.next_button')}
    </button>
  </div>
)} */}

{etape > 1 && (
  <div className="footerFormulaire">
    <button onClick={handlePrecedent} disabled={isSubmitting}>
      {t('formulaire.previous_button')}
    </button>
    <button
      onClick={etape === 6 ? envoyerEmail : handleSuivant}
      className={`button ${isSubmitting ? 'disabled' : ''}`}
      disabled={isSubmitting}
    >
      {etape === 6
        ? isSubmitting
          ? t('formulaire_contact.envoi_en_cours')
          : t('formulaire.send_button')
        : t('formulaire.next_button')}
    </button>
  </div>
)}



{isSubmitting && (
    <div className="spinner-container">
        <div className="spinner"></div>
        <p>{t('formulaire_contact.envoi_en_cours')}</p>
    </div>
)}




        </div>
          
    </>
  );
};

export default Formulaire;
