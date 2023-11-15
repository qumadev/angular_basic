import { Component } from '@angular/core';

import {NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'storeapp';


  changeTitle(){
    this.title = 'changed'
  }
}
