import React from 'react';
import { motion } from 'motion/react';

const Mandala: React.FC<{ className?: string; size?: number; opacity?: number }> = ({ className, size = 400, opacity = 0.05 }) => {
  return (
    <div className={className} style={{ width: size, height: size, opacity }}>
      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M50 20 L53 47 L80 50 L53 53 L50 80 L47 53 L20 50 L47 47 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 50 50)`}>
            <circle cx="50" cy="15" r="2" fill="currentColor" />
            <line x1="50" y1="15" x2="50" y2="25" stroke="currentColor" strokeWidth="0.5" />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default Mandala;
