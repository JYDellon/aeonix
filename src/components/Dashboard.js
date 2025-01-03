import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('');
  const [pageVisits, setPageVisits] = useState([]);
  const [prospects, setProspects] = useState([]);
  const [selectedProspects, setSelectedProspects] = useState([]);
  const [editingProspect, setEditingProspect] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState('');

  const [newProspect, setNewProspect] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    client: false,
  });

  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    if (showCreateForm || editingProspect || showEmailModal) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showCreateForm, editingProspect, showEmailModal]);
  

  useEffect(() => {
    if (activeTab === 'visits') {
      axios
        .get('https://apiaeonix-production-3187.up.railway.app/api/visit')
        .then((response) => {
          setPageVisits(response.data.filter((visit) => visit.pageUrl !== '/dashboard'));
        })
        .catch((error) => console.error('Erreur lors de la récupération des visites:', error));
    } else if (activeTab === 'prospects') {
      fetchProspects();
    }
  }, [activeTab]);

  const fetchProspects = () => {
    axios
      .get('https://apiaeonix-production-3187.up.railway.app/api/prospects')
      .then((response) => setProspects(response.data))
      .catch((error) => console.error('Erreur lors de la récupération des prospects:', error));
  };

  const handleCreateProspect = () => {
    axios
      .post('https://apiaeonix-production-3187.up.railway.app/api/prospects', newProspect)
      .then(() => {
        fetchProspects();
        setShowCreateForm(false);
        setNewProspect({ nom: '', prenom: '', email: '', telephone: '', entreprise: '', client: false });
      })
      .catch((error) => console.error('Erreur lors de la création:', error));
  };

  const handleUpdateProspect = () => {
    if (editingProspect) {
      axios
        .put(`https://apiaeonix-production-3187.up.railway.app/api/prospect/${editingProspect.id}`, editingProspect)
        .then(() => {
          fetchProspects();
          setEditingProspect(null);
        })
        .catch((error) => console.error('Erreur lors de la mise à jour:', error));
    }
  };

  const handleDeleteMultiple = () => {
    if (selectedProspects.length === 0) {
      alert('Veuillez sélectionner au moins un prospect.');
      return;
    }

    axios
      .post('https://apiaeonix-production-3187.up.railway.app/api/prospects/delete', { ids: selectedProspects })
      .then(() => {
        alert('Prospects supprimés avec succès.');
        fetchProspects();
        setSelectedProspects([]);
      })
      .catch((error) => console.error('Erreur lors de la suppression multiple:', error));
  };

  const toggleSelectProspect = (id) => {
    setSelectedProspects((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const toggleSelectAllProspects = () => {
    if (selectedProspects.length === prospects.length) {
      setSelectedProspects([]);
    } else {
      setSelectedProspects(prospects.map((prospect) => prospect.id));
    }
  };

  const sendAllEmails = async () => {
    if (selectedProspects.length === 0) {
      alert('Veuillez sélectionner au moins un prospect.');
      return;
    }

    try {
      const selectedProspectsData = prospects.filter((prospect) =>
        selectedProspects.includes(prospect.id)
      );

      const processedAttachments = await Promise.all(
        attachments.map(async (file) => ({
          name: file.name,
          type: file.type,
          size: file.size,
          content: await file.text(),
        }))
      );

      await axios.post('https://apiaeonix-production-3187.up.railway.app/api/send-emails', {
        recipients: selectedProspectsData.map((prospect) => prospect.email),
        subject: emailSubject,
        body: emailBody,
        attachments: processedAttachments,
      });

      alert('Emails envoyés avec succès.');
      setShowEmailModal(false);
      setEmailSubject('');
      setEmailBody('');
      setAttachments([]);
    } catch (error) {
      console.error('Erreur lors de l\'envoi des emails:', error);
      alert('Erreur lors de l\'envoi des emails.');
    }
  };

  const handleFileChange = (e) => {
    setAttachments([...attachments, ...e.target.files]);
  };

  const renderMenu = () => (
    <div className="dashboard-menu">
      <div
        className="menu-card"
        onClick={() => setActiveTab('visits')}
        role="button"
        tabIndex={0}
      >
        <h2>Visites des Pages</h2>
        <p>Voir et analyser les visites de vos pages web.</p>
      </div>
      <div
        className="menu-card"
        onClick={() => setActiveTab('prospects')}
        role="button"
        tabIndex={0}
      >
        <h2>Liste des Prospects</h2>
        <p>Voir et gérer les prospects enregistrés.</p>
      </div>
    </div>
  );

  const renderVisitsTable = () => (
    <div>
      <h2>Visites des Pages</h2>
      <button className="reset-button" onClick={() => setActiveTab('')}>
        Réinitialiser
      </button>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Nom de la page</th>
            <th>Nombre de visites</th>
          </tr>
        </thead>
        <tbody>
          {pageVisits.length > 0 ? (
            pageVisits.map((visit) => (
              <tr key={visit.pageUrl}>
                <td>{visit.pageUrl}</td>
                <td>{visit.visitCount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">Aucune donnée disponible</td>
            </tr>
          )}
        </tbody>
      </table>
      <button className="back-button" onClick={() => setActiveTab('')}>
        Retour au Menu
      </button>
    </div>
  );

  const renderProspectsTable = () => (
    <div>
      <h2>Liste des Prospects</h2>
      <div className="crud-actions">
      <button
  className={`primary ${selectedProspects.length === 0 ? 'disabled' : ''}`}
  onClick={handleDeleteMultiple}
  disabled={selectedProspects.length === 0}
>
  Supprimer Sélection
</button>

        <button onClick={() => setShowEmailModal(true)} disabled={selectedProspects.length === 0}>
          Envoyer Emails
        </button>
        <button onClick={() => setShowCreateForm(true)}>Créer un Prospect</button>
        <button onClick={toggleSelectAllProspects}>
          {selectedProspects.length === prospects.length && prospects.length > 0
            ? 'Désélectionner tout'
            : 'Sélectionner tout'}
        </button>
      </div>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Sélectionner</th>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Entreprise</th>
            <th>Client</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {prospects.length > 0 ? (
            prospects.map((prospect) => (
              <tr key={prospect.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedProspects.includes(prospect.id)}
                    onChange={() => toggleSelectProspect(prospect.id)}
                  />
                </td>
                <td>{prospect.id}</td>
                <td>{prospect.nom}</td>
                <td>{prospect.prenom}</td>
                <td>{prospect.email}</td>
                <td>{prospect.telephone || 'N/A'}</td>
                <td>{prospect.entreprise || 'N/A'}</td>
                <td>{prospect.client ? 'Oui' : 'Non'}</td>
                <td>
                  <button onClick={() => setEditingProspect(prospect)}>Modifier</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">Aucune donnée disponible</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="dashboard-container">
      <h1>Tableau de Bord</h1>
      {activeTab === '' && renderMenu()}
      {activeTab === 'visits' && renderVisitsTable()}
      {activeTab === 'prospects' && renderProspectsTable()}

 


{showCreateForm && (
  <>
    <div
      className="modalUI-overlay"
      onClick={() => setShowCreateForm(false)} // Ferme la modale en cliquant sur l'overlay
    ></div>
    <div className="modalUI">
      <h3>Créer un Prospect</h3>
      <input
        type="text"
        placeholder="Nom"
        value={newProspect.nom}
        onChange={(e) => setNewProspect({ ...newProspect, nom: e.target.value })}
      />
      <input
        type="text"
        placeholder="Prénom"
        value={newProspect.prenom}
        onChange={(e) => setNewProspect({ ...newProspect, prenom: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newProspect.email}
        onChange={(e) => setNewProspect({ ...newProspect, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Téléphone"
        value={newProspect.telephone}
        onChange={(e) => setNewProspect({ ...newProspect, telephone: e.target.value })}
      />
      <input
        type="text"
        placeholder="Entreprise"
        value={newProspect.entreprise}
        onChange={(e) => setNewProspect({ ...newProspect, entreprise: e.target.value })}
      />
      <label>
        Client :
        <input
          type="checkbox"
          checked={newProspect.client}
          onChange={(e) => setNewProspect({ ...newProspect, client: e.target.checked })}
        />
      </label>
      <button onClick={handleCreateProspect}>Enregistrer</button>
      <button className="secondary" onClick={() => setShowCreateForm(false)}>
        Annuler
      </button>
    </div>
  </>
)}


{editingProspect && (
  <>
    <div
      className="modalUI-overlay"
      onClick={() => setEditingProspect(null)} // Ferme la modale en cliquant sur l'overlay
    ></div>
    <div className="modalUI">
      <h3>Modifier Prospect</h3>
      <input
        type="text"
        value={editingProspect.nom}
        onChange={(e) => setEditingProspect({ ...editingProspect, nom: e.target.value })}
      />
      <input
        type="text"
        value={editingProspect.prenom}
        onChange={(e) => setEditingProspect({ ...editingProspect, prenom: e.target.value })}
      />
      <input
        type="email"
        value={editingProspect.email}
        onChange={(e) => setEditingProspect({ ...editingProspect, email: e.target.value })}
      />
      <input
        type="text"
        value={editingProspect.telephone || ''}
        onChange={(e) => setEditingProspect({ ...editingProspect, telephone: e.target.value })}
      />
      <input
        type="text"
        value={editingProspect.entreprise || ''}
        onChange={(e) => setEditingProspect({ ...editingProspect, entreprise: e.target.value })}
      />
      <label>
        Client :
        <input
          type="checkbox"
          checked={editingProspect.client}
          onChange={(e) => setEditingProspect({ ...editingProspect, client: e.target.checked })}
        />
      </label>
      <button onClick={handleUpdateProspect}>Enregistrer</button>
      <button className="secondary" onClick={() => setEditingProspect(null)}>
        Annuler
      </button>
    </div>
  </>
)}

      
{showEmailModal && (
  <>
    <div
      className="modalUI-overlay"
      onClick={() => setShowEmailModal(false)} // Ferme la modale en cliquant sur l'overlay
    ></div>
    <div className="modalUI">
      <h3>Envoyer un Email</h3>
      <input
        type="text"
        placeholder="Objet"
        value={emailSubject}
        onChange={(e) => setEmailSubject(e.target.value)}
      />
      <textarea
        placeholder="Contenu du message"
        value={emailBody}
        onChange={(e) => setEmailBody(e.target.value)}
      />
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={sendAllEmails}>Envoyer</button>
      <button className="secondary" onClick={() => setShowEmailModal(false)}>
        Annuler
      </button>
    </div>
  </>
)}


    </div>
  );
}

export default Dashboard;
