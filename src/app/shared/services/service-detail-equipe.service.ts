import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailEquipe } from '../models/DetailEquipe';

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailEquipeService {
  urlDetailEquipe:string="http://localhost:8092/DetailEquipe";
  constructor(private _http:HttpClient) { }
  getDetailEquipe(id:number):Observable<DetailEquipe>{
    return this._http.get<DetailEquipe>(this.urlDetailEquipe+"/"+"afficherdetailparequipe"+"/"+id);
  }
  addDetailEquipe(de:DetailEquipe):Observable<DetailEquipe>{
    return this._http.post<DetailEquipe>(this.urlDetailEquipe+"/"+"Ajouter",de);
  }
  updateDetailEquipe(de:DetailEquipe):Observable<DetailEquipe>{
    return this._http.put<DetailEquipe>(this.urlDetailEquipe+"/"+"Modifier",de);
  }
  getDetailEquipeById(id:number):Observable<DetailEquipe>{
    return this._http.get<DetailEquipe>(this.urlDetailEquipe+"/Afficher/"+id);
  }
  
}
