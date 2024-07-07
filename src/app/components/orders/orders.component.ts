import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Order } from '../../order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders:any;
  order = new Order();
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getOrdersData();
  }

  getOrdersData() {
    this.dataService.getData().subscribe(res => {
      this.orders = res;
    });
  }

  insertData() {
    this.dataService.insertData(this.order).subscribe(res => {
      console.log(res);
      this.getOrdersData();
    })
  }

  deleteData(id: any) {
    this.dataService.deleteData(id).subscribe(res => {
      console.log(res);
      this.getOrdersData();
    })
  }

  showInsert() {
    var x = document.getElementById("insertElement");
    if (x != null) {
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
  }
}
