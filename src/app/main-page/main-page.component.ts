import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  products$: Observable<any[]>; // Specify the type of products$
constructor(public productServ: ProductService
  ){}
// Getter method to access productServ
// getProductServ(): ProductService {
//   return this.productServ;
// }
  ngOnInit(){
    this.products$ = this.productServ.getAll()
  }
}
