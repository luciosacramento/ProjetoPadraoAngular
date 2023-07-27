import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { AuthGuard } from './modules/routeGuard/auth.guard';

//-----------------------------------------------------
//Rotas principais e filhas
//-----------------------------------------------------
const routes: Routes = [

   //Carregamento Eager Loading (carregamento 'ansioso')
   //Carrega o compenente login na tag <router-outlet></router-outlet> de app,component.html
  { path: '', pathMatch: 'full', redirectTo: 'login'},

  { path: 'login', component: LoginComponent},
  
  //Carregamento LazyLoading do modulo sala-cinema - só é lido quando efetivamente chamado por 'navigate
  //canActivate só permite a navegação para o compenente sala-cinema se o teste de autorização
  //passar dentro do serviço de guarda de rotas auth.guard.ts
  {
    path: 'salacinema',
    loadChildren: () => import('../app/modules/cinema/salaCinema/sala-cinema.module').then(m => m.SalaCinemaModule),
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 