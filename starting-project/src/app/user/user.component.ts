import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required:true }) avatar!: string;
  // @Input({ required:true }) name!: string;

  avatar = input.required<string>();   
  // ==> InputSignal are read-only, i.e unlike signals set() is not application inside template
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  onSelectUser() {}

  // get imagePath(){
  //   return 'assets/users/'+this.avatar;
  // }
}
