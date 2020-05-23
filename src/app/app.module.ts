import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCesiumModule } from 'angular-cesium';
import { AngularCesiumWidgetsModule } from 'angular-cesium';
import { PlanesLayerComponent } from './planes-layer/planes-layer.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanesLayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
