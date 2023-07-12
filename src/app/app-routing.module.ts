import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';
import { KidsComponent } from './components/kids/kids.component';
import { CollectionComponent } from './components/collection/collection.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  
  {
    path:'men',loadChildren:() => import('./components/men/men.module').then(m => m.MenModule)
  },
  {
    path:'women',loadChildren:() => import('./components/women/women.module').then(m => m.WomenModule)
  },
  {
    path:'kids',loadChildren:() => import('./components/kids/kids.module').then(m => m.KidsModule)
  },
  {
    path:'collection',loadChildren:() => import('./components/collection/collection.module').then(m => m.CollectionModule)
  },
  {path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
