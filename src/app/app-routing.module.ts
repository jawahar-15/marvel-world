import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyStocksComponent } from './my-stocks/my-stocks.component';

const routes: Routes = [
  {path: 'stocks', component: MyStocksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
