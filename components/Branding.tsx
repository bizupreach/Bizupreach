import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const BrandLogo: React.FC<LogoProps> = ({ className = "w-10 h-10", light = false }) => {
  const [error, setError] = useState(false);
  
  const logoPath = "components/BizUpreach.png";

  if (error) {
    return null; // Return null instead of a placeholder 'B' icon as requested
  }

  return (
    <img 
      src={logoPath}
      alt="BizUpreach Logo" 
      className={`${className} object-contain`}
      onError={() => setError(true)}
    />
  );
};

export const BrandWordmark: React.FC<{ light?: boolean; className?: string }> = ({ light = false, className = "text-2xl" }) => {
  return (
    <span className={`font-bold tracking-tight uppercase ${className} inline-flex items-center`}>
      <span className="text-brand-blue">BIZ</span>
      <span className="text-brand-green">UPREACH</span>
    </span>
  );
};