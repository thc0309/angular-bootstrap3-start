import { Routes, RouterModule } from '@angular/router';
import { PosComponent } from './pos';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: PosComponent },
  { path: 'pos',  component: PosComponent },
  { path: '**',    component: NoContentComponent },
];
