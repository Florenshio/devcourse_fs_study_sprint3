import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input, Button } from '../components/ui';
import { login, setAuthToken } from '../services/authService';
import { useAuth } from '../contexts/AuthContext';
import './LoginPage.css';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginErrors {
  email?: string;
  password?: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState<LoginErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (values: LoginFormData): LoginErrors => {
    const errors: LoginErrors = {};
    
    if (!values.email) {
      errors.email = '이메일을 입력해주세요.';
    }
    
    if (!values.password) {
      errors.password = '비밀번호를 입력해주세요.';
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset any previous API errors
    setApiError(null);
    
    // Validate form
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    
    // Check if there are any errors
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // Call login API
        const response = await login({
          email: formData.email,
          password: formData.password,
        });
        
        if (response.success && response.token && response.user) {
          // Store the authentication token
          setAuthToken(response.token);
          
          // Update auth context with user data
          authLogin(response.user);
          
          console.log('Login successful:', response);
          
          // Navigate to home page after successful login
          navigate('/');
        } else {
          // Handle API error
          setApiError(response.message || '로그인 중 오류가 발생했습니다.');
        }
      } catch (error) {
        console.error('Login error:', error);
        setApiError('서버 연결 중 오류가 발생했습니다. 다시 시도해주세요.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1 className="login-title">로그인</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          {apiError && (
            <div className="api-error-message">
              {apiError}
            </div>
          )}
          
          <Input
            label="이메일"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            fullWidth
          />
          
          <Input
            label="비밀번호"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            fullWidth
          />
          
          <div className="login-actions">
            <Button 
              type="submit" 
              variant="primary" 
              fullWidth 
              disabled={isSubmitting}
            >
              {isSubmitting ? '처리 중...' : '로그인'}
            </Button>
          </div>
          
          <div className="signup-link">
            <p>계정이 없으신가요? <Link to="/signup">회원가입</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
