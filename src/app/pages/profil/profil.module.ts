import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { routing }         from './profil.routing';

import { ProfilComponent } from './profil.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ProfilComponent]
})
export class ProfilModule {

}
