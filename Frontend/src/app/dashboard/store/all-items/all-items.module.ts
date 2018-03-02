import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllItemsComponent } from './all-items.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AllItemsService } from './all-items.service';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    HttpClientModule
  ],
  declarations: [AllItemsComponent],
  providers:[AllItemsService,HttpClient]
})
export class AllItemsModule { }
