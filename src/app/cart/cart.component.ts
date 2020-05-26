import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
      clearCart() {
      this.items = this.cartService.clearCart();
      window.alert('Cesta vaciada correctamente');
      }
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
          this.items = this.cartService.getItems();
          if (this.items==0){
            window.alert ('¡La cesta está vacía!');
          } else {
          this.checkoutForm.reset();
          this.items = this.cartService.clearCart();
          window.alert ('Tu pedido se ha procesado correctamente');
          }
      
    
  }
}