import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { BreadcrumbItem } from './SEOHead';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, dark = false }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className={`flex flex-wrap items-center gap-1.5 text-xs ${
          dark ? 'text-slate-400' : 'text-slate-500'
        }`}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  className={`w-3.5 h-3.5 shrink-0 ${dark ? 'text-slate-600' : 'text-slate-400'}`}
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  className={`font-medium ${dark ? 'text-slate-200' : 'text-slate-800'}`}
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className={`transition-colors ${
                    dark ? 'hover:text-white' : 'hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
