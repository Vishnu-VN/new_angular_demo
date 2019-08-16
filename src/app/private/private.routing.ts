import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PrivateComponent } from './private.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from '../public/login/login.component'
import { WorkflowComponent } from './workflow/workflow.component'
import { NotFoundComponent } from './not-found/not-found.component'

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'home/dashboard'
  },
  {
    path: 'home',
    component: PrivateComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'workflow',
        component: WorkflowComponent
      }
    ]
  },
  {
    path: 'not_found',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PrivateRoutes {}
