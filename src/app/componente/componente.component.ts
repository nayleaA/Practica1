import { Component } from '@angular/core';

import { Tarea } from './models/tarea.model';
import { MenuItem } from './models/menu-item.model';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent {
  // public menuItems: {item:string, active:boolean}[] = [];
  // Opciones para el menú
  menuItems: MenuItem[] = [];
  // public tareas: {titulo:string, descripcion:string, status:string}[] = [];
  // Lista de tareas guardadas
  tareas: Tarea[] = [];
  // Objeto para agregar tareas
  newTarea: Tarea = {
    titulo: 'l,askdjaslkdhnaskjd', 
    descripcion: '',
    status: 'Pendiente'
  };


  constructor() {
     // let item1: MenuItem = {item: '', active: false};
    // this.menuItems.push(item1);
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

  public agregarTarea( titulo: string, descripcion: string ): void {
    this.newTarea.titulo = titulo;
    this.newTarea.descripcion = descripcion;

    this.tareas.push(this.newTarea);
    this.newTarea = {
      titulo: '',
      descripcion: '',
      status: 'Pendiente'
    }
  }
}
