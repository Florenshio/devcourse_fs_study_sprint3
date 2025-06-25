import React, { JSX } from 'react';
import './Title.css';

interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ 
  children, 
  level = 1, 
  className = '' 
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Tag className={`title title-${level} ${className}`}>
      {children}
    </Tag>
  );
};

export default Title;
