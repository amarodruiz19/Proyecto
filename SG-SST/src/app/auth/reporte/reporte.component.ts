import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';


interface tipoRep {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  tipoReps: tipoRep[] = [
    {value: 'incidente-0', viewValue: ''},
    {value: 'incidente-1', viewValue: 'Incidente'},
    {value: 'riesgo-2', viewValue: 'Riesgo'},
    {value: 'accidente-3', viewValue: 'Accidente'}
  ];

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
/*     idFoto : ['', Validators.required], */
    // tipoRep : ['', Validators.required],
    idMatrizRep : ['', Validators.required]
    });



    /* @Component({
      selector: 'select-overview-example',
      templateUrl: 'select-overview-example.html',
    }) */
/*     export class SelectOverviewExample {

    } */


  onSubmit (){
    console.warn(this.profileForm.value);
    this.http.post('http://localhost:8080/api/reporte',
    this.profileForm.value).subscribe( (response) => console.log(response), (error) => console.log(error) )
  }
  ngOnInit(): void {
  }
}
