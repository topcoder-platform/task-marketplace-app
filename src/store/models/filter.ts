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
  group: string;
  tags: string[];
}

export interface Filter {
  groupTotalCount: number;
  groups: Group[];
  selectedGroup: string;
  techStack: string[];
}
