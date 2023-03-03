import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent {
  constructor(private _router: Router, private http: HttpClient) { }

  public peticion: any = '';
  public URL: string = 'http://localhost:3000/leads';
  public personasList: any;
  public error: string='';


  ngOnInit() {
    this.peticionDatos()
  }

  peticionDatos() {
    // const headers = new HttpHeaders()
    //   .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoianVhbiIsInBhc3N3ZCI6IjEyMzQ1IiwiaWF0IjoxNjc3ODU5OTM3fQ.JlzSRm3Hv3maTDZug-xO-9SuA1hT8nIp8IjqAZc5yu4')
    //   .set('Content-Type', 'application/json');

    const opciones = {
      headers: new HttpHeaders({
        'Content-Type':'application/json', 
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoianVhbiIsInBhc3N3ZCI6IjEyMzQ1IiwiaWF0IjoxNjc3ODU5OTM3fQ.JlzSRm3Hv3maTDZug-xO-9SuA1hT8nIp8IjqAZc5yu4'
      })
    };
     // let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoianVhbiIsInBhc3N3ZCI6IjEyMzQ1IiwiaWF0IjoxNjc3ODU5OTM3fQ.JlzSRm3Hv3maTDZug-xO-9SuA1hT8nIp8IjqAZc5yu4'});

this.http.get('http://localhost:3000/leads', opciones ).subscribe(data => {
    console.log(data);
    this.personasList= data ;
    console.log(this.personasList);
    },error =>{
      this.error = error.message;
      console.log(this.error);
    });
  }

  registrarse() {
    this._router.navigate(['/registro']);
  }
}
