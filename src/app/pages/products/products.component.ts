import { Component,inject } from '@angular/core';
import {ProductComponent} from './../../components/product/product.component';
import {HttpClient} from '@angular/common/http';
import {Product} from './../../models/product.model';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  imports:[ ProductComponent,CommonModule],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent {

  http = inject(HttpClient)
  products: Product[] = []

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/users')
      .subscribe((data) => {
        this.products = data
      })
  }
}
