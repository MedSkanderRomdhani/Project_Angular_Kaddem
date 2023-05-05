import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enseignant } from '../models/enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  API_URL:string="http://localhost:8092"
  constructor(private _http:HttpClient) { }

  addEnseignant(ens:any):Observable<Object>{
    return this._http.post<Enseignant>(this.API_URL+'/Enseignant/Ajouter',ens);
  }
  getAllEnseignant():Observable<Enseignant[]> {
    return this._http.get<Enseignant[]>(`${this.API_URL}/Enseignant/AfficherAll`)
  }
  deleteEnseignant(idEns:any){
    return this._http.delete(`${this.API_URL}/Enseignant/Delete/${idEns}`)
  }
  editEnseignant(d:Enseignant){
    return this._http.put(`${this.API_URL}/Enseignant/Modifier`, d)
  }
  getEnseignantById(idEns:number):Observable<Enseignant>{
    return this._http.get<Enseignant>(`${this.API_URL}/Enseignant/Afficher/${idEns}`)

  }
}
