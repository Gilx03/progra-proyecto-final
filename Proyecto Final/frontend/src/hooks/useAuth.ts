import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
const API_URL = 'http://localhost:3001/auth'; // Ajusta la URL si es diferente
 
interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, password: string) => Promise<void>;
  logout: () => void;
}
 
export const useAuth = (): AuthContextType => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const navigate = useNavigate(); // Esta línea está bien aquí
 
  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      const newToken = response.data.token;
      setToken(newToken);
      localStorage.setItem('token', newToken);
      navigate('/dashboard'); // Llamada a navigate dentro de la función
    } catch (error: any) {
      console.error('Login failed:', error.response?.data?.message || error.message);
      throw error;
    }
  };
 
  const signup = async (username: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, { username, password });
      const newToken = response.data.token;
      setToken(newToken);
      localStorage.setItem('token', newToken);
      navigate('/dashboard'); // Llamada a navigate dentro de la función
    } catch (error: any) {
      console.error('Signup failed:', error.response?.data?.message || error.message);
      throw error;
    }
  };
 
  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    navigate('/login'); // Llamada a navigate dentro de la función
  };
 
  return {
    token,
    isAuthenticated: !!token,
    login,
    signup,
    logout,
  };
};