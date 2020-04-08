import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/users';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InvestigacionService } from '../../Servicios/investigacion.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  User: User = {
    _id:null,
    dni: "",
    names: "",
    password:'',
    email: "",
    gender: "",
    phone: "",
    nroHorasDedicacionSemanal: "",
    titulo: "",
    nivel_educacion: "",
    id_carrer: null,
    linea_investigacion: "",
    orcid: ""
  }
  carreras:any=[]
  user:any=[]
  allUsers:any=[]
  form_user: FormGroup
  private mail: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private form: FormBuilder, private service:InvestigacionService,private snackBar:MatSnackBar) {
    this.form_user = this.form.group({
      _id:null,
      dni:[ "",Validators.required],
      names: ["",Validators.required],
      password:["",Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.mail)]],
      gender:[ "",Validators.required],
      phone:[ "",Validators.required],
      nroHorasDedicacionSemanal: ["",Validators.required],
      titulo: [""],
      nivel_educacion: ["",Validators.required],
      id_carrer:[ null,Validators.required],
      linea_investigacion: ["",Validators.required],
      orcid: ["",Validators.required]
    })
  }

  ngOnInit(): void { 
    this.getCarrers() 
    this.allUser() 
  }
  //obtiene los roles de los usuarios
  getCarrers() {
    this.service.getCarrers().subscribe(data => {
      this.carreras
       = data
       console.log(data)
    })
  }
  //verifica cuando se debe actualizar o agregar usuarios
  newUser() {
    if (this.User._id === null) {
      this.saveUser();    
    } else {
     this.updateUser();      
    }
  }
  //Obtener todos los usuarios
  allUser(){
    this.service.getUsers().subscribe(data=>{
      this.allUsers=data
      console.log(data)
    })
  }
  //Obtener un usuario
  datos_usuario(user: User) {
    this.User = Object.assign({}, user)
  }
  saveUser() {
    this.service.createUsers(this.User).subscribe(data => {
      console.log(data)
      this.user = data
      if (this.user.mensaje == "cedula_yaRegistrada") {
        this.openSnackBar("La identificación  xcccxya existe")
      } else if (this.user.mensaje == "cedula_incorrecta") {
        this.openSnackBar("La cédula ingresada es incorrecta")
      } else if (this.user.mensaje == "guardado") {
        this.openSnackBar('Se ha guardado Correctamente')
        this.allUser();
        this.form_user.reset()       
      }
    })
  }
  updateUser(){
    this.service.updateUser(this.User).subscribe(data=>{
      this.user = data
      if (this.user.mensaje == "cedula_incorrecta") {
        this.openSnackBar("La cédula ingresada es incorrecta")
      } else if (this.user.mensaje == "modificado") {
        this.openSnackBar('Se ha modificado Correctamente')
        this.allUser();
        this.form_user.reset()       
      }
    })
  }
  openModal(){
    this.form_user.reset()
  }
  //delete person
  deleteUser(){
    this.service.deleteUser(this.User).subscribe(data=>{
      this.allUsers=data
      if (this.allUsers.deletedCount == 1) {
        this.openSnackBar('Se ha eliminado Correctamente')
        this.allUser();
      } 
    })
  }
  openSnackBar(message){    
    this.snackBar.open(message,'',{
      duration:2000
    });
  }
  //metodos para el form y validar si un campo esta vacio.
  get email() { return this.form_user.get('email') }

}
