import { Component/* , OnInit */ } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent/*  implements OnInit */{
  title="ng-basics"
  name ="value"

  toggle=false
  toggle2=false
  toggle3=false
  
  addInput(name:string) {
    console.log(this.name)
}
  toggleCards(){
    this.toggle=!this.toggle
  }
  toggleCards2(){
    this.toggle2=!this.toggle2
  }
  toggleCards3(){
    this.toggle3=!this.toggle3
  }
}

