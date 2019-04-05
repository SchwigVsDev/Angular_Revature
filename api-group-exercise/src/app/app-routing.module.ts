import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPersonComponent } from './search-person/search-person.component';
import { SearchShipComponent } from './search-ship/search-ship.component';

const routes: Routes = [
  {path: 'person',component: SearchPersonComponent},
  {path: 'starship', component: SearchShipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
