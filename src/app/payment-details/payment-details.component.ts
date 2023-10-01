import { Component } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent {
  constructor(public service: PaymentDetailService){
    
  }

  ngOnInit(): void{
    this.service.refreshList();
  }
}
