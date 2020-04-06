import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../Models/users';
import { GroupInvestigation } from '../Models/group_investigation';
import { ProjectInvestigation } from '../Models/project_investigation';
@Injectable({
  providedIn: 'root'
})
export class InvestigacionService {

  Url = 'https://proyecto-investigacionitsl.herokuapp.com/SistemaInvestigacion/';
  constructor(private http:HttpClient) { }

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
    return this.http.post(`${this.Url}newGroupInvestigacion`,groupIn)
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
  OneProjectInvestigation(project:ProjectInvestigation){
    return this.http.post(`${this.Url}oneProjectInvestigation`,project);
  }
  updateProjectInvestigation(project:ProjectInvestigation){
    return this.http.post(`${this.Url}updateProjectInvestigation`,project);
  }
  deleteProjectInvestigation(project:ProjectInvestigation){
    return this.http.post(`${this.Url}deleteProjectInvestigation`,project);
  }
}
