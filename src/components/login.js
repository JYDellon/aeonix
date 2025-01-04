import React from 'react';

function Login() {
  const handleLogin = async () => {
    try {
      // IMPORTANT : credentials: 'include' pour que le cookie soit bien envoyé / reçu
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        credentials: 'include', 
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ username, password }) // éventuels identifiants
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Réponse du serveur :', data);
        // À ce stade, le cookie 'authToken' est déjà posé dans le navigateur
        // si tout est correct côté serveur (CORS, etc.).
      } else {
        console.error('Erreur lors de la connexion:', response.status);
      }
    } catch (err) {
      console.error('Erreur réseau ou autre:', err);
    }
  };

  return (
    <div>
      <h1>Page de Connexion</h1>
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
}

export default Login;
