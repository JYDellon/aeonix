// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { useTranslation } from 'react-i18next'; // Importez le hook
// import './Navbar.css';

// function Navbar({ onLinkClick }) {
//   const location = useLocation();
//   const { t } = useTranslation(); // Utilisez le hook pour accéder aux traductions
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isPersonalPc, setIsPersonalPc] = useState(false);

//   // Votre IP publique (à personnaliser)
//   const personalPcIp = '109.9.43.34';

//   const isActiveLink = (path) => location.pathname === path;
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//     if (onLinkClick) {
//       onLinkClick();
//     }
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Vérifie l'adresse IP et met à jour l'état
//   useEffect(() => {
//     axios
//       .get('https://api.ipify.org/?format=json')
//       .then((response) => {
//         const clientIp = response.data.ip;
//         setIsPersonalPc(clientIp === personalPcIp);
//       })
//       .catch((error) =>
//         console.error('Erreur lors de la récupération de l\'IP:', error)
//       );
//   }, []);

//   return (
//     <div className="navbar-container">
//       {/* Menu Burger */}
//       <div className="miseEnPage">
//         <div className="navbar-header">
//           <button
//             className="menu-toggle"
//             onClick={openModal}
//             aria-label="Toggle menu"
//           >
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* Modale pour les petits écrans */}
//       {isModalOpen && (
//         <div className="modalXXX" onClick={closeModal}>
//           <div className="modalXXX-content">
//             <nav className="modalXXX-menu">
//               <ul>
//                 <li>
//                   <Link
//                     to="/"
//                     className={isActiveLink('/') ? 'active' : ''}
//                     onClick={closeModal}
//                   >
//                     {t('navbar.home')}
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/a-propos"
//                     className={isActiveLink('/a-propos') ? 'active' : ''}
//                     onClick={closeModal}
//                   >
//                     {t('navbar.about')}
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/nos-services"
//                     className={isActiveLink('/nos-services') ? 'active' : ''}
//                     onClick={closeModal}
//                   >
//                     {t('navbar.services')}
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/portfolio"
//                     className={isActiveLink('/portfolio') ? 'active' : ''}
//                     onClick={closeModal}
//                   >
//                     {t('navbar.portfolio')}
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/contact"
//                     className={isActiveLink('/contact') ? 'active' : ''}
//                     onClick={closeModal}
//                   >
//                     {t('navbar.contact')}
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/rgpd"
//                     className={isActiveLink('/rgpd') ? 'active' : ''}
//                     onClick={closeModal}
//                   >
//                     {t('navbar.rgpd')}
//                   </Link>
//                 </li>
//                 {isPersonalPc && (
//                   <li>
//                     <Link
//                       to="/dashboard"
//                       className={isActiveLink('/dashboard') ? 'active' : ''}
//                       onClick={closeModal}
//                     >
//                       {t('navbar.dashboard')}
//                     </Link>
//                   </li>
//                 )}
//               </ul>
//             </nav>
//           </div>
//         </div>
//       )}

//       <nav
//         className={`navbar-menu ${
//           isMenuOpen ? 'open' : ''
//         } ${isPersonalPc ? 'personal-ip' : ''}`}
//       >
//         <ul>
//           <li>
//             <Link
//               to="/"
//               className={isActiveLink('/') ? 'active' : ''}
//               onClick={closeMenu}
//             >
//               {t('navbar.home')}
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/a-propos"
//               className={isActiveLink('/a-propos') ? 'active' : ''}
//               onClick={closeMenu}
//             >
//               {t('navbar.about')}
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/nos-services"
//               className={isActiveLink('/nos-services') ? 'active' : ''}
//               onClick={closeMenu}
//             >
//               {t('navbar.services')}
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/portfolio"
//               className={isActiveLink('/portfolio') ? 'active' : ''}
//               onClick={closeMenu}
//             >
//               {t('navbar.portfolio')}
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/contact"
//               className={isActiveLink('/contact') ? 'active' : ''}
//               onClick={closeMenu}
//             >
//               {t('navbar.contact')}
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/rgpd"
//               className={isActiveLink('/rgpd') ? 'active' : ''}
//               onClick={closeMenu}
//             >
//               {t('navbar.rgpd')}
//             </Link>
//           </li>
//           {isPersonalPc && (
//             <li>
//               <Link
//                 to="/dashboard"
//                 className={isActiveLink('/dashboard') ? 'active' : ''}
//                 onClick={closeMenu}
//               >
//                 {t('navbar.dashboard')}
//               </Link>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;























