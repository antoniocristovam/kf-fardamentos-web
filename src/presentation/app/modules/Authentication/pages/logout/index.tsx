import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../../../../hooks/useAuth';

export function Logout() {
  const { logout } = useAuth();
  useEffect(() => {
    logout();
    document.location.reload();
  }, [logout]);

  return (
    <React.Fragment>
      <Navigate to="/login" />
    </React.Fragment>
  );
}
