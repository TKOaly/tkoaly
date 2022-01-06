export const LinkWrapper: React.FC<{ link?: string; className?: string }> = ({
  children,
  link,
  className,
}) =>
  link ? (
    <a href={link} className={className}>
      {children}
    </a>
  ) : (
    <span className={className}>{children}</span>
  );
