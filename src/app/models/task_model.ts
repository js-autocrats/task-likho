export class Task {
    title: string;
    description: string;
    id: number;
    taskId: string;
    todoList: TODO[];
}

export interface TODO {
    "title": string;
    "description": string;
    "id": number;
    "todoId": string;
    "isChecked": boolean;
}
