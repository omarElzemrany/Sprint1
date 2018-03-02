import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { AllItemsComponent } from './store/all-items/all-items.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
     
      {
        path: 'my-items',
        component:MyItemsComponent,
      },
      {
        path: '',
        redirectTo: 'items',
        pathMatch: 'full'
      },
      {
        path: 'store',
        children: [
          {
            path: 'all-items',
            component:AllItemsComponent,
          }
        ]
      }  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
