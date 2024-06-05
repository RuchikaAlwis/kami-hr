import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AlbumModule } from './album/album.module';
import { NavigationModule } from './navigation/navigation.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PhotoModule } from './photo/photo.module';
import { PostsModule } from './posts/posts.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  routes } from './app.routes';
// import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AlbumModule,
    NavigationModule,
    DashboardModule,
    PhotoModule,
    PostsModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
