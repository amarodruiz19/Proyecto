import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { FormBuilder } from '@angular/forms'; 
import { Validators } from '@angular/forms'; 
import { FormArray } from '@angular/forms'; 


@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.css']
})
export class RegistrarUsuariosComponent implements OnInit {

  constructor(private fb: FormBuilder,private http: HttpClient) { }
  profileForm = this.fb.group({
    codEmp:['',Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', Validators.required],
    contrasena: ['', Validators.required],
    estado: ['', Validators.required],
    idDepto : ['', Validators.required],
    genero : ['', Validators.required],
    perfil : ['', Validators.required],
    direccion : ['', Validators.required],
    fechaCumple: ['', Validators.required]
  });

  onSubmit (){
    console.warn(this.profileForm.value); 
    this.http.post('http://localhost:8080/api/usuario', 
    this.profileForm.value).subscribe( (response) => console.log(response), (error) => console.log(error) ) 
  }
  ngOnInit(): void {
  }




}
