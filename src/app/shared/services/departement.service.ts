  import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Departement} from '../models/departement';
import { Enseignant } from '../models/enseignant';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API_URL: string = "http://localhost:8092"

  constructor(private _http: HttpClient) {
  }

  addDepartement(d:Departement):Observable<Departement>{
    return this._http.post<Departement>(this.API_URL+'/Departement/AjouterDepartement',d);
  }
  getAllDepartements():Observable<Departement[]> {
    return this._http.get<Departement[]>(`${this.API_URL}/Departement/getAllOrderByNomDepartAsc`)
  }
  deleteDepartement(d:Departement):Observable<Departement>{
    return this._http.delete<Departement>(`${this.API_URL}/Departement/DeleteDepartement/${d.idDepart}`)
  }
  editDepartement(d:Departement){
    return this._http.put(`${this.API_URL}/Departement/ModifierDepartement`, d)
  }
  getDepartementById(idDepart:number):Observable<Departement>{
    return this._http.get<Departement>(`${this.API_URL}/Departement/AfficherDepartement/${idDepart}`)

  }
  getNombreEtudiantByDepart(idDepart:number):Observable<number>{
    return this._http.get<number>(`${this.API_URL}/Etudiant/nombreEtudiantsByDepartement/${idDepart}`)

  }
  getChefDepart(fonction:string,idDepart:number):Observable<Enseignant[]>{
    return this._http.get<Enseignant[]>(`${this.API_URL}/Enseignant/getEnseignant/${fonction}/${idDepart}`)
  }
  getNombreEnseignantByDepart(idDepart:number):Observable<number>{

    return  this._http.get<number>(`${this.API_URL}/Enseignant/nombreEnseignantsByDepartement/${idDepart}`)
  }
  getEnseignantWithMaxSalaryByDepart(fonction:string,idDepart:number):Observable<Enseignant[]>{
    return this._http.get<Enseignant[]>(`${this.API_URL}/Enseignant/getEnseignantWithMaxSalaireByDeptAndFonction/${fonction}/${idDepart}`)
  }
  getSalaireMoyenByDepart(idDepart:number):Observable<number>{
    return this._http.get<number>(`${this.API_URL}/Departement/salaireMoyenParDepartement/${idDepart}`)

  }
  searchDepartementsByNomDepartContains(nom:string):Observable<Departement[]>{
    return this._http.get<Departement[]>(`${this.API_URL}/Departement/getDepartementsByNomDepartContains/${nom}`)

  }
}
