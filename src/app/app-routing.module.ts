import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { IngresarComponent } from './component/ingresar/ingresar.component';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { ResetcontraComponent } from './component/resetcontra/resetcontra.component';
import { AngularFireAuthGuard,redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin=()=>redirectUnauthorizedTo(['/ingresar']);

const routes: Routes = [
  {path:'',component:IngresarComponent},
  {path:'ingresar',component:IngresarComponent},
  {path:'registrar',component:RegistrarComponent},
  {path:'resetear',component:ResetcontraComponent},
  {path:'home',component:HomeComponent,
    canActivate:[AngularFireAuthGuard],
    data:{authGuardPipe:redirectUnauthorizedToLogin}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
