import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala-cinema',
  templateUrl: './sala-cinema.component.html',
  styleUrls: ['./sala-cinema.component.css']
})
export class SalaCinemaComponent implements OnDestroy {


  constructor(
    private router: Router
  ) {

  }

  ngOnDestroy(): void {
    localStorage.clear()
  }

  sair() {
    this.router.navigate(['/login']);
  }

}
