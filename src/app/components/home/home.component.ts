import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  taskNames: { taskName: string; completed: boolean }[] = [];
  addTask(event: Event, taskNameEl: any) {
    event.preventDefault();
    this.taskNames?.push({ taskName: taskNameEl.value, completed: false });
    console.log(this.taskNames);
  }
  //Delete Task
  deleteTask(index: number) {
    this.taskNames!.splice(index, 1);
  }
  // Complete Task
  completeTask(event: Event, index: number) {
    const checkbox = event.target as HTMLInputElement;
    const isChecked = checkbox.checked;
    if (isChecked) {
      this.taskNames[index].completed = true;
    } else {
      this.taskNames[index].completed = false;
    }
  }
  // Clear Completed
  clearAll() {
    this.taskNames = [];
  }
  // Clear All
}
