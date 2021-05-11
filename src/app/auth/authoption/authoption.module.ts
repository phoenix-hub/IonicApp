import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthoptionPageRoutingModule } from './authoption-routing.module';

import { AuthoptionPage } from './authoption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthoptionPageRoutingModule
  ],
  declarations: [AuthoptionPage]
})
export class AuthoptionPageModule {}
