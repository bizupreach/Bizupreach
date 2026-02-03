import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const BrandLogo: React.FC<LogoProps> = ({ className = "w-10 h-10", light = false }) => {
  const [error, setError] = useState(false);
  
  // URL-encoding the space as %20 is critical for path resolution in many environments.
  const logoPath = "pages/BizUpreach.png";

  if (error) {
    // Fallback if image fails to load
    return (
      <div className={`${className} flex items-center justify-center bg-brand-blue rounded-lg text-white font-black text-xs`}>
        B
      </div>
    );
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
    <span className={`font-black tracking-tighter uppercase ${className} inline-flex items-center`}>
      <span className="text-brand-blue">BIZ</span>
      <span className="text-brand-green">UPREACH</span>
    </span>
  );
};