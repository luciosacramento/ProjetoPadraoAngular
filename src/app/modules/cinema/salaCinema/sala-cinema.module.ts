import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaCinemaComponent } from './pages/sala-cinema/sala-cinema.component';
import { SalaCinemaRoutingModule } from './sala-cinema.routing.module';
import { TelaCinemaComponent } from '../telaCinema/pages/tela-cinema/tela-cinema.component';
import { TelaCinemaModule } from '../telaCinema/tela-cinema.module';




@NgModule({
  declarations: [
    SalaCinemaComponent,
    TelaCinemaComponent
  ],
  imports: [
  
    SalaCinemaRoutingModule,
    CommonModule
  ]
})
export class SalaCinemaModule { }
