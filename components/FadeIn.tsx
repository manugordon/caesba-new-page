'use client';

import { useEffect, useRef, useState, ElementType } from 'react';

interface FadeInProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: ElementType<any>;
  className?: string;
  children?: React.ReactNode;
  // Permite pasar data-* y otros atributos HTML arbitrarios
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function FadeIn({
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    if (el.getBoundingClientRect().top < window.innerHeight) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = ['fade-in', visible ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
