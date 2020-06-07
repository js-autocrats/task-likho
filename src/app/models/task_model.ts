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
  CT: string;
  LUT: string;
  id: number;
  items: {
    description: string;
    dueDate: Date;
    dueTime: string;
    title: string;
  };
  taskId: string;
  isChecked: boolean;
}

export class CheckListForm {
  constructor(public type: CheckListFormType) { }
}

export enum CheckListFormType {
  addCheckList = 'ADDCHECKLIST',
  editCheckList = 'EDITCHECKLIST',
}
