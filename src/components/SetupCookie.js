import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

function SetupCookie() {
  useEffect(() => {
    Cookies.set('user_uuid', '123e4567-e89b-12d3-a456-426614174000', { expires: 7 });
    console.log('Cookie user_uuid défini avec succès');
  }, []);

  return (
    <div>
      <h1>Configuration du cookie réussie</h1>
      <p>Le cookie pour votre UUID a été défini. Vous pouvez maintenant accéder à la fonctionnalité réservée.</p>
    </div>
  );
}

export default SetupCookie;
