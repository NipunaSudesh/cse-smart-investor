'use client';

const VARIANTS = {
  primary:
    'bg-primary text-white hover:bg-accent hover:text-dark-background shadow-sm hover:shadow-[0_0_14px_rgba(0,230,184,0.35)]',
  secondary:
    'bg-surface text-text-main hover:bg-accent hover:text-dark-background dark:bg-dark-surface dark:text-dark-text-main dark:hover:bg-accent dark:hover:text-dark-background',
  outline:
    'border border-primary bg-transparent text-primary hover:border-accent hover:bg-accent hover:text-dark-background dark:border-primary-light dark:text-primary-light dark:hover:border-accent dark:hover:bg-accent dark:hover:text-dark-background',
  success:
    'bg-success text-white hover:bg-success/90 shadow-sm hover:shadow-[0_0_14px_rgba(0,230,184,0.35)]',
  danger:
    'bg-danger text-white hover:bg-danger/90',
  ghost:
    'bg-transparent text-primary hover:bg-accent/10 dark:text-primary-light dark:hover:bg-accent/10',

  buy:
    'bg-buy text-white hover:bg-buy/10 hover:shadow-[0_0_14px_rgba(150, 196, 169, 0.35)]',
  sell:
    'bg-sell text-white hover:bg-sell/90 hover:shadow-[0_0_14px_rgba(75, 152, 107, 0.37)]',
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
        VARIANTS[variant] || VARIANTS.primary
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}