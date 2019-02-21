import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { D3ViewComponent } from './subcomponents/d3-view/d3-view.component';
import { D3ViewStatefulComponent } from './subcomponents/d3-view-stateful/d3-view-stateful.component';

@NgModule({
  declarations: [
    AppComponent,
    D3ViewComponent,
    D3ViewStatefulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
