import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../Models/users';
import { GroupInvestigation } from '../Models/group_investigation';
@Injectable({
  providedIn: 'root'
})
export class InvestigacionService {

  Url = 'http://localhost:3000/SistemaInvestigacion/';
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
    return this.http.post(`${this.Url}deleteGroupInvestigacion`,group);
  }
}
