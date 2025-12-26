
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-black border border-green-900 hover:border-green-500 transition-all duration-300 flex flex-col h-full">
      <div className="aspect-video w-full overflow-hidden relative">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-700">{project.category}</span>
          <div className="flex gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
        <h3 className="text-xl font-black text-green-100 mb-3 uppercase tracking-tighter leading-none">{project.title}</h3>
        <p className="text-green-800 text-xs font-bold mb-6 leading-relaxed flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-green-950">
          {project.tags.map(tag => (
            <span key={tag} className="text-[9px] px-2 py-1 font-black uppercase tracking-widest bg-green-950/30 text-green-500 border border-green-900 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
