
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { SalaCinemaComponent } from './pages/sala-cinema/sala-cinema.component';

const salacinemaRoutes: Routes = [

    {
        path: '', component: SalaCinemaComponent,
    }

];

@NgModule({
    imports: [RouterModule.forChild(salacinemaRoutes)],
    exports: [RouterModule]
})

export class SalaCinemaRoutingModule { }
