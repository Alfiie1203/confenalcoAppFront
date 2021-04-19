import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthComfenancoService } from 'src/app/service/auth-comfenanco.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  public email:string;
  public password:string;
  public msg:string="";

  constructor(public authComfenancoService:AuthComfenancoService,
              public router:Router) { }

  
  public registrar():void{
    this.authComfenancoService.createUser(this.email,this.password)
    .then(()=>{
      this.authComfenancoService.validarEmail();
      this.router.navigate(['/ingresar']);
    })
    .catch(e=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Parece que te hicieron falta datos por llenar'
      })
    });
  }

  ngOnInit(): void {
  }

}
