import { Component, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgOptimizedImage} from '@angular/common';
import {Product} from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'storeapp';
  http = inject(HttpClient)
  products: Product[] = []

  changeTitle(){
    this.title = 'changed'
  }

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/users')
      .subscribe((data) => {
        this.products = data
      })
  }
}
