import { Component, OnInit } from '@angular/core';
import {ProductService}  from '../product.service';
import {Album} from '../album';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  albumInfo:Album;
  ngOnInit()
  {this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);}

  constructor(private _productService:ProductService) { }

  ngOnInit() {
  }

}
