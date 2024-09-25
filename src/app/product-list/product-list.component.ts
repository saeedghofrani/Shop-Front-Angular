import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'image', 'price', 'discount'];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    // Replace this with your actual product data retrieval
    const products: Product[] = [
      { name: 'Product 1', image: 'url1', price: 10.99, discount: true },
      { name: 'Product 2', image: 'url2', price: 19.99, discount: false },
      // Add more products as needed
    ];
    this.dataSource.data = products;
    this.dataSource.paginator = this.paginator;
  }

}

interface Product {
  name: string;
  image: string;
  price: number;
  discount: boolean;
}