import { useState } from 'react';
import AnimatedCounter from './AnimatedCounter';

export default function DataCard({ title, value, subtitle, icon, color = 'blue', delay = 0, trend, prefix = '$', suffix = '', fullOpacity = false }) {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-emerald-600',
    red: 'from-red-500 to-rose-600',
    purple: 'from-purple-500 to-violet-600',
    orange: 'from-orange-500 to-amber-600',
    cyan: 'from-cyan-500 to-blue-500',
    primary: 'from-primary to-primary',
    secondary: 'from-secondary to-secondary'
  };

  // Versiones suaves de los colores (sin opacidad, tonos más claros)
  const softColorClasses = {
    blue: 'from-blue-400 to-blue-500',
    green: 'from-green-400 to-emerald-500',
    red: 'from-red-400 to-rose-500',
    purple: 'from-purple-400 to-violet-500',
    orange: 'from-orange-400 to-amber-500',
    cyan: 'from-cyan-400 to-blue-400',
    primary: 'from-[#4a5d7a] to-[#3d4f66]',
    secondary: 'from-[#f2a99a] to-[#f09b8e]'
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
      style={{ 
        animationDelay: `${delay}ms`,
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${fullOpacity ? softColorClasses[color] : colorClasses[color]} ${fullOpacity ? 'opacity-100' : color === 'primary' ? 'opacity-50' : 'opacity-80'} group-hover:opacity-100 transition-opacity`}></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          animation: isHovered ? 'slideBackground 20s linear infinite' : 'none'
        }}></div>
      </div>

      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${fullOpacity ? softColorClasses[color] : colorClasses[color]} opacity-0 group-hover:opacity-20 blur-xl transition-opacity`}></div>

      {/* Content */}
      <div className="relative p-6 text-white">
        <div className="flex items-start justify-between mb-3">
          <div className="text-sm font-medium opacity-90 uppercase tracking-wider">{title}</div>
          {icon && (
            <div className="text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform">
              {icon}
            </div>
          )}
        </div>
        
        <div className="text-4xl font-bold mb-2 tracking-tight">
          <AnimatedCounter end={value} prefix={prefix} suffix={suffix} />
        </div>
        
        {subtitle && (
          <div className="text-sm opacity-80">{subtitle}</div>
        )}

        {trend && (
          <div className={`mt-3 flex items-center text-sm font-semibold ${trend > 0 ? 'text-green-200' : 'text-red-200'}`}>
            <span className="mr-1">{trend > 0 ? '↑' : '↓'}</span>
            <span>{Math.abs(trend)}%</span>
          </div>
        )}

        {/* Bottom shine effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white opacity-20 group-hover:opacity-40 transition-opacity"></div>
      </div>

      <style jsx>{`
        @keyframes slideBackground {
          from {
            transform: translateX(0) translateY(0);
          }
          to {
            transform: translateX(40px) translateY(40px);
          }
        }
      `}</style>
    </div>
  );
}
