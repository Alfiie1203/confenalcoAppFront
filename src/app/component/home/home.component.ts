import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthComfenancoService } from 'src/app/service/auth-comfenanco.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public msg:string="";

  constructor() { }
  

  ngOnInit(): void {
  }

}
