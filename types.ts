
export interface Service {
  id: string;
  title: string;
  image: string;
  description?: string;
}

export interface Industry {
  name: string;
}

export interface NavLink {
  label: string;
  href: string;
  subLinks?: string[];
}
