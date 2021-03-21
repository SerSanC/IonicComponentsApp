import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {
  favorite : boolean = false
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log("clicked")
    this.favorite = !this.favorite //cambiamos el valor del botón
  }
}
