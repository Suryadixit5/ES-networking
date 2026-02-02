import { NavLink, Service, Industry } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { 
    label: 'Our Services', 
    href: '#services',
    subLinks: [
      'CCTV SYSTEM',
      'Access Control System',
      'Emergency Door Release Or Green MCP',
      'Fire Exit Doors',
      'Fire Alarm System',
      'Fire Extinguishers',
      'Intruder Alarm System',
      'Water Leak Detection',
      'EPABX',
      'Networking',
      'Barriers',
      'Door Frame Metal Detector'
    ]
  },
  { label: 'Our Supporting Partners', href: '#partners' },
  { label: 'Contact Us', href: '#contact' },
];

export const SERVICES: Service[] = [
  { id: '1', title: 'CCTV SYSTEM', image: 'https://www.gdcreations.in/assets/img/s1.png' },
  { id: '2', title: 'Access Control System', image: 'https://www.gdcreations.in/assets/img/s2.jpg' },
  { id: '3', title: 'Emergency Door Release', image: 'https://www.gdcreations.in/assets/img/s3.png' },
  { id: '4', title: 'Fire Alarm System', image: 'https://www.gdcreations.in/assets/img/s4.jpg' },
  { id: '5', title: 'Fire Extinguishers', image: 'https://www.gdcreations.in/assets/img/s5.png' },
  { id: '6', title: 'Intruder Alarm System', image: 'https://www.gdcreations.in/assets/img/s6.png' },
  { id: '7', title: 'Water Leak Detection', image: 'https://www.gdcreations.in/assets/img/s8.jpg' },
  { id: '8', title: 'EPABX', image: 'https://www.gdcreations.in/assets/img/s10.png' },
  { id: '9', title: 'Networking', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800' },
  { id: '10', title: 'Fire Exit Doors', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0WnDGZlnRrwpz5oVn_x7yHdzMC8Ed1l7Ww&s' },
];

export const INDUSTRIES: Industry[] = [
  { name: 'Hospital' },
  { name: 'Real Estate' },
  { name: 'Automobile' },
  { name: 'Banking and Insurance' },
  { name: 'Telecommunication' },
  { name: 'Education' },
  { name: 'Hospitality' },
  { name: 'Advertising and Media' },
];

export const CLIENT_LOGOS = [
  'https://www.gdcreations.in/assets/img/u1.jpg',
  'https://www.gdcreations.in/assets/img/u12.png',
  'https://www.gdcreations.in/assets/img/u7.png',
  'https://www.gdcreations.in/assets/img/u8.jpg',
  'https://www.gdcreations.in/assets/img/u6.jpg',
  'https://www.gdcreations.in/assets/img/u16.png',
  'https://www.gdcreations.in/assets/img/u2.png',
  'https://www.gdcreations.in/assets/img/u13.jpg',
];
