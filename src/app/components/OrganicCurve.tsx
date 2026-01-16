interface OrganicCurveProps {
  className?: string;
  topColor?: string;
  bottomColor?: string;
  variant?: 'top' | 'bottom' | 'both';
}

export function OrganicCurve({ 
  className = '', 
  topColor = '#F8FAF7', 
  bottomColor = '#8FA88F',
  variant = 'bottom'
}: OrganicCurveProps) {
  if (variant === 'top') {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path 
            d="M0,60 C240,20 480,80 720,60 C960,40 1200,90 1440,60 L1440,0 L0,0 Z" 
            fill={topColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'both') {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path 
            d="M0,80 C360,20 720,120 1080,60 C1260,30 1350,100 1440,70 L1440,200 C1440,200 1200,150 960,170 C720,190 480,130 240,160 C120,175 60,185 0,180 Z" 
            fill={bottomColor}
          />
          <path 
            d="M0,60 C240,100 480,40 720,70 C960,100 1200,30 1440,60 L1440,0 L0,0 Z" 
            fill={topColor}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
        <path 
          d="M0,60 C360,100 720,20 1080,60 C1260,80 1350,40 1440,60 L1440,120 L0,120 Z" 
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
