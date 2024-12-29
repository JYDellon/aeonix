// import './FormulaireContact.css';
// import React, { useState } from 'react';

// // Définition du composant ModalSuccess
// const ModalSuccess = ({ onClose, closeForm }) => {
//   const handleClose = () => {
//     closeForm(); // Ferme le formulaire
//     onClose();   // Ferme la modale
//   };

//   return (
//     <div className="modal-success-overlay">
//       <div className="modal-success">
//         <p>Votre message a été envoyé avec succès !</p>
//         <button onClick={handleClose} className="btn-close">Fermer</button>
//       </div>
//     </div>
//   );
// };

// const FormulaireContact = ({ onClose }) => {
//   const [prenom, setPrenom] = useState('');
//   const [nom, setNom] = useState('');
//   const [email, setEmail] = useState('');
//   const [telephone, setTelephone] = useState('');
//   const [entreprise, setEntreprise] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false); // État pour afficher ou non la modale

//   const envoyerMessage = async (data) => {
//     setIsSubmitting(true);
//     setError(null);
//     try {

//       const response = await fetch('https://api-aeonix.vercel.app/api/contact', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     });
    




//       if (response.ok) {
//         // Réinitialiser les champs du formulaire après envoi
//         setPrenom('');
//         setNom('');
//         setEmail('');
//         setTelephone('');
//         setMessage('');
//         setShowModal(true); // Afficher la modale en cas de succès
//       } else {
//         const result = await response.json();
//         setError(result.error || 'Une erreur est survenue.');
//       }
//     } catch (error) {
//       setError('Erreur de connexion au serveur.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // const data = { prenom, nom, email, telephone, message };
//     const data = { prenom, nom, entreprise, email, telephone, message };

//     envoyerMessage(data);
//   };

//   const closeModal = () => {
//     setShowModal(false); // Ferme la modale
//   };

//   const closeForm = () => {
//     onClose(); // Ferme le formulaire
//   };

//   return (
//     <div>
//       {showModal && <ModalSuccess onClose={closeModal} closeForm={closeForm} />} {/* Modale affichée si showModal est true */}
//       <form onSubmit={handleSubmit} className="form-contact-ui">
//         <div className="ligne">
//           <div className="champ">
//             <label htmlFor="prenom">Prénom</label>
//             <input
//               type="text"
//               id="prenom"
//               value={prenom}
//               onChange={(e) => setPrenom(e.target.value)}
//               placeholder="Entrez votre prénom"
//             />
//           </div>
//           <div className="champ">
//             <label htmlFor="nom">Nom</label>
//             <input
//               type="text"
//               id="nom"
//               value={nom}
//               onChange={(e) => setNom(e.target.value)}
//               placeholder="Entrez votre nom"
//             />
//           </div>
//         </div>
//         <div className="champ">
//   <label htmlFor="entreprise">Entreprise</label>
//   <input
//     type="text"
//     id="entreprise"
//     value={entreprise}
//     onChange={(e) => setEntreprise(e.target.value)}
//     placeholder="Entrez le nom de votre entreprise"
//   />
// </div>
//         <div className="ligne">
//           <div className="champ">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="exemple@domaine.com"
//             />
//           </div>
//           <div className="champ">
//             <label htmlFor="telephone">Téléphone</label>
//             <input
//               type="text"
//               id="telephone"
//               value={telephone}
//               onChange={(e) => setTelephone(e.target.value)}
//               placeholder="0123456789"
//             />
//           </div>
//         </div>
//         <div className="ligne">
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Écrivez votre message ici..."
//           ></textarea>
//         </div>
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit" className="button" disabled={isSubmitting}>
//           {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormulaireContact;




















// import './FormulaireContact.css';
// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// const ModalSuccess = ({ onClose, closeForm }) => {
//   const { t } = useTranslation(); // Hook pour la traduction

//   const handleClose = () => {
//     closeForm(); // Ferme le formulaire
//     onClose();   // Ferme la modale
//   };

//   return (
//     <div className="modal-success-overlay">
//       <div className="modal-success">
//         <p>{t('formulaire_contact.success_message')}</p>
//         <button onClick={handleClose} className="btn-close">{t('formulaire_contact.envoyer')}</button>
//       </div>
//     </div>
//   );
// };

// const FormulaireContact = ({ onClose }) => {
//   const { t } = useTranslation(); // Hook pour accéder aux traductions
//   const [prenom, setPrenom] = useState('');
//   const [nom, setNom] = useState('');
//   const [email, setEmail] = useState('');
//   const [telephone, setTelephone] = useState('');
//   const [entreprise, setEntreprise] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false); // État pour afficher ou non la modale

//   const envoyerMessage = async (data) => {
//     setIsSubmitting(true);
//     setError(null);
//     try {
//       const response = await fetch('https://api-aeonix.vercel.app/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         setPrenom('');
//         setNom('');
//         setEmail('');
//         setTelephone('');
//         setEntreprise('');
//         setMessage('');
//         setShowModal(true); // Afficher la modale en cas de succès
//       } else {
//         const result = await response.json();
//         setError(result.error || t('formulaire_contact.error_message'));
//       }
//     } catch (error) {
//       setError(t('formulaire_contact.server_error'));
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = { prenom, nom, entreprise, email, telephone, message };
//     envoyerMessage(data);
//   };

