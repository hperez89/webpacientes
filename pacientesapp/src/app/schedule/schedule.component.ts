import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Horas } from '../models/horas.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  modoreserva:boolean = true; //true es precencial false es remota
  fechareserva = new FormControl<Date | null>(null);
  minDate:Date = new Date();
  horasdiponibles:Horas[]=[
    {id: 9, hora: "9:00"},
    {id: 10, hora: "10:00"},
    {id: 11, hora: "11:00"},
    {id: 12, hora: "12:00"},
    {id: 13, hora: "13:00"},
    {id: 14, hora: "14:00"},
    {id: 15, hora: "15:00"},
    {id: 16, hora: "16:00"},
    {id: 17, hora: "17:00"},
    {id: 18, hora: "18:00"}
  ]; 
  hourselected:number=0;
  rut:string="";
  nombre:string="";
  apellido:string="";
  mail:string="";

  ChangeModoReserva(estado:boolean){
    this.modoreserva = estado;
  }

  formatorut(){
    this.rut = this.formatRut(this.rut);
  }
  formatRut(rut: string): string {
    // Eliminar puntos y guiones
    let cleanRut = rut.replace(/[^\dkK]/g, '');

    // Separar el dígito verificador
    let body = cleanRut.slice(0, -1);
    let dv = cleanRut.slice(-1);

    // Formatear el cuerpo del RUT
    let formattedBody = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Retornar el RUT formateado
    return `${formattedBody}-${dv}`;
  }
}

