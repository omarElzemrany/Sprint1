import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { timer } from 'rxjs/observable/timer';
import { Timestamp } from 'rxjs';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { AllItemsService } from './all-items.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss'],
  providers:[AllItemsService]
})
export class AllItemsComponent implements OnInit {
  source: LocalDataSource;

  data :any;

  settings =
   {
    actions: { 
      delete: false ,
      edit : false,
      add:false
    } ,
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
      sellername: {
        title: 'Seller Name',
        filter: String,
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

  constructor(private allItemService:AllItemsService) {  }

  ngOnInit() {
      this.allItemService.getAllUserProducts().subscribe(
        (res:any) => {
          this.data = res.data ;
        }
      );
  }

  

  onDeleteConfirm(event):void{

    event.confirm.resolve();

    this.allItemService.deleteAllUserProducts(event.data._id).subscribe();

  }

  onUpdateComfirm(event){
    event.confirm.resolve(event.newData);
    console.log(event.newData._id);
    this.allItemService.updateAllUserProiduct(event.newData._id,event.newData.name,event.newData.price,event.newData.sellername,event.newData.component).subscribe();

  }

  onCreateConfirm(event){
    event.confirm.resolve(event.newData);
    this.allItemService.createAllUserProiduct(event.newData.name,event.newData.price,event.newData.sellername,event.newData.component).subscribe();
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
