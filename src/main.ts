import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BarraComponent } from './app/barra/barra.component';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
platformBrowserDynamic().bootstrapModule(BarraComponent)
  .catch(err => console.error(err));