//   const closeModal = () => {
//     setShowModal(false); // Ferme la modale
//   };

//   const closeForm = () => {
//     onClose(); // Ferme le formulaire
//   };

//   return (
//     <div>
//       {showModal && <ModalSuccess onClose={closeModal} closeForm={closeForm} />} {/* Modale affichée si showModal est true */}
//       <form onSubmit={handleSubmit} className="form-contact-ui">
//         <div className="ligne">
//           <div className="champ">
//             <label htmlFor="prenom">{t('formulaire_contact.prenom')}</label>
//             <input
//               type="text"
//               id="prenom"
//               value={prenom}
//               onChange={(e) => setPrenom(e.target.value)}
//               placeholder={t('formulaire_contact.placeholder_prenom')}
//             />
//           </div>
//           <div className="champ">
//             <label htmlFor="nom">{t('formulaire_contact.nom')}</label>
//             <input
//               type="text"
//               id="nom"
//               value={nom}
//               onChange={(e) => setNom(e.target.value)}
//               placeholder={t('formulaire_contact.placeholder_nom')}
//             />
//           </div>
//         </div>
//         <div className="champ">
//           <label htmlFor="entreprise">{t('formulaire_contact.entreprise')}</label>
//           <input
//             type="text"
//             id="entreprise"
//             value={entreprise}
//             onChange={(e) => setEntreprise(e.target.value)}
//             placeholder={t('formulaire_contact.placeholder_entreprise')}
//           />
//         </div>
//         <div className="ligne">
//           <div className="champ">
//             <label htmlFor="email">{t('formulaire_contact.email')}</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder={t('formulaire_contact.placeholder_email')}
//             />
//           </div>
//           <div className="champ">
//             <label htmlFor="telephone">{t('formulaire_contact.telephone')}</label>
//             <input
//               type="text"
//               id="telephone"
//               value={telephone}
//               onChange={(e) => setTelephone(e.target.value)}
//               placeholder={t('formulaire_contact.placeholder_telephone')}
//             />
//           </div>
//         </div>
//         <div className="ligne">
//           <label htmlFor="message">{t('formulaire_contact.message')}</label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder={t('formulaire_contact.placeholder_message')}
//           ></textarea>
//         </div>
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit" className="button" disabled={isSubmitting}>
//           {isSubmitting ? t('formulaire_contact.envoi_en_cours') : t('formulaire_contact.envoyer')}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormulaireContact;




















import './FormulaireContact.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ModalSuccess = ({ onClose, closeForm }) => {
  const { t } = useTranslation();

  const handleClose = () => {
    closeForm();
    onClose();
  };

  return (
    <div className="modal-success-overlay">
      <div className="modal-success">
        <p>{t('formulaire_contact.success_message')}</p>
        <button onClick={handleClose} className="btn-close">
          {t('formulaire_contact.envoyer')}
        </button>
      </div>
    </div>
  );
};

const FormulaireContact = ({ onClose }) => {
  const { t } = useTranslation();
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [entreprise, setEntreprise] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const envoyerMessage = async (data) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch('https://api-aeonix.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setPrenom('');
        setNom('');
        setEmail('');
        setTelephone('');
        setEntreprise('');
        setMessage('');
        setShowModal(true);
      } else {
        const result = await response.json();
        setError(result.error || t('formulaire_contact.error_message'));
      }
    } catch (error) {
      setError(t('formulaire_contact.server_error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { prenom, nom, entreprise, email, telephone, message };
    envoyerMessage(data);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeForm = () => {
    onClose();
  };

  return (
    <div>
      {showModal && <ModalSuccess onClose={closeModal} closeForm={closeForm} />}
      <form onSubmit={handleSubmit} className="form-contact-ui">
        <div className="ligne">
          <div className="champ">
            <label htmlFor="prenom">{t('formulaire_contact.prenom')}</label>
            <input
              type="text"
              id="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder={t('formulaire_contact.placeholder_prenom')}
            />
          </div>
          <div className="champ">
            <label htmlFor="nom">{t('formulaire_contact.nom')}</label>
            <input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder={t('formulaire_contact.placeholder_nom')}
            />
          </div>
        </div>
        <div className="champ">
          <label htmlFor="entreprise">{t('formulaire_contact.entreprise')}</label>
          <input
            type="text"
            id="entreprise"
            value={entreprise}
            onChange={(e) => setEntreprise(e.target.value)}
            placeholder={t('formulaire_contact.placeholder_entreprise')}
          />
        </div>
        <div className="ligne">
          <div className="champ">
            <label htmlFor="email">{t('formulaire_contact.email')}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('formulaire_contact.placeholder_email')}
            />
          </div>
          <div className="champ">
            <label htmlFor="telephone">{t('formulaire_contact.telephone')}</label>
            <input
              type="text"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder={t('formulaire_contact.placeholder_telephone')}
            />
          </div>
        </div>
        <div className="ligne">
          <label htmlFor="message">{t('formulaire_contact.message')}</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t('formulaire_contact.placeholder_message')}
          ></textarea>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="submit-section">
          <button type="submit" className="button" disabled={isSubmitting}>
            {isSubmitting ? t('formulaire_contact.envoi_en_cours') : t('formulaire_contact.envoyer')}
          </button>
          {isSubmitting && <div className="spinner"></div>}
        </div>
      </form>
    </div>
  );
};

export default FormulaireContact;
