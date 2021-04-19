import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresarComponent } from './component/ingresar/ingresar.component';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { ResetcontraComponent } from './component/resetcontra/resetcontra.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarComponent,
    RegistrarComponent,
    HomeComponent,
    HeaderComponent,
    ResetcontraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebases),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
