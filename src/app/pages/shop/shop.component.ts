import { AfterViewInit, Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit, AfterViewInit {
  imgUrl =
    'https://www.iphones.ru/wp-content/uploads/2020/02/FCFA3EDE-5D55-4B02-85AF-0C6272C394EB.jpeg';
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    new Splide('.splide').mount();
  }
}
