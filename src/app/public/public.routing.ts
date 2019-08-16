import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PublicComponent } from './public.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from '../private/dashboard/dashboard.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PublicRoutes {}
