export interface Event {
  id: number;
  key: string;
  name: string;
}

export interface Phase {
  actualEndDate: string;
  actualStartDate: string;
  duration: number;
  id: string;
  isOpen: boolean;
  name: string;
  phaseId: string;
  scheduledEndDate: string;
  scheduledStartDate: string;
}

export interface PrizeSet {
  description: string;
  prizes: {
    type: string;
    value: number;
  }[];
  type: string;
}

export interface Task {
  created: string;
  createBy: string;
  currentPhaseNames: string[];
  description: string;
  descriptionFormat: string;
  endDate: string;
  events: Event[];
  groups: string[];
  id: string;
  legacy: {
    directProjectId: number;
    forumId: number;
    reviewScorecardId: number;
    reviewType: string;
    subTrack: string;
    track: string;
  };
  legacyId: number;
  metadata: string[];
  name: string;
  numOfRegistrants: number;
  numOfSubmissions: number;
  phases: Phase[];
  prizeSets: PrizeSet[];
  projectId: number;
  registrationEndDate: string;
  registrationStartDate: string;
  startDate: string;
  status: string;
  submissionEndDate: string;
  submissionStartDate: string;
  tags: string[];
  task: {
    isAssigned: boolean;
    isTask: boolean;
    memberId: number | null;
  };
  terms: {
    id: string;
    roleId: string;
  }[];
  timelineTemplateId: string;
  track: string;
  trackId: string;
  type: string;
  typeId: string;
  updated: string;
  updatedBy: string;
  winners: any[];
}

export type ViewType = 'card' | 'list';

export interface Tasks {
  list: Task[];
  view: ViewType;
  page: number;
  loading: boolean;
  showLoadMore: boolean;
}
