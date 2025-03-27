import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() isCancelled = new EventEmitter<void>(); // using void, if we are not emitting specific type
  enteredTitle = '';
  enteredSummary = signal(''); // using signal for a two way binding
  enteredDate = '';

  toCancelled() {
    this.isCancelled.emit(); // emitting void
  }
}
