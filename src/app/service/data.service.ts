import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get('http://localhost:8000/api/orders');
  }

  insertData(data: any) {
    return this.httpClient.post('http://localhost:8000/api/orders', data);
  }

  deleteData(id: any) {
    return this.httpClient.delete('http://localhost:8000/api/orders/'+id);
  }
  
  getOrderById(id: any) {
    return this.httpClient.get('http://localhost:8000/api/orders/'+id);
  }

  updateData(id: any, data: any) {
    return this.httpClient.put('http://localhost:8000/api/orders/'+id, data);
  }

  getProducts() {
    return this.httpClient.get('http://localhost:8000/api/products');
  }

  addProduct(id: any, data: any) {
    return this.httpClient.post('http://localhost:8000/api/orders/addProduct/'+id, data);
  }
}
