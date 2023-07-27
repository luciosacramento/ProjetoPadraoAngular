import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(
    private router : Router
  ){
    
  }
  ngOnInit(): void {
    localStorage.clear()
  }

  navegarSalaCinema(){
    localStorage.setItem('autenticadocinema','SIM')
    this.router.navigate(['/salacinema']);
  }


}
