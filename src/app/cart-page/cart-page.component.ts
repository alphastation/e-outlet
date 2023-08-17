import { ProductService } from 'src/app/shared/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  cartProducts = []
  totalPrice = 0

  constructor(private productServ:ProductService){}


  ngOnInit() {
    this.cartProducts = this.productServ.cartProducts
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += +this.cartProducts[i].price

    }
  }
}
