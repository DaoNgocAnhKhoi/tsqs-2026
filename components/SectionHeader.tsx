
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''} mb-4`}>
        <div className="h-1 w-12 bg-red-600 rounded-full"></div>
        <h2 className="text-3xl font-extrabold text-slate-800 uppercase tracking-tight">{title}</h2>
        <div className="h-1 w-12 bg-red-600 rounded-full"></div>
      </div>
      {subtitle && <p className="text-slate-600 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
