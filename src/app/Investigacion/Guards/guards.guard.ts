import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/Investigacion/login/login.component';


@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  constructor(private router:Router, private log:LoginComponent){
    
  }
  canActivate(){
    if(this.log.getData()){    
      return true;
    }else{      
      this.router.navigate(['login'])
      return false;
    }
  }  
}
