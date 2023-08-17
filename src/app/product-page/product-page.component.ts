import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from '../shared/interfaces';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

product$: Observable<Product>; // Specify the type of product$

constructor (private productServ: ProductService,
  private route: ActivatedRoute){
}
  ngOnInit() {
    this.product$ = this.route.params
      .pipe(switchMap(params => {
        return this.productServ.getById(params['id'])
      }))
  }
  addProduct(product) {
    this.productServ.addProduct(product)

  }
}
