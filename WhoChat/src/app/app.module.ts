import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {AuthService} from './services/auth.service';
import {DataService} from './services/data.service';
import { CallbackComponent } from './callback/callback.component';
import { FeedComponent } from './feed/feed.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    FeedComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
