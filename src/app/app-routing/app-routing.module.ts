import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';


const Routes: Routes = [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'posts',
      // loadChildren: './pages/posts/posts.module#PostsModule'
      loadChildren: () =>import('../pages/posts/posts.module').then(m =>m.PostsModule)
    },
    {
      path: '**',
      redirectTo: 'home'
    }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(Routes)
  ],
  exports:[
     RouterModule
  ]
})
export class AppRoutingModule { }
