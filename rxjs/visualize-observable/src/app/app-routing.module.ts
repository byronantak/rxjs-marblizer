import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromDemoComponent } from './pages/from-demo/from-demo.component';
import { OfDemoComponent } from './pages/of-demo/of-demo.component';

const routes: Routes = [
  {
    path: 'of',
    component: OfDemoComponent
  },
  {
    path: 'from',
    component: FromDemoComponent
  },
  {
    path: '',
    redirectTo: 'of',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
