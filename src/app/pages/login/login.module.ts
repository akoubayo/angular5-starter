import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
         FormsModule,
         ReactiveFormsModule
       }                     from '@angular/forms';
import { MaterialModule} from './../../module/material/material.module'
import { LoginComponent } from './login.component';
import { routing }  from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
