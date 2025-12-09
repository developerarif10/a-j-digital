import Link from 'next/link';

const Button = ({
  children,
  href,
  className = '',
  bgColor = 'bg-transparent',
  textColor = 'text-foreground',
  borderColor = '',
  hoverBgColor = 'hover:bg-background/80',
  slideHoverColor = '', // New prop for slide animation background color (e.g., 'bg-primary')
  hoverTextColor = '',
  icon = null,
  onClick,
  ...props
}) => {
  const baseStyles = 'group relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium transition-all duration-300 ease-in-out border rounded-md cursor-pointer disabled:opacity-50 disabled:pointer-events-none active:scale-95 overflow-hidden';
  
  // If slideHoverColor is provided, we use the slide animation and disable standard hoverBgColor
  const computedHoverBg = slideHoverColor ? '' : hoverBgColor;
  
  // Combine all styles
  const combinedStyles = `
    ${baseStyles} 
    ${bgColor} 
    ${textColor} 
    ${borderColor} 
    ${computedHoverBg} 
    ${hoverTextColor} 
    ${className}
  `.trim();

  // Content with optional icon - ensures index is above the slide
  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      <span className="mr-0">{children}</span>
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
         {icon}
        </span>
      )}
    </span>
  );

  // Slide element
  const slideElement = slideHoverColor && (
    <span className={`absolute inset-0 z-0 ${slideHoverColor} translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out`} />
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles} {...props}>
        {slideElement}
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} onClick={onClick} {...props}>
      {slideElement}
      {content}
    </button>
  );
};

export default Button;
