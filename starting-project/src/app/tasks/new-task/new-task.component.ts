import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() isCancelled = new EventEmitter<void>(); // using void, if we are not emitting specific type

  toCancelled(){
    this.isCancelled.emit();  // emitting void
  }
}
