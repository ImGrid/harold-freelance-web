export const CheckIcon = ({ className = "w-4 h-4", color = "#ef4444" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17l-5-5" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
  </svg>
);

export const XIcon = ({ className = "w-4 h-4", color = "#6d6d6d" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <line x1="18" y1="6" x2="6" y2="18" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
    <line x1="6" y1="6" x2="18" y2="18" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
  </svg>
);

export const StarIcon = ({ className = "w-5 h-5", filled = false, color = "#ef4444" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={filled ? color : "none"}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
  </svg>
);

export const ArrowRightIcon = ({ className = "w-4 h-4", color = "#ef4444" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <line x1="5" y1="12" x2="19" y2="12" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
    <polyline points="12,5 19,12 12,19" 
              stroke={color} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
  </svg>
);

export const UserIcon = ({ className = "w-6 h-6", color = "#ef4444" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="4" 
            stroke={color} 
            strokeWidth="2" 
            fill="none"/>
  </svg>
);

export const GlobeIcon = ({ className = "w-6 h-6", color = "#ef4444" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" 
            stroke={color} 
            strokeWidth="2" 
            fill="none"/>
    <line x1="2" y1="12" x2="22" y2="12" 
          stroke={color} 
          strokeWidth="2"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" 
          stroke={color} 
          strokeWidth="2" 
          fill="none"/>
  </svg>
);

export const MonitorIcon = ({ className = "w-6 h-6", color = "#ef4444" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" 
          stroke={color} 
          strokeWidth="2" 
          fill="none"/>
    <line x1="8" y1="21" x2="16" y2="21" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round"/>
    <line x1="12" y1="17" x2="12" y2="21" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round"/>
  </svg>
);

export const ZapIcon = ({ className = "w-5 h-5", color = "#ef4444" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" 
             stroke={color} 
             strokeWidth="2" 
             strokeLinecap="round" 
             strokeLinejoin="round" 
             fill={color}/>
  </svg>
);