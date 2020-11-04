export interface Group {
  createdAt: string;
  createdBy: string;
  description: string;
  domain: string;
  id: string;
  name: string;
  oldId: string;
  updatedAt: string;
  updatedBy: string;
  privateGroup: boolean;
  selfRegister: boolean;
}

export interface FilterParams {
  groups: string[];
  tags: string[];
}

export interface Filter {
  groupTotalCount: number;
  groups: Group[];
  technologies: string[];
  selectedGroups: string[];
  techStack: string[];
}
