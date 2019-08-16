import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { PublicModule } from './public/public.module'
import { PrivateModule } from './private/private.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, PrivateModule, PublicModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
