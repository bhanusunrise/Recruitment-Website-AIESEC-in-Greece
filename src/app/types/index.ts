export interface Job {
  id: number;
  title: string;
  sub_function: string;
  reporting_to: string;
  company: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  location: string;
  type: string;
}

export interface SearchProps {
  onSearch: (searchTerm: string, locationTerm: string) => void;
}

export interface JobListingsProps {
  jobs: Job[];
}

export interface JobCardProps {
  job: Job;
}

export interface BulletListProps {
  items: string[];
  title: string;
}