import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { routes } from './app.route';
import { HomeChildrenComponent } from './pages/home-children/home-children.component';
import { MyHeaderComponent } from './pages/my-header/my-header.component';
import { MyFooterComponent } from './pages/my-footer/my-footer.component';
import { ProductComponent } from './pages/product/product.component';
import { Code404Component } from './pages/code404/code404.component';
import { NavComponent } from './pages/components/common/nav/nav.component';
// const appRoutes=[
//   {path:"nav", component:NavComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeChildrenComponent,
    MyHeaderComponent,
    MyFooterComponent,
    ProductComponent,
    Code404Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
