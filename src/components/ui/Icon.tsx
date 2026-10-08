import React from 'react';
import {
  Activity,
  BatteryMedium,
  BookOpen,
  Box,
  Brain,
  CircuitBoard,
  Code,
  Cpu,
  Database,
  DollarSign,
  Eye,
  Feather,
  FlaskConical,
  Gauge,
  GraduationCap,
  HeartPulse,
  Layers,
  Mail,
  MonitorDot,
  Moon,
  Puzzle,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Usb,
  Users,
  Waves,
  Wifi,
  Zap,
  type LucideIcon,
} from 'lucide-react';

/**
 * Icons that content in src/data may refer to by name.
 * To use another lucide icon, import it above and add it here.
 */
export const icons = {
  activity: Activity,
  battery: BatteryMedium,
  book: BookOpen,
  box: Box,
  brain: Brain,
  circuit: CircuitBoard,
  code: Code,
  cpu: Cpu,
  database: Database,
  dollar: DollarSign,
  eye: Eye,
  feather: Feather,
  flask: FlaskConical,
  gauge: Gauge,
  education: GraduationCap,
  heart: HeartPulse,
  layers: Layers,
  mail: Mail,
  monitor: MonitorDot,
  moon: Moon,
  puzzle: Puzzle,
  scale: Scale,
  shield: ShieldCheck,
  sliders: SlidersHorizontal,
  sparkles: Sparkles,
  usb: Usb,
  users: Users,
  waves: Waves,
  wifi: Wifi,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function Icon({name, className, size = 20}: IconProps): React.ReactElement {
  const Cmp = icons[name];
  return <Cmp className={className} size={size} strokeWidth={1.75} aria-hidden="true" />;
}

/** Icon inside a small tinted square, used at the top of cards. */
export function IconTile({name}: {name: IconName}): React.ReactElement {
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-accent-soft text-accent">
      <Icon name={name} />
    </span>
  );
}
