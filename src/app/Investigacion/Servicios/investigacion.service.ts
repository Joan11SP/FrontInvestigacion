import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../Models/users';
import { GroupInvestigation } from '../Models/group_investigation';
import { ProjectInvestigation } from '../Models/project_investigation';
import { Login } from '../Models/Login';
import { Seguimiento } from '../Models/seguimineto';
import { Articulo } from '../Models/articulos';
@Injectable({
  providedIn: 'root'
})
export class InvestigacionService {

  //Url = 'https://proyecto-investigacionitsl.herokuapp.com/SistemaInvestigacion/';
  Url = 'http://localhost:3000/SistemaInvestigacion/'
  UrlCountry='http://country.io/names.json'
  constructor(private http:HttpClient) { }
  headers=new HttpHeaders()
  getCarrers(){
    return this.http.get(`${this.Url}allCarrer`);
  }
  createUsers(user:User){
    return this.http.post(`${this.Url}newPerson`,user);
  }
  getUsers(){
    return this.http.get(`${this.Url}allPeople`);
  }
  updateUser(user:User){
    return this.http.post(`${this.Url}updatePerson`,user)
  }
  deleteUser(user:User){
    return this.http.post(`${this.Url}deletePerson`,user)
  }
  createGroupInvestigation(groupIn:GroupInvestigation){
    return this.http.post(`${this.Url}newGroupInvestigation`,groupIn)
  }
  aGroupInvestigation(group){
    return this.http.post(`${this.Url}aGroupInvestigation`,group);
  }
  allGroupInvestigation(){
    return this.http.get(`${this.Url}allGroupInvestigation`);
  }
  updateGroupInvestigation(group:GroupInvestigation){
    return this.http.post(`${this.Url}updateGroupInvestigacion`,group);
  }
  deleteGroupInvestigation(group:GroupInvestigation){
    return this.http.post(`${this.Url}deleteGroupInvestigation`,group);
  }
  createProjectInvestigation(project:ProjectInvestigation){
    return this.http.post(`${this.Url}saveProjectInvestigation`,project);
  }
  allProjectInvestigation(){
    return this.http.get(`${this.Url}allProjectInvestigation`);
  }
  OneProjectInvestigation(project){
    return this.http.post(`${this.Url}oneProjectInvestigation`,project);
  }
  updateProjectInvestigation(project:ProjectInvestigation){
    return this.http.post(`${this.Url}updateProjectInvestigation`,project);
  }
  deleteProjectInvestigation(project:ProjectInvestigation){
    return this.http.post(`${this.Url}deleteProjectInvestigation`,project);
  }
  getLogin(login:Login){
    return this.http.post(`${this.Url}login`,login);
  }
  newSeguimiento(seguir:Seguimiento){
    return this.http.post(`${this.Url}newSeguimientos`,seguir);
  }
  allSeguimiento(){
    return this.http.get(`${this.Url}allSeguimientos`);
  }
  deleteSeguimiento(id){
    return this.http.post(`${this.Url}deleteSeguimientos`,id);
  }
  getCountries(){
    const option={
      'Content-Type':'application/json'
    }
    return this.http.get(`${this.UrlCountry}`,{headers:option})
  }
  createArticle(article:Articulo){
    return this.http.post(`${this.Url}newArticle`,article);
  }
  allArticles(){
    return this.http.get(`${this.Url}allArticle`);
  }
  updateArticles(article:Articulo){
    return this.http.post(`${this.Url}updateArticle`,article);
  }
  deleteArticle(article:Articulo){
    return this.http.post(`${this.Url}deleteArticle`,article);
  }
}
