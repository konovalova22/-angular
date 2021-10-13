import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  imgDjo =
    'https://avatars.mds.yandex.net/get-ott/1534341/2a00000176f15a40fc3ec20b6a61c0b19850/960x540';
  imgUrl =
    'https://thumbs.dfs.ivi.ru/storage33/contents/1/e/0e19422d9f0ce8eccacd481bd985a2.jpg';
  constructor() {}
  name = 'value';
  ngOnInit(): void {}
  addInput(name: string) {
    console.log(this.name);
  }
}
