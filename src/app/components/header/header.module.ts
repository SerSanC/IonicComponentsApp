import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular/';


/**
 * Como vamos tanto a importarlo como exportarlo es necesario hacerlo así, ten en cuenta para un futuro,
 * ten en cuenta que al estar usando los modulos de Ionic es necesario importar IonicModule
 */
@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports:[
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class HeaderModule { }
