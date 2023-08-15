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
constructor(private productServ: ProductService
  ){}

  ngOnInit(){
    this.products$ = this.productServ.getAll()
  }
}
