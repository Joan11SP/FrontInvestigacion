import { Component, OnInit } from '@angular/core';
import { InvestigacionService } from '../Servicios/investigacion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allProject:any=[]
  fecha
  fechaI
  constructor(private service:InvestigacionService,private route:Router) { }

  ngOnInit() {
    this.service.allProjectInvestigation().subscribe(data=>{
      this.allProject=data
    })
  }
  detailProject(i){
    this.route.navigate(['proyectoInvestigacion',this.allProject[i]._id])
  }

}
