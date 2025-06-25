// Types
export interface SignupData {
  email: string;
  password: string;
  name: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: {
    id: string;
    email: string;
    name: string;
  };
}

// Base API URL - would typically come from environment variables
const API_URL = 'http://localhost:3001/api';

/**
 * Handles user signup
 * @param data User signup data
 * @returns Promise with auth response
 */
export const signup = async (data: SignupData): Promise<AuthResponse> => {
  try {
    // In a real application, this would be an actual API call
    // For now, we'll simulate a successful response
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // For demonstration purposes, we'll simulate a successful signup
    // In a real app, this would be:
    // const response = await fetch(`${API_URL}/auth/signup`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
    // return await response.json();
    
    return {
      success: true,
      message: '회원가입이 성공적으로 완료되었습니다.',
      token: 'sample-jwt-token',
      user: {
        id: 'user-' + Math.random().toString(36).substr(2, 9),
        email: data.email,
        name: data.name
      }
    };
  } catch (error) {
    console.error('Signup error:', error);
    return {
      success: false,
      message: '회원가입 중 오류가 발생했습니다. 다시 시도해주세요.'
    };
  }
};

/**
 * Handles user login
 * @param data User login data
 * @returns Promise with auth response
 */
export const login = async (data: LoginData): Promise<AuthResponse> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // For demonstration purposes only
    return {
      success: true,
      message: '로그인이 성공적으로 완료되었습니다.',
      token: 'sample-jwt-token',
      user: {
        id: 'user-' + Math.random().toString(36).substr(2, 9),
        email: data.email,
        name: 'Sample User' // In a real app, this would come from the backend
      }
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      message: '로그인 중 오류가 발생했습니다. 이메일과 비밀번호를 확인해주세요.'
    };
  }
};

/**
 * Stores authentication token in localStorage
 * @param token JWT token
 */
export const setAuthToken = (token: string): void => {
  localStorage.setItem('auth_token', token);
};

/**
 * Retrieves authentication token from localStorage
 * @returns JWT token or null if not found
 */
export const getAuthToken = (): string | null => {
  return localStorage.getItem('auth_token');
};

/**
 * Removes authentication token from localStorage
 */
export const removeAuthToken = (): void => {
  localStorage.removeItem('auth_token');
};

/**
 * Checks if user is authenticated
 * @returns boolean indicating if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};
