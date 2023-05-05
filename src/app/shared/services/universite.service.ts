import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Universite} from "../models/universite";
import {Observable} from "rxjs";
import {Departement} from "../models/departement";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  API_URL: string = "http://localhost:8092"

  constructor(private _http: HttpClient) {
  }
  url="http://localhost:8092/Universite/assignUniversiteToDepartement"

  AjouterUniversite(u: Universite): Observable<Universite> {
    return this._http.post<Universite>(this.API_URL + '/Universite/AjouterUniversite', u);
  }

  ModifierUniversite(u: Universite): Observable<Universite> {
    return this._http.put<Universite>(`${this.API_URL}/Universite/ModifierUniversite/`, u);
  }

  AfficherTousLesUniversite(): Observable<Universite []> {
    return this._http.get<Universite []>(this.API_URL + '/Universite/AfficherAllUniversities')

  }

  AfficherUniversiteSpecifique(idUniv: any): Observable<Universite> {
    return this._http.get<Universite>(`${this.API_URL} + '/Universite/AfficherUniversite/ ${idUniv}`)

  }

  SupprimerUniversite(u: Universite): Observable<Universite> {
    return this._http.delete<Universite>(`${this.API_URL}/Universite/DeleteUniversite/${u.idUniv}`)
  }

  NombreDepartementDansUneUniversite(idUniv: any): Observable<number> {
    return this._http.get<number>(`${this.API_URL}/Universite/depParUniv/${idUniv}`)
  }

  NombreEtudiantDansUneUniversite(idUniv: any): Observable<number> {
    return this._http.get<number>(`${this.API_URL}/Universite/depEtudUniv/${idUniv}`)
  }
  AjouterDepartementDansUneUniversite(u: Universite , d : Departement){
    return this._http.get<Universite>(this.url+"/" + u.idUniv+"/"+d.idDepart);
  }
  AjouterDepartementDansUneUniversiteeee(idUniv:number,idDepart:number){
    return this._http.get(`${this.API_URL}/Universite/assignUniversiteToDepartement/${idUniv}/${idDepart}`)
  }
  // AjouterDepartementDansUneUniversite(u: Universite , d : Departement){
  //  return this._http.post<Universite>(this.url+"/" + u.idUniv+"/"+d.idDepart,u,d);
  // }
  // AjouterDepartementDansUneUniversitee(idUniv:number,idDepart:number,d:Departement,u: Universite):Observable<Departement,Universite>{
  //   return this._http.post<Departement,Universite>(this.API_URL+'/Universite/assignUniversiteToDepartement/idUniv/idDepart',d,u);
  // }

  UniversiteParAdresse(u: Universite): Observable<Universite>{
    return this._http.get<Universite>(`${this.API_URL}/Universite/NomUniv/${u.adresse}`);
  }

  UniversiteParAdresse2(x : any): Observable<any [] >{
    return this._http.get<any>(`${this.API_URL}/Universite/NomUnivch/${x}`);
  }

}
