import { ShopComponent } from './pages/shop/shop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'shop', component: ShopComponent },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
