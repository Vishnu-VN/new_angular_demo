import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PrivateComponent } from './private.component'
import { RouterModule } from '@angular/router'
import { PrivateRoutes } from './private.routing'
import { BrowserModule } from '@angular/platform-browser'
import { DashboardModule } from './dashboard/dashboard.module'
import { WorkflowModule } from './workflow/workflow.module'
import { ProgressBarModule } from 'primeng/progressbar'
import { MenuModule } from 'primeng/menu'
import { InputSwitchModule } from 'primeng/inputswitch'
import { ScrollPanelModule } from 'primeng/scrollpanel'
import { PanelMenuModule } from 'primeng/panelmenu'
import { NotFoundModule } from './not-found/not-found.module'

@NgModule({
  declarations: [PrivateComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    PrivateRoutes,
    DashboardModule,
    NotFoundModule,
    WorkflowModule,
    ProgressBarModule,
    MenuModule,
    InputSwitchModule,
    ScrollPanelModule,
    PanelMenuModule
  ],
  exports: [PrivateComponent]
})
export class PrivateModule {}
