import { Routes } from '@angular/router';
import { WatchNowComponent } from './pages/watch-now/watch-now.component';

export const routes: Routes = [
    { path: 'home', redirectTo: 'home/watch-now', pathMatch: 'full' }, 
    {component: WatchNowComponent, path: 'home/watch-now'}

];
