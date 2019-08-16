import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { PanelModule } from 'primeng/panel'
import { RoundProgressModule } from 'angular-svg-round-progressbar'
import { ChartsModule } from 'ng2-charts'

const routes = [
  {
    path: 'home/dashboard',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes),
    PanelModule,
    ChartsModule,
    RoundProgressModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {}
