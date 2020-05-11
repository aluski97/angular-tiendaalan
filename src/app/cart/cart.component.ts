import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
      this.checkoutForm = this.formBuilder.group({
    nombre: '',
    direccion: '',
    codigo_postal:'',
    telefono:'',
    numero_de_tarjeta:'',
    condiciones:''
    });
  }
  ngOnInit() {
    this.items = this.cartService.getItems();
  }
    onSubmit(customerData) {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    
    window.alert ('Tu pedido se ha procesado correctamente');
  }
}