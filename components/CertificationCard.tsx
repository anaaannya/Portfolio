
import React from 'react';
import { Certification } from '../types';

interface CertificationCardProps {
  cert: Certification;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ cert }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-black border border-green-900 hover:border-green-500 transition-all group">
      <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border transition-all ${
        cert.type === 'Security' 
          ? 'bg-green-500/10 border-green-500/30 text-green-400' 
          : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
      }`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div>
        <h4 className="font-bold text-green-100 text-sm group-hover:text-green-400 transition-colors uppercase">{cert.title}</h4>
        <div className="flex items-center gap-2 text-[10px] font-bold text-green-900">
          <span>{cert.issuer}</span>
          <span className="w-1 h-1 rounded-full bg-green-900"></span>
          <span>{cert.date}</span>
        </div>
      </div>
    </div>
  );
};