import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

function Navbar({ onLinkClick }) {
  const location = useLocation();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false); // Utilise accessGranted pour afficher ou masquer le lien

  const isActiveLink = (path) => location.pathname === path;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    if (onLinkClick) {
      onLinkClick();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
      // Envoie la requête en incluant les cookies avec 'withCredentials: true'
      axios.get('https://apiaeonix-production.up.railway.app/api/dashboard', { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          setAccessGranted(true);  // Si l'accès est autorisé, on affiche le tableau de bord
        }
      })
      .catch(error => {
        setAccessGranted(false);  // Si l'accès est refusé, on cache le lien
      });
  }, []);
  
  
  





  return (
    <div className="navbar-container">
      {/* Menu Burger */}
      <div className="miseEnPage">
        <div className="navbar-header">
          <button
            className="menu-toggle"
            onClick={openModal}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Modale pour les petits écrans */}
      {isModalOpen && (
        <div className="modalXXX" onClick={closeModal}>
          <div className="modalXXX-content">
            <nav className="modalXXX-menu">
              <ul>
                <li>
                  <Link
                    to="/"
                    className={isActiveLink('/') ? 'active' : ''}
                    onClick={closeModal}
                  >
                    {t('navbar.home')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/a-propos"
                    className={isActiveLink('/a-propos') ? 'active' : ''}
                    onClick={closeModal}
                  >
                    {t('navbar.about')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/nos-services"
                    className={isActiveLink('/nos-services') ? 'active' : ''}
                    onClick={closeModal}
                  >
                    {t('navbar.services')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className={isActiveLink('/portfolio') ? 'active' : ''}
                    onClick={closeModal}
                  >
                    {t('navbar.portfolio')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={isActiveLink('/contact') ? 'active' : ''}
                    onClick={closeModal}
                  >
                    {t('navbar.contact')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rgpd"
                    className={isActiveLink('/rgpd') ? 'active' : ''}
                    onClick={closeModal}
                  >
                    {t('navbar.rgpd')}
                  </Link>
                </li>

{/* Afficher le lien vers le tableau de bord seulement si l'utilisateur a l'accès */}
{accessGranted && <li><a href="/dashboard">Dashboard</a></li>}
              </ul>
            </nav>
          </div>
        </div>
      )}

      <nav className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={isActiveLink('/') ? 'active' : ''}
              onClick={closeMenu}
            >
              {t('navbar.home')}
            </Link>
          </li>
          <li>
            <Link
              to="/a-propos"
              className={isActiveLink('/a-propos') ? 'active' : ''}
              onClick={closeMenu}
            >
              {t('navbar.about')}
            </Link>
          </li>
          <li>
            <Link
              to="/nos-services"
              className={isActiveLink('/nos-services') ? 'active' : ''}
              onClick={closeMenu}
            >
              {t('navbar.services')}
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={isActiveLink('/portfolio') ? 'active' : ''}
              onClick={closeMenu}
            >
              {t('navbar.portfolio')}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActiveLink('/contact') ? 'active' : ''}
              onClick={closeMenu}
            >
              {t('navbar.contact')}
            </Link>
          </li>
          <li>
            <Link
              to="/rgpd"
              className={isActiveLink('/rgpd') ? 'active' : ''}
              onClick={closeMenu}
            >
              {t('navbar.rgpd')}
            </Link>
          </li>

          {/* Afficher le lien vers le tableau de bord uniquement si l'accès est autorisé */}
          {accessGranted && (
            <li>
              <Link
                to="/dashboard"
                className={isActiveLink('/dashboard') ? 'active' : ''}
                onClick={closeMenu}
              >
                {t('navbar.dashboard')}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
