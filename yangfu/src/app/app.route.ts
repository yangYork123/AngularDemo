import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeChildrenComponent } from './pages/home-children/home-children.component';
import { ProductComponent } from './pages/product/product.component';
export const routes: Routes = [
    // { path: 'heroes', component: HomeComponent,
    // children: [
    //     { path: 'children',component:HomeChildrenComponent },
    // ] }
      //重定向路由
      {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    //设置home组件的路由
    {
        path:'home',
        component:HomeComponent,
        children: [
            { path: 'children',component:HomeChildrenComponent },
        ]
    },
    //设置product组件的路由
    {
        path:'product',
        component:ProductComponent
    },
    {
        path:'children',
        component:HomeChildrenComponent
    }
    //通配路由：**
    // {
    //     path:'**',
    //     component:Code404Component
    // }
  ];