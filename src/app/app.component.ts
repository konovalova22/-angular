import { Component /* , OnInit  */ } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent /*  implements OnInit */ {
  navLinks = [
    {
      link: '',
      label: 'Мое кино',
    },
    {
      link: './shop',
      label: 'Магазин',
    },
  ];
  title = 'ng-basics';
}
