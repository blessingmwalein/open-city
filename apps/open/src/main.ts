import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    const InitialContainerElement =
      document.getElementById('initial-container');
    if (InitialContainerElement) {
      InitialContainerElement.remove();
    }
  })
  .catch((err) => {
    console.error(err);
  });
