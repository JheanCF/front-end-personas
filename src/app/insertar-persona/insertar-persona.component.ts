import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // importar FormsModule

@Component({
  selector: 'app-insertar-persona',
  templateUrl: './insertar-persona.component.html',
  styleUrls: ['./insertar-persona.component.css']
})
export class InsertarPersonaComponent {
  constructor(private _router: Router, private _http: HttpClient) { }
  public URL: string = 'http://localhost:3000/registro';
  public nombres: string = '';
  public apellidos: string = '';
  public cedula: string = '';
  public correo: string = '';
  public edad: string = '';
  public genero: string = '';
  public ciudad: string = '';
  public pais: string = '';
  public cursos: string = '';
  public telefono: string = '';
  public fecha_registro: string = '';
  public result:any;

  peticionDatos() {
    const paramert = {
      "nombres": this.nombres,
      "apellidos": this.apellidos,
      "cedula": this.cedula,
      "correo": this.correo,
      "edad": this.edad,
      "genero": this.genero,
      "ciudad": this.ciudad,
      "pais": this.pais,
      "cursos": this.cursos,
      "telefono": this.telefono,
      "fecha_registro": this.fecha_registro
    }
    const headers = new HttpHeaders()
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoianVhbiIsInBhc3N3ZCI6IjEyMzQ1IiwiaWF0IjoxNjc3ODU5OTM3fQ.JlzSRm3Hv3maTDZug-xO-9SuA1hT8nIp8IjqAZc5yu4')
      .set('Content-Type', 'application/json');

    this._http.post<any>(this.URL,paramert, { headers }).subscribe(data => {
      var respuesta=data[0];
      this.result = data[0].response;
      console.log(this.result);
       
    });
    this.volver();
  }

  volver() {
    this._router.navigate(['']);
  }

}
