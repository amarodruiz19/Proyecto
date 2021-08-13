import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';


interface tipoRep {
  value: string;
  viewValue: string;
}

interface tipoDepto {
  value: string;
  viewValue: string;
}

interface matrizRep {
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
    {value: 'vacio', viewValue: ''},
    {value: 'incidente', viewValue: 'Incidente'},
    {value: 'riesgo', viewValue: 'Riesgo'},
    {value: 'accidente', viewValue: 'Accidente'}
  ];

  tipoDeptos: tipoDepto[] = [
    {value: 'vacio', viewValue: ''},
    {value: 'deptoFinanciero', viewValue: 'Departamento Financiero'},
    {value: 'deptoRecursosHumanos', viewValue: 'Departamento de Recursos Humanos'},
    {value: 'deptoMarketing', viewValue: 'Departamento de Marketing'},
    {value: 'deptoComercial', viewValue: 'Departamento Comercial'},
    {value: 'deptoCompras', viewValue: 'Departamento de Compras'},
    {value: 'deptoLogistica&Operaciones', viewValue: 'Departamento de Logística y Operaciones'},
    {value: 'deptoControl', viewValue: 'Departamento de Conotrol de Gestión'},
    {value: 'deptoDireccionG', viewValue: 'Dirección General'},
    {value: 'deptoComite', viewValue: 'Comité de Dirección'}
    
  ];

  matrizReps: matrizRep[] = [
    {value: 'vacio', viewValue: ''},
    {value: 'ambiental', viewValue: 'Factor Ambiental'}, 
    {value: 'psicosocial', viewValue: 'Factor Psicosocial'},
    {value: 'publico', viewValue: 'Factor Público'},
    {value: 'biologico', viewValue: 'Factor Biológico'},
    {value: 'fisicoquimico', viewValue: 'Factor Físico-Químico'},
    {value: 'eléctrico', viewValue: 'Factor Eléctrico'},
    {value: 'quimico', viewValue: 'Factor Químico'},
    {value: 'mecanico', viewValue: 'Factor Mecánico'},
    {value: 'ergonomico', viewValue: 'Factor Ergonómico'}
    
  ];
  

  constructor(private fb: FormBuilder,private http: HttpClient) { }
  profileForm = this.fb.group({
    codRep:['',Validators.required],
    codEmp:['',Validators.required],
    fechaRep: ['', Validators.required],
    horaRep: ['', Validators.required],
    asuntoRep: ['', Validators.required],
    descripcionRep: ['', Validators.required],
    tipoDepto: ['', Validators.required],
    ubicacionRep : ['', Validators.required],
/*     idFoto : ['', Validators.required], */
    tipoRep : ['', Validators.required],
    matrizRep : ['', Validators.required]
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
