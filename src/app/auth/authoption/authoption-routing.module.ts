import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthoptionPage } from './authoption.page';

const routes: Routes = [
  {
    path: '',
    component: AuthoptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthoptionPageRoutingModule {}
