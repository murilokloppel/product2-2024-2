import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',redirectTo : '/products', pathMatch: 'full'},
  {path: 'products',    component: ProductComponent},
  {path: 'product/:id', component: ProductFormComponent},
  {path: 'product',     component: ProductFormComponent},
  {path: 'home',        component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }