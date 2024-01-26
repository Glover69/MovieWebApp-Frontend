import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { WatchNowComponent } from './modules/home/pages/watch-now/watch-now.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home/watch-now', pathMatch: 'full' }, 
    {component: WatchNowComponent, path: 'home/watch-now'}
];
