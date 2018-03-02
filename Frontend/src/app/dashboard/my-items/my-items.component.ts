import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { MyItemsService } from './my-items.service';
import { timer } from 'rxjs/observable/timer';
import { Timestamp } from 'rxjs';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.scss'],
  providers:[MyItemsService],
  
})
export class MyItemsComponent implements OnInit {

  source: LocalDataSource;

  data :any;

  settings =
   {
    delete: {
      confirmDelete:true,
    },
    add:{
      confirmCreate:true,
    },
    edit:{
      confirmSave:true,
    },
    columns: {
      name: {
        title: 'Name',
        filter: String,
      },
      price: {
        title: 'Price',
        filter: Number,
      },
      component: {
        title: 'Component',
        filter: Number,
      },
      createdAt: {
        title: 'Created At',
        filter: NgbDate,
      },
      updatedAt: {
        title: 'Updated At',
        filter: NgbDate,
      }
    }
  }; 

  constructor(private myItemService:MyItemsService) {  }

  ngOnInit() {
      this.myItemService.getAllUserProductsBySellerName().subscribe(
        (res:any) => {
          this.data = res.data ;
        }
      );
  }

  

  onDeleteConfirm(event):void{

    event.confirm.resolve();

    this.myItemService.deleteAllUserProducts(event.data._id).subscribe();

  }

  onUpdateComfirm(event){
    event.confirm.resolve(event.newData);
    console.log(event.newData._id);
    this.myItemService.updateAllUserProiduct(event.newData._id,event.newData.name,event.newData.price,event.newData.sellername,event.newData.component).subscribe();

  }

  onCreateConfirm(event){
    event.confirm.resolve(event.newData);
    this.myItemService.createAllUserProiduct(event.newData.name,event.newData.price,event.newData.sellername,event.newData.component).subscribe();
  }
   
  onSearch(query: string = '') {
    this.source.setFilter([
      {
        field: 'name',
        search: query
      },
      {
        field: 'price',
        search: query
      },
      {
        field: 'createdAt',
        search: query
      },
      {
        field: 'component',
        search: query
      },
      {
        field: 'sellername',
        search: query
      }
    ], false); 
    
  }
}
