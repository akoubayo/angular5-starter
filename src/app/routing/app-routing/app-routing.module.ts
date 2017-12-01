import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule,
         Routes,
         PreloadAllModules } from '@angular/router';
import { AppModule }         from './../../app.module';
import { ProfilModule }      from './../../pages/profil/profil.module'
import { LayoutComponent }   from './../../layout/layout.component'

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'pages',
    component: LayoutComponent,
    children:[
      {
        path:'',
        loadChildren:'./../../pages/profil/profil.module#ProfilModule'
      }
    ],
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: true,
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
