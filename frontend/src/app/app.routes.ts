import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SecondTabComponent } from './features/second-tab/second-tab.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'second-tab', component: SecondTabComponent },
  { path: '**', component: HomeComponent },
];
