import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../models/equipe';

@Injectable({
  providedIn: 'root'
})
export class ServiceEquipeService {

  //urlEquipe:string="/api/Equipe";
  urlEquipe:string="http://localhost:8092/Equipe";
  constructor(private http : HttpClient) { }
  
  
  getAllEquipe():Observable<Equipe[]>{
    return this.http.get<Equipe[]>(this.urlEquipe+"/"+"AfficherAllEquipes");
  }
  deleteEquipe(id:number){
    return this.http.delete(this.urlEquipe+"/"+"DeleteEquipe"+"/"+id);
  }
  updateEquipe(equipe:Equipe){
    return this.http.put(this.urlEquipe+"/"+"ModifierEquipe",equipe);
  }
  addEquipe(equipe:Equipe):Observable<Equipe>{
    return this.http.post<Equipe>(this.urlEquipe+"/"+"AjouterEquipe",equipe);
  }
  detailEquipe(id:number){
    return this.http.get(this.urlEquipe+"/"+"affecterDetailsEquipeToEquipe"+"/"+id);
  }
  getEquipe(id:number):Observable< Equipe>{
    return this.http.get<Equipe>(this.urlEquipe+'/AfficherEquipe/'+id);
  }
  countEtudiantsparEquipe(id:number):Observable<number>{
    return this.http.get<number>(this.urlEquipe+"/"+"countEtudiantByEquipe"+"/"+id);
  }
  
}


