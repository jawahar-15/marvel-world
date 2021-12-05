import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { MarvelCharactersComponent } from './marvel-characters/marvel-characters.component';
import { MyMarvelComponent } from './my-marvel/my-marvel.component';
import { MyStocksComponent } from './my-stocks/my-stocks.component';

const routes: Routes = [
  {path: 'stocks', component: MyStocksComponent},
  {path: 'marvel', component: MyMarvelComponent},
  {path: 'marvel/characters', component: MarvelCharactersComponent},
  {path: 'marvel/characters/:char' , component: CharacterComponent},
  {path: '', redirectTo: 'marvel',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
