import React, { createContext, useContext, useState } from 'react';

type ProfileType = 'auth' | 'admin' | 'attend' | 'client';

interface AuthContextData {
  profile: ProfileType;
  setProfile: (profile: ProfileType) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileType>('auth');

  return (
    <AuthContext.Provider value={{ profile, setProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
