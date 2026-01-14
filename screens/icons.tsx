
import React from 'react';
import { View } from 'react-native';

interface IconProps {
  size?: number;
  color?: string;
  style?: any;
}

const SvgIcon = ({ children, size = 24, style }: { children: any; size?: number; style?: any }) => (
  <View style={[{ width: size, height: size }, style]}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  </View>
);

export const HomeIcon = (props: IconProps) => (
  <SvgIcon {...props}>
    <path d="M3 9.5L12 3L21 9.5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9.5Z" stroke={props.color || "#222222"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 21V12H15V21" stroke={props.color || "#222222"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </SvgIcon>
);

export const WorkIcon = (props: IconProps) => (
  <SvgIcon {...props}>
    <rect x="3" y="6" width="18" height="14" rx="2" stroke={props.color || "#222222"} strokeWidth="1.5"/>
    <path d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6" stroke={props.color || "#222222"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </SvgIcon>
);

export const BellIcon = (props: IconProps) => (
  <SvgIcon {...props}>
    <path d="M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke={props.color || "#222222"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke={props.color || "#222222"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </SvgIcon>
);

export const BusIcon = (props: IconProps) => (
  <SvgIcon {...props}>
    <rect x="4" y="3" width="16" height="15" rx="3" stroke={props.color || "#222222"} strokeWidth="1.5"/>
    <path d="M4 11H20" stroke={props.color || "#222222"} strokeWidth="1.5"/>
    <path d="M8 18V21" stroke={props.color || "#222222"} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 18V21" stroke={props.color || "#222222"} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="15" r="1" fill={props.color || "#222222"}/>
    <circle cx="16" cy="15" r="1" fill={props.color || "#222222"}/>
  </SvgIcon>
);

export const WalletIcon = (props: IconProps) => (
  <SvgIcon {...props}>
    <path d="M19 7H5C3.89543 7 3 7.89543 3 9V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9C21 7.89543 20.1046 7 19 7Z" stroke={props.color || "#222222"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 13H21" stroke={props.color || "#222222"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 11C3 9.89543 3.89543 9 5 9H19" stroke={props.color || "#222222"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </SvgIcon>
);

export const UserIcon = (props: IconProps) => (
  <SvgIcon {...props}>
    <path d="M20 21V19C20 17.9391 19.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15C10.9391 15 9.92172 15.4214 9.17157 16.1716C8.42143 16.9217 8 17.9391 8 19V21" stroke={props.color || "#222222"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="4" stroke={props.color || "#222222"} strokeWidth="1.5"/>
  </SvgIcon>
);

export const RewardIcon = (props: IconProps) => (
  <SvgIcon {...props}>
    <path d="M6 9H18L21 21H3L6 9Z" stroke={props.color || "#222222"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V9" stroke={props.color || "#222222"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </SvgIcon>
);

export const ChevronRight = (props: IconProps) => (
  <SvgIcon {...props}>
    <path d="M9 18L15 12L9 6" stroke={props.color || "#222222"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </SvgIcon>
);

export const BackIcon = (props: IconProps) => (
  <SvgIcon {...props}>
    <path d="M15 18L9 12L15 6" stroke={props.color || "#222222"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </SvgIcon>
);

export const PlayIcon = (props: IconProps) => (
  <SvgIcon {...props}>
    <path d="M5 3L19 12L5 21V3Z" fill={props.color || "#222222"} />
  </SvgIcon>
);

export const PauseIcon = (props: IconProps) => (
  <SvgIcon {...props}>
    <path d="M6 4H10V20H6V4Z" fill={props.color || "#222222"} />
    <path d="M14 4H18V20H14V4Z" fill={props.color || "#222222"} />
  </SvgIcon>
);

export const MusicIcon = (props: IconProps) => (
  <SvgIcon {...props}>
    <path d="M9 18V5L21 3V16" stroke={props.color || "#222222"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6" cy="18" r="3" stroke={props.color || "#222222"} strokeWidth="2"/>
    <circle cx="18" cy="16" r="3" stroke={props.color || "#222222"} strokeWidth="2"/>
  </SvgIcon>
);
