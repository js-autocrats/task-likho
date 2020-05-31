export class Task {
  id: string;
  taskId: string;
  title: string;
  description: string;
  status: string;
  labels: Labels[];
  dueDate: Date;
  checkList: CheckList[];
  checkListStats: CheckListStats[];
}

export interface Labels {
  id: string;
  label: string;
}

export interface CheckListStats {
  checkListId: CheckListStats;
}

export interface CheckListStats {
  completed: number;
  pending: number;
  total: number;
}

export interface CheckList {
  title: string;
  description: string;
  id: number;
  checkListId: string;
  isChecked: boolean;
}
