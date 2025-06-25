export interface ValidationError {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
}

export const validateSignup = (values: {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}): ValidationError => {
  const errors: ValidationError = {};
  
  // Email validation
  if (!values.email) {
    errors.email = '이메일을 입력해주세요.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = '유효한 이메일 주소를 입력해주세요.';
  }
  
  // Password validation
  if (!values.password) {
    errors.password = '비밀번호를 입력해주세요.';
  } else if (values.password.length < 8) {
    errors.password = '비밀번호는 8자 이상이어야 합니다.';
  }
  
  // Confirm password validation
  if (!values.confirmPassword) {
    errors.confirmPassword = '비밀번호 확인을 입력해주세요.';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
  }
  
  // Name validation
  if (!values.name) {
    errors.name = '이름을 입력해주세요.';
  }
  
  return errors;
};
