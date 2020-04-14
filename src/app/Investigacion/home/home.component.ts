import { Component, OnInit } from '@angular/core';
import { InvestigacionService } from '../Servicios/investigacion.service';
import { Router } from '@angular/router';
import *  as  from '';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allProject: any = []
  fecha
  fechaI
  allGroup: any = []
  allBook: any = []
  allArticle: any = []
  allConvenio: any = []
  
  constructor(private service: InvestigacionService, private route: Router) { }

  ngOnInit() {
    this.service.countProjecInvestigaction().subscribe(data => {
      this.allProject = data
    })
    this.countGroup();
    this.countArticle();
    this.countBook();
    this.countConvenio();
  }
  detailProject(i) {
    this.route.navigate(['proyectoInvestigacion', this.allProject[i]._id])
  }
  countGroup() {
    this.service.countGroupInvestigaction().subscribe(data => {
      this.allGroup = data
    })
  }
  countBook() {
    this.service.countBook().subscribe(data => {
      this.allBook = data
    })
  }
  countArticle() {
    this.service.countArticle().subscribe(data => {
      this.allArticle = data
    })
  }
  countConvenio() {
    this.service.countConvenio().subscribe(data => {
      this.allConvenio = data
    })
  }

}
