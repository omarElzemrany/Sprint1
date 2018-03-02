import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyItemsComponent } from './my-items.component';
import { MyItemsService } from './my-items.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    HttpClientModule
  ],
  declarations: [MyItemsComponent],
  providers:[MyItemsService,HttpClient]
})
export class MyItemsModule { 

  

  
}
