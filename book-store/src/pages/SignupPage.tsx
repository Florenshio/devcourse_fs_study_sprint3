import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input, Button } from '../components/ui';
import { validateSignup, ValidationError } from '../utils/validation';
import { signup, setAuthToken } from '../services/authService';
import { useAuth } from '../contexts/AuthContext';
import './SignupPage.css';

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  
  const [errors, setErrors] = useState<ValidationError>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset any previous API errors
    setApiError(null);
    
    // Validate form
    const validationErrors = validateSignup(formData);
    setErrors(validationErrors);
    
    // Check if there are any errors
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // Call signup API
        const response = await signup({
          email: formData.email,
          password: formData.password,
          name: formData.name
        });
        
        if (response.success && response.token && response.user) {
          // Store the authentication token
          setAuthToken(response.token);
          
          // Update auth context with user data
          authLogin(response.user);
          
          console.log('Signup successful:', response);
          setSignupSuccess(true);
          
          // Reset form
          setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
          });
        } else {
          // Handle API error
          setApiError(response.message || '회원가입 중 오류가 발생했습니다.');
        }
      } catch (error) {
        console.error('Signup error:', error);
        setApiError('서버 연결 중 오류가 발생했습니다. 다시 시도해주세요.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (signupSuccess) {
    return (
      <div className="signup-success">
        <h2>회원가입이 완료되었습니다!</h2>
        <p>로그인 페이지로 이동하여 로그인해주세요.</p>
        <Button 
          variant="primary" 
          onClick={() => {
            navigate('/login');
          }}
        >
          로그인 페이지로 이동
        </Button>
      </div>
    );
  }

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h1 className="signup-title">회원가입</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
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
            label="이름"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
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
          
          <Input
            label="비밀번호 확인"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            fullWidth
          />
          
          <div className="signup-actions">
            <Button 
              type="submit" 
              variant="primary" 
              fullWidth 
              disabled={isSubmitting}
            >
              {isSubmitting ? '처리 중...' : '회원가입'}
            </Button>
          </div>
          
          <div className="login-link">
            <p>이미 계정이 있으신가요? <Link to="/login">로그인</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
