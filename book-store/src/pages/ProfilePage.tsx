import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Input, Button } from '../components/ui';
import { useAuth } from '../contexts/AuthContext';
import './ProfilePage.css';

interface ProfileFormData {
  name: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

interface ProfileErrors {
  name?: string;
  email?: string;
  currentPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
}

const ProfilePage: React.FC = () => {
  const { isAuthenticated, user, login: updateUser } = useAuth();
  
  const [formData, setFormData] = useState<ProfileFormData>({
    name: user?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (values: ProfileFormData): ProfileErrors => {
    const errors: ProfileErrors = {};
    
    if (!values.name) {
      errors.name = '이름을 입력해주세요.';
    }
    
    if (!values.email) {
      errors.email = '이메일을 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = '유효한 이메일 주소를 입력해주세요.';
    }
    
    // Only validate password fields if user is trying to change password
    if (values.newPassword || values.confirmNewPassword) {
      if (!values.currentPassword) {
        errors.currentPassword = '현재 비밀번호를 입력해주세요.';
      }
      
      if (values.newPassword.length > 0 && values.newPassword.length < 8) {
        errors.newPassword = '새 비밀번호는 8자 이상이어야 합니다.';
      }
      
      if (values.newPassword !== values.confirmNewPassword) {
        errors.confirmNewPassword = '새 비밀번호가 일치하지 않습니다.';
      }
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset any previous API errors
    setApiError(null);
    setUpdateSuccess(false);
    
    // Validate form
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    
    // Check if there are any errors
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // In a real app, this would be an API call to update user profile
        // For now, we'll simulate a successful update
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Update user in auth context
        if (user) {
          const updatedUser = {
            ...user,
            name: formData.name,
            email: formData.email
          };
          
          updateUser(updatedUser);
          setUpdateSuccess(true);
        }
        
        // Clear password fields
        setFormData(prev => ({
          ...prev,
          currentPassword: '',
          newPassword: '',
          confirmNewPassword: ''
        }));
        
      } catch (error) {
        console.error('Profile update error:', error);
        setApiError('프로필 업데이트 중 오류가 발생했습니다. 다시 시도해주세요.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-form-container">
        <h1 className="profile-title">내 프로필</h1>
        
        {updateSuccess && (
          <div className="update-success-message">
            프로필이 성공적으로 업데이트되었습니다.
          </div>
        )}
        
        <form className="profile-form" onSubmit={handleSubmit}>
          {apiError && (
            <div className="api-error-message">
              {apiError}
            </div>
          )}
          
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
            label="이메일"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            fullWidth
          />
          
          <div className="password-section">
            <h2>비밀번호 변경</h2>
            <p className="password-info">비밀번호를 변경하려면 아래 필드를 입력하세요.</p>
            
            <Input
              label="현재 비밀번호"
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              error={errors.currentPassword}
              fullWidth
            />
            
            <Input
              label="새 비밀번호"
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              error={errors.newPassword}
              fullWidth
            />
            
            <Input
              label="새 비밀번호 확인"
              type="password"
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              onChange={handleChange}
              error={errors.confirmNewPassword}
              fullWidth
            />
          </div>
          
          <div className="profile-actions">
            <Button 
              type="submit" 
              variant="primary" 
              disabled={isSubmitting}
            >
              {isSubmitting ? '업데이트 중...' : '프로필 업데이트'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
