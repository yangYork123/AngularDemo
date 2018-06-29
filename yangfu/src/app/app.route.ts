import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { HomeChildrenComponent } from './pages/home-children/home-children.component'
export const routes: Routes = [
    { path: 'heroes', component: HomeComponent,
    children: [
        { path: 'children',component:HomeChildrenComponent },
    ] }
  ];