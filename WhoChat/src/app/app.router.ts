import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from 'app/callback/callback.component';
import {FeedComponent} from 'app/feed/feed.component';
import {TagsComponent} from 'app/tags/tags.component';

export const router: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'callback', component: CallbackComponent},
    {path: 'feed', component: FeedComponent},
    {path: 'tags', component: TagsComponent}
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);