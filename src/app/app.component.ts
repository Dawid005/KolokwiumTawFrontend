import { HttpResponse } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './service/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { User } from './interface/user';
import { UserService } from './service/user.service';
import { Product } from './interface/product';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'frontend';
  id ='';
  login = '';
  password = '';
  loginR = '';
  passwordR = '';
  name = '';
  price = 0;
  idU= '';
  nameU = '';
  priceU = 0;
  idD= '';

  private user: User = {
    'login' : 'aaa',
    'password': 'aaa'
  }; 

  private product: Product = {
    "name": "aaa",
    "price": 100
  };

  private productU: Product = {
    "name": "aaa",
    "price": 100
  };
  

  constructor(private productService: ProductService, 
              private userService: UserService) {}
  
  ngOnInit(): void {
    
  }

  onGetProducts(): void{
    this.productService.getProducts().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting products')
    );
  }

  onGetProduct(id:string): void{
    this.productService.getProduct(id).subscribe(
      
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting product')
    );
  }

  onLogin(login: string, password: string): void{
    this.user.login = login;
    this.user.password = password;

    console.log(this.user);
    
    this.userService.login(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('You are logged in')
    );

  }

  
  onRegister(loginR: string, passwordR: string): void{
    this.user.login = loginR;
    this.user.password = passwordR;

    console.log(this.user);
    
    this.userService.register(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('You created an account')
    );

  }

  onLogOut(): void{
    this.userService.logOut().subscribe(
      
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('You are logged out')
    );    
  }

  onAddProduct(name: string, price: number): void{
    this.product.name = name;
    this.product.price = price;

    console.log(this.product);
    
    this.productService.addProduct(this.product).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('You added a product')
    );
  }

  onUpdateProduct(idU: string, nameU: string, priceU: number): void{
    this.productU.name = nameU;
    this.productU.price = priceU;
    console.log(this.productU);
    
    this.productService.updateProduct(this.productU, idU).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('You added a product')
    );
  }

  onDeleteProduct(id:string): void{
    this.productService.deleteProduct(id).subscribe(
      
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done deletting product')
    );
  }

}

