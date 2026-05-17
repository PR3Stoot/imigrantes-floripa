import {
  FileText,
  HeartPulse,
  Bus,
  Briefcase,
  HandHeart,
  GraduationCap,
  Home,
  Siren,
  Compass,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  HeartPulse,
  Bus,
  Briefcase,
  HandHeart,
  GraduationCap,
  Home,
  Siren,
  Compass,
};

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const Component = iconMap[name] ?? Compass;
  return <Component className={className} aria-hidden />;
}
