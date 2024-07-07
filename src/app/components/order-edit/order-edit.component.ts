import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrl: './order-edit.component.css'
})
export class OrderEditComponent implements OnInit {
  id: any;
  data: any;
  products: any;

  constructor (private route:ActivatedRoute, private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.dataService.getOrderById(this.id).subscribe((res:any )=> {
      console.log(res);
      this.data = res;
    });
  }

  updateOrder() {
    var inputData = {
      name: this.data[0].name,
      description: this.data[0].description,
      date: this.data[0].date,
    }

    this.dataService.updateData(this.id, inputData).subscribe({
      next: (res:any) => {
        console.log(res);
        this.router.navigate([''])
      }
    });
  }
}
