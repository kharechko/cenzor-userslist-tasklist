import { ITask } from '../interfaces/task.interface';

export class Task implements ITask{
    constructor(
        public task: string,
        public isChecked : boolean,
        public isEdited: boolean
    ){}
}