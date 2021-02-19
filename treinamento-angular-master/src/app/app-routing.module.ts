import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'pessoa', loadChildren: './modules/cadastros/pessoa/pessoa.module#PessoaModule' },
      { path: 'empresa', loadChildren: './modules/cadastros/empresa/empresa.module#EmpresaModule' },
      { path: 'formulario', loadChildren: './modules/cadastros/formulario/formulario.module#FormularioModule' },
      { path: 'gerador-avatar', loadChildren: './modules/ferramentas/gerador-avatar/gerador-avatar.module#GeradorAvatarModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
