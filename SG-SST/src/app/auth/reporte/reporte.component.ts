import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { FormBuilder } from '@angular/forms'; 
import { Validators } from '@angular/forms'; 
import { FormArray } from '@angular/forms'; 


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  constructor(private fb: FormBuilder,private http: HttpClient) { }
  profileForm = this.fb.group({
    codRep:['',Validators.required],
    codEmp:['',Validators.required],
    fechaRep: ['', Validators.required],
    horaRep: ['', Validators.required],
    asuntoRep: ['', Validators.required],
    descripcionRep: ['', Validators.required],
    idDepto: ['', Validators.required],
    ubicacionRep : ['', Validators.required],
    idFoto : ['', Validators.required],
    idTipoRep : ['', Validators.required],
    idMatrizRep : ['', Validators.required],
    });

  onSubmit (){
    console.warn(this.profileForm.value); 
    this.http.post('http://localhost:8080/api/reporte', 
    this.profileForm.value).subscribe( (response) => console.log(response), (error) => console.log(error) ) 
  }
  ngOnInit(): void {
  }




}
