import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {printer} from "./app/app.component";

if (environment.production) {
  enableProdMode();
  console.log = ()=>{}
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
