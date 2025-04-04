// src/components/Button.js
import React from 'react';
import clsx from 'clsx';

export default function Button({ children, className, variant = 'default', ...props }) {
  const baseStyles = 'px-6 py-3 border rounded-xl shadow-md transition-all transform';

  const variantStyles = {
    default:
      'bg-amazonTimeline text-whiteTimeline border-blackTimeline hover:bg-blackTimeline hover:border-amazonTimeline hover:text-white hover:scale-105 active:scale-100',
    decade:
      'bg-amazonTimeline text-whiteTimeline border-blackTimeline hover:bg-blackTimeline hover:border-amazonTimeline hover:text-white hover:scale-150 active:scale-100',
    year: 'bg-amazonTimeline text-whiteTimeline border-blackTimeline hover:bg-blackTimeline hover:border-amazonTimeline hover:text-white hover:scale-150 active:scale-100',
  };

  return (
    <button className={clsx(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </button>
  );
}
