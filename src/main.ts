import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

Cesium.buildModuleUrl.setBaseUrl('/assets/cesium/');
Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiZDEyNWUxNS05NmE1LTQwYjktOTYwMC0yNDU4Y2I2ZjBmZTgiLCJpZCI6MjMyNjUsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODMwNTU2ODR9.S3h82yEat1bplPE0ESN12o4wMf5mRr39ZA8PmUAUbRQ";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
