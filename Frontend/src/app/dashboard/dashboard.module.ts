import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { MyItemsService } from './my-items/my-items.service';
import { MyItemsModule } from './my-items/my-items.module';
import { AllItemsModule } from './store/all-items/all-items.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  imports: [ThemeModule, DashboardRoutingModule,MyItemsModule,AllItemsModule],
  declarations: [DashboardComponent],
  entryComponents: [MyItemsComponent],
  providers: []
})
export class DashboardModule {}
