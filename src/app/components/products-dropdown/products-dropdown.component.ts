import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-products-dropdown',
  templateUrl: './products-dropdown.component.html',
  styleUrl: './products-dropdown.component.css',
})
export class ProductsDropdownComponent {
  products: any;
  e: any;
  selectedValue: any;
  id: any;
  orderId: any;

  constructor (private route:ActivatedRoute, private dataService:DataService) { } // , private router:Router

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((res:any) => {
      this.products = res;
      // console.log(this.products);
    });

    this.orderId = this.route.snapshot.params['id'];
  }

  addProduct() {
    this.dataService.addProduct(this.id, this.orderId).subscribe({
      next: (res:any) => {
        console.log(res);
        console.log('this.id'+this.id);
        console.log("this.orderId:"+this.orderId);
      }
    });
  }
}
