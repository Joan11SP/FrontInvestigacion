import { Component, OnInit } from '@angular/core';
import { InvestigacionService } from '../Servicios/investigacion.service';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allProject: any = []
  Project: any = []
  fechaI
  allGroup: any = []
  allBook: any = []
  allArticle: any = []
  allConvenio: any = []

  

  constructor(private service: InvestigacionService, private route: Router) {

  }
  ngOnInit() {
    this.service.countProjecInvestigaction().subscribe(data => {
      this.allProject = data
      let eje = this.allProject.ejecutandose
      let final = this.allProject.finalizado
      let porA = this.allProject.porAprobar
      let apro = this.allProject.aprobado

      //pastel de proyectos de investigacion
      this.Project = new Chart('canvas', {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: [eje, final, porA, apro],
              backgroundColor: ['rgba(255,0,0,0.3)', '#C7F3D5', '#8C9EEC', '#A4CA77'],
              fill: false
            }
          ],
                    
          labels: [
            [eje + ' En ejecución'],
            [final + ' Finalizado'],
            [porA + ' Por Aprobar'],
            [apro + ' Aprobado']
          ]          
        },
        options: {
          legend: {
            
            display: true
          }
        }
      })
    })
    this.countGroup();
    this.countArticle();
    this.countBook();
    this.countConvenio();
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
      console.log(data)
    })
  }

}
