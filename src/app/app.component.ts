import { Component/* , OnInit  */ } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent/*  implements OnInit */ {
  title="ng-basics"
  name ="value"
  imgDjo="https://avatars.mds.yandex.net/get-ott/1534341/2a00000176f15a40fc3ec20b6a61c0b19850/960x540"
  imgUrl="https://thumbs.dfs.ivi.ru/storage33/contents/1/e/0e19422d9f0ce8eccacd481bd985a2.jpg"

  /* ngOnInit() {
    setInterval ( () => {
      this.imgUrl='https://avatars.mds.yandex.net/get-ott/1534341/2a0000016f0e2ff213c7112837259eaa4b4e/1344x756'
    }, 3000)
    }   */
  addInput(name:string) {
    console.log(this.name)
}

 /*  toggleCards(){
    this.toggle=!this.toggle
  }
  toggleCards2(){
    this.toggle2=!this.toggle2
  }
  toggleCards3(){
    this.toggle3=!this.toggle3
  } */

    

}

