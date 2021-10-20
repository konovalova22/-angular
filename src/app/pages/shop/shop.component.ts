import { AfterViewInit, Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit, AfterViewInit {
  public filmUrls: string[] = [
    'https://avatars.mds.yandex.net/get-ott/239697/2a0000017bd0bbbb8f1712cf52f8145fb37c/375x234',
    'https://avatars.mds.yandex.net/get-ott/1531675/2a0000017c27ba1217835feb7fcd44fbe30b/375x234',
    'https://avatars.mds.yandex.net/get-ott/1531675/2a0000017bd07f7ef8268383c31b5dfc6bbc/375x234',
    'https://avatars.mds.yandex.net/get-ott/1534341/2a0000017b88a29f580d61409435fa08b356/375x234',
    'https://avatars.mds.yandex.net/get-ott/1672343/2a0000017ba24efc5aac1c98f13cc6ac981f/375x234',
    'https://avatars.mds.yandex.net/get-ott/1534341/2a000001786b5a53fb4f61b78f14b88aabda/375x234',
    'https://avatars.mds.yandex.net/get-ott/1648503/2a000001700b64e69cd4aff4805d9420a69f/375x234',
    'https://avatars.mds.yandex.net/get-ott/223007/2a0000017802c0f157fa8afd768d8d10200b/375x234',
    'https://avatars.mds.yandex.net/get-ott/200035/2a00000177bb06d7851b6fd102824618bbfb/375x234',
    'https://avatars.mds.yandex.net/get-ott/2419418/2a000001786a16665570787d7c4f96fa3ba1/375x234',
    'https://avatars.mds.yandex.net/get-ott/200035/2a0000017213259bf946effd48c34adeed97/375x234',
    'https://avatars.mds.yandex.net/get-ott/1531675/2a0000017b3ea2772669144d6e17a8d34213/375x234',
    'https://avatars.mds.yandex.net/get-ott/1534341/2a00000171a640ec6fd6dec90cb11de97325/375x234',
    'https://avatars.mds.yandex.net/get-ott/236744/2a0000017c180e5ff1a2264de2dbc6c1b52e/375x234',
    'https://avatars.mds.yandex.net/get-ott/2439731/2a0000017aedc5e48891f8780c46f293773d/375x234',
  ];

  public serialUrls: string[] = [
    'https://avatars.mds.yandex.net/get-ott/223007/2a0000016e2648ee652a7f54829e6a2e55d7/375x234',
    'https://avatars.mds.yandex.net/get-ott/2385704/2a00000171f4c1c540a32e270aeb7a7c50da/640x360',
    'https://avatars.mds.yandex.net/get-ott/2419418/2a00000173c90a1639611740db1278248241/375x234',
    'https://avatars.mds.yandex.net/get-ott/1648503/2a0000017b11ca4acf7294eb5660a30299b9/375x234',
    'https://avatars.mds.yandex.net/get-ott/2419418/2a00000172283ab9b761f5f2dbaa922a9b04/375x234',
    'https://avatars.mds.yandex.net/get-ott/223007/2a000001720d0a07780a0365dd211075c545/375x234',
    'https://avatars.mds.yandex.net/get-ott/2385704/2a000001732e46963ea1757e9d053be66905/640x360',
    'https://avatars.mds.yandex.net/get-ott/2419418/2a000001732e3433c95717376196747657b6/640x360',
    'https://avatars.mds.yandex.net/get-ott/1672343/2a00000176aae933898aa9562ddb3422f37b/375x234',
    'https://avatars.mds.yandex.net/get-ott/212840/2a00000171a63e09e4489969ce4c31eb8b1a/375x234',
  ];


  private filmSlider: Splide | null = null;
  private filmOtherSlider: Splide | null = null;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.initSliderFilms();
    this.initSliderOtherFilms();
  }

  public onAddFilmClick(): void {
     /* this.filmUrls.splice(
      0,
      0,
      
      'https://avatars.mds.yandex.net/get-ott/200035/2a0000017213259bf946effd48c34adeed97/375x234'
    );
    this.initSliderFilms();  */
 prompt('Введите адрес URL-картинки','https://avatars.mds.yandex.net/get-ott/200035/2a0000017213259bf946effd48c34adeed97/375x234')
       
     this.filmUrls.splice(
        0,
        0,
        'https://avatars.mds.yandex.net/get-ott/200035/2a0000017213259bf946effd48c34adeed97/375x234'
        
      );
      this.initSliderFilms();
  }

  private initSliderFilms() {
    this.filmSlider?.destroy();
    this.filmSlider = new Splide('.splide', {
      perPage: 5,
    }).mount();
  }

  private initSliderOtherFilms() {
    this.filmOtherSlider?.destroy();
    this.filmOtherSlider = new Splide('.splides', {
      perPage: 5,
    }).mount();
  }
}
