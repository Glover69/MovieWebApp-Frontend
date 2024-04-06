import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { WatchNowComponent } from './modules/home/pages/watch-now/watch-now.component';
import { SearchComponent } from './modules/home/pages/search/search.component';
import { TicketsComponent } from './modules/home/pages/tickets/tickets.component';
import { WatchlistComponent } from './modules/home/pages/watchlist/watchlist.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home/watch-now', pathMatch: 'full' }, 
    {component: WatchNowComponent, path: 'home/watch-now'},
    {component: WatchNowComponent, path: 'home/watch-now'},
    {component: SearchComponent, path: 'home/search'},
    {component: WatchlistComponent, path: 'home/my-watchlist'},
    {component: TicketsComponent, path: 'home/tickets'},
];
