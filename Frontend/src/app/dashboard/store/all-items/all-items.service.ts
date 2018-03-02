import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { environment } from '../../../../environments/environment';

@Injectable()
 export class AllItemsService{
     constructor(private httpClient:HttpClient){}
     

     deleteAllUserProducts(Id:object){
      return this.httpClient.delete(environment.apiUrl + 'allUserProducts/deleteProduct/'+ Id);
    }
    
    updateAllUserProiduct(Id:object,name:String,price:Number,sellername:String,component:Number,){
      return this.httpClient.patch(environment.apiUrl + 'allUserProducts/updateProduct/'+ Id,{"name":name,"price":price,"sellername":sellername,"component":component} );
    }

    createAllUserProiduct(name:String,price:Number,sellername:String,component:Number,){
      return this.httpClient.post(environment.apiUrl + '/allUserProducts/createProduct',{"name":name,"price":price,"sellername":sellername,"component":component} );
    }

     getAllUserProducts(){
        return this.httpClient.get(environment.apiUrl + 'allUserProducts/getProducts');
      }
 }