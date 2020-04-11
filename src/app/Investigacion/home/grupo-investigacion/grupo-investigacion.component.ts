import { Component, OnInit } from '@angular/core';
import { GroupInvestigation } from '../../Models/group_investigation';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InvestigacionService } from '../../Servicios/investigacion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';

@Component({
  selector: 'app-grupo-investigacion',
  templateUrl: './grupo-investigacion.component.html',
  styleUrls: ['./grupo-investigacion.component.css']
})
export class GrupoInvestigacionComponent implements OnInit {
  Group: GroupInvestigation = {
    _id: null,
    name: "",
    create_date: null,
    menbers: [{}],
    linea_investigacion: "",
    project_generados: [{}]
  }
  groupInvestigation: any = []
  users: any = []
  form_groupIn: FormGroup;
  updateGroups: any = []
  projects_generados: any = []
  constructor(private form: FormBuilder, private service: InvestigacionService, private snackBar: MatSnackBar) {
    this.form_groupIn = this.form.group({
      _id: null,
      name: "",
      create_date: null,
      menbers: [null],
      linea_investigacion: "",
      project_generados: []
    })
  }

  ngOnInit() {
    this.allUsers()
    this.allGroupInvestigation()
    this.Group.menbers.splice(0, 10)
  }
  GroupInvestigation() {
    if (this.Group._id == null) {
      this.createGroup()
    }
    else {
      this.updateGroup()
    }
  }
  createGroup() {
    this.service.createGroupInvestigation(this.Group).subscribe(data => {
      this.updateGroups = data
      if (this.updateGroups.mensaje == "guardado") {
        this.openSnackBar("Guardado Correctamente");
        this.allGroupInvestigation()
        this.form_groupIn.reset()
        this.Group.menbers.splice(0, 10)
      }
    })
  }
  allUsers() {
    this.service.getUsers().subscribe(data => {
      this.users = data
    })
  }
  allGroupInvestigation() {
    this.service.allGroupInvestigation().subscribe(data => {
      this.groupInvestigation = data
    })
  }
  integrantes(user) {
    this.Group.menbers.push(user)
  }
  prueba(ia) {
    this.Group.menbers.splice(ia, 1)
  }
  async datos_grupo(grupo) {
    var p_g = {
      _id: grupo
    }
    this.Group = Object.assign({}, grupo)
    this.Group.create_date = moment(grupo.create_date).format("YYYY-MM-DD");
    await this.service.aGroupInvestigation(p_g).subscribe(data => {
      this.projects_generados = data
    })
  }
  updateGroup() {
    this.service.updateGroupInvestigation(this.Group).subscribe(data => {
      this.updateGroups = data
      if (this.updateGroups.nModified === 1) {
        this.openSnackBar("Actualizado Correctamente")
        this.allGroupInvestigation()
        this.form_groupIn.reset()
        this.Group.menbers.splice(0, 10)
      }
    })
  }
  deleteGroup() {
    console.log(this.Group)
    this.service.deleteGroupInvestigation(this.Group).subscribe(data => {
      this.form_groupIn.reset()
      this.Group.menbers.splice(0, 10)
      this.allGroupInvestigation()
    })
  }
  openSnackBar(message) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
}
