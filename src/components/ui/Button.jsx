import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default',
  to,
  href,
  onClick,
  disabled = false,
  className = '',
  target,
  rel,
  ...props 
}) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary', 
    outline: 'btn-outline'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const baseClasses = `${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link 
        to={to} 
        className={baseClasses}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;