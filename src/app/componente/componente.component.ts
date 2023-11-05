import { Component } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent {
  public menuItems: {item:string, active:boolean}[] = [];

  constructor() {
    this.menuItems.push( {item: 'Nueva tarea', active: false} );
    this.menuItems.push( {item: 'Mis tareas', active: true} );
  }

  // public setMenuItemAsActive(item: {item:string, active:boolean}): void {
  //   for (let menuItem of this.menuItems){
  //     if (menuItem == item){
  //       menuItem.active = true;
  //     }
  //     else {
  //       menuItem.active = false;
  //     }
  //   }
  // }
  public setMenuItemAsActive(item: number): void {
    for (let x = 0; x<this.menuItems.length; x++){
      if (x == item){
        this.menuItems[x].active = true;
        continue;
      }

      this.menuItems[x].active = false;
    }
  }
}
