import { Component, OnInit } from '@angular/core';
import { ITask } from './../../../shared/interfaces/task.interface';
import { Task } from './../../../shared/models/task.model';


 
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  isChecked: boolean = false;
  task: string = '';
  taskArray: Array<ITask> = [];
  editedValue: string = '';
  isEdited: boolean = false;
  editedIndex: number;
  taskCounter: number;

  constructor() { }
  ngOnInit(): void {}

  addTask(): void{
    let newTask: ITask = new Task(this.task, false, false);
    this.taskArray.push(newTask);
    this.task = '';
    this.taskCounter = this.taskArray.length;
  }

  editTask(i): void{
    this.taskArray[i].isEdited = true;
    this.editedIndex = i;
    this.isEdited = this.taskArray[i].isEdited;
    this.editedValue = this.taskArray[i].task;
  }

  deleteTask(): void{
    this.taskArray.splice(this.editedIndex, 1)
  }

  saveEdited(): void{
    this.taskArray[this.editedIndex].task = this.editedValue;
    this.editedValue = '';  
   }
}





