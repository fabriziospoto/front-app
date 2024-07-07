import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-order-read',
  templateUrl: './order-read.component.html',
  styleUrl: './order-read.component.css'
})
export class OrderReadComponent {
  id: any;
  data: any;

  constructor (private route:ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.dataService.getOrderById(this.id).subscribe((res:any )=> {
      console.log(res);
      this.data = res;
    });
  }
}
