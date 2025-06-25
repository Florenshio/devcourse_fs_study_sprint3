import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuthToken, removeAuthToken } from '../services/authService';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  // Check if user is authenticated on initial load
  useEffect(() => {
    const checkAuth = () => {
      const token = getAuthToken();
      
      if (token) {
        // In a real app, you would validate the token and fetch user info
        // For now, we'll just set authenticated to true if a token exists
        setIsAuthenticated(true);
        
        // Mock user data - in a real app, this would come from token payload or API
        const storedUser = localStorage.getItem('user_info');
        if (storedUser) {
          try {
            setUser(JSON.parse(storedUser));
          } catch (e) {
            console.error('Failed to parse user info:', e);
          }
        }
      }
    };
    
    checkAuth();
  }, []);

  // Login function
  const login = (userData: User) => {
    setIsAuthenticated(true);
    setUser(userData);
    
    // Store user info in localStorage for persistence
    localStorage.setItem('user_info', JSON.stringify(userData));
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    removeAuthToken();
    localStorage.removeItem('user_info');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
