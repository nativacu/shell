import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: AppComponent,
      pathMatch: 'full'
    },
    {
      path: 'flights',
      loadChildren: () => import('mdf1/Module').then(m => m.FlightsModule)
    },
];
