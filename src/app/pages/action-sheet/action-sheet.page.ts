import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})

/**
 * El action sheet lo que hace es sacar un mensaje emergente debajo , para ello tiene que ser asincrono
 * por eso la clase async se define en el constructor del metodo para indicar que este metodo va a ser asincrono
 * además usamos el await para asegurarnos de que los eventos se produzcan en el orden de succesión correcta.
 * 
 * Una vez pulsado en un elemento se lanza el handler con la acción que deseemos realizar.
 */
export class ActionSheetPage  implements OnInit {

  constructor(public _actionSheetController: ActionSheetController) {}

  ngOnInit() {
  }

  onClick(){
    this.presentActionSheet()
  }

  async presentActionSheet() {
    const actionSheet = await this._actionSheetController.create({
      header: 'Albums',
      backdropDismiss: false, // Esto hace que el usuario se vea forzado a tener que elegir una opción
      // cssClass: 'my-custom-class', 
        buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash-outline',
        cssClass: 'colorChanged',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share-outline',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle-outline',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel-outline',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
