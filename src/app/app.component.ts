import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'keloglan2';

  /**
   *
   */
  constructor(private route:Router) {}
    
  routing(op:string){
    this.route.navigate([op]);
  }
}
