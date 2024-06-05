import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
{ path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
{ path: 'album', loadChildren: () => import('./album/album.module').then(m => m.AlbumModule) },
{ path: 'photo', loadChildren: () => import('./photo/photo.module').then(m => m.PhotoModule) },
// { path: 'navigation', loadChildren: () => import('./navigation/navigation.module').then(m => m.NavigationModule) }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }