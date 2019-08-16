import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PublicComponent } from './public.component'
import { PublicRoutes } from './public.routing'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { LoginModule } from './login/login.module'

@NgModule({
  declarations: [PublicComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    PublicRoutes,
    LoginModule
  ],
  exports: [PublicComponent]
})
export class PublicModule {}
