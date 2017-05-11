import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../Services/task.service";
import {Task} from "../../DataModel/task";
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  Tasks:Task[];
  AddTask:Task;
  constructor(private _srv:TaskService) {
   this. AddTask= new  Task();
  _srv.getTasks().
              subscribe(task=>{this.Tasks=task;});
   }

  ngOnInit() {
  }

NewTask(){
 //task.CreatedDate=new Date();
this.AddTask= new   Task();
}

EditTask(edit:Task){
 this.AddTask=edit;
 console.log("Edit",edit);

}

UpdateTask(){

  if(this.AddTask._id!=undefined)
{
  this._srv.UpdateTask(this.AddTask).subscribe(add=>{

  console.log("Task has been Updated");
});}
else
{
 this._srv.AddTasks(this.AddTask).subscribe(add=>{

  console.log("Task has been Added");
  this.Tasks.push(add);
});

}
}

DeleteTask(task:Task){

  this._srv.DeleteTask(task).subscribe(add=>{
    this.Tasks.splice(this.Tasks.indexOf(task) ,1);
  console.log("Task has been Deleted");
});
}

}
