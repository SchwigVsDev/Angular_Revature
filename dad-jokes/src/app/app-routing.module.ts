import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { SearchJokeComponent } from './search-joke/search-joke.component';
import { SecretComponent } from './secret/secret.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'random', component: RandomJokeComponent},
  {path:'search', component: SearchJokeComponent},
  {path: 'secret', component: SecretComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
