import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
      
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products/');
  }

  getProduct(id: string): Observable<Product>{
    
    return this.http.get<Product>(`http://localhost:3000/products/` + id);
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>('http://localhost:3000/products/', product);
  }

  updateProduct(product: Product, idU: string): Observable<Product>{
    return this.http.patch<Product>('http://localhost:3000/products/'+ idU, product);
  }

  deleteProduct(id: string): Observable<Product>{
    
    return this.http.delete<Product>(`http://localhost:3000/products/` + id);
  }
}
