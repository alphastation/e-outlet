import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent {

  orders = []
  pSub: Subscription
  rSub: Subscription


  constructor(
    private orderServ: OrderService
  ) { }

  ngOnInit() {
    this.pSub = this.orderServ.getAll().subscribe( orders => {
      this.orders = orders
    })
  }

  ngOnDesroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }

    if (this.rSub) {
      this.rSub.unsubscribe()
    }
  }

  remove (id) {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      this.rSub = this.orderServ.remove(id).subscribe( () => {
        this.orders = this.orders.filter( order => order.id !== id)
      })
    }

  }
}
