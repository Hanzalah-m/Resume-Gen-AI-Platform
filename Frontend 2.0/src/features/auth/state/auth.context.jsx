import { memo , createContext , useState } from 'react';

export const AuthContext = createContext()

const AuthContext = ({childern}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}/>   
  );
};

export default memo(AuthContext);