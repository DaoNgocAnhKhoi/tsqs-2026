
import React from 'react';
import { Shield, Heart, Users, Award, BookOpen, Calendar, MapPin, GraduationCap, Star, Info, AlertTriangle } from 'lucide-react';

const icons = {
  Shield,
  Heart,
  Users,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  GraduationCap,
  Star,
  Info,
  AlertTriangle
};

interface IconWrapperProps {
  name: keyof typeof icons;
  className?: string;
  size?: number;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ name, className, size = 24 }) => {
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
};

export default IconWrapper;
