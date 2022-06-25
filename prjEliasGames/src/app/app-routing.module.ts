import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProdutoComponent } from './pages/add-produto/add-produto.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutoComponent } from './pages/produto/produto.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'produto/:id', component: ProdutoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'cadastrar-produto', component: AddProdutoComponent},
  {path: 'editar-produto/:id', component: AddProdutoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
