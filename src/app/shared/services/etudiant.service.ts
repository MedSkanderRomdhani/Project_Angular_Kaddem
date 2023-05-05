import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../models/etudiant';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  
  API_URL:string="http://localhost:8092"
  constructor(private Http:HttpClient) { }

  public getAll(): Observable<Etudiant[]>{
    return this.Http.get<Etudiant[]>(`${this.API_URL}/Etudiant/AfficherAllEtudiants`);
  }

  public saveEtudiant(etudiant: Etudiant): Observable<Etudiant>{
    console.log(etudiant);
    
    return this.Http.post<Etudiant>(`${this.API_URL}/Etudiant/AjouterEtudiant`,etudiant);
  }

  public updateEtudiant(etudiant: Etudiant): Observable<Etudiant>{
    console.log(etudiant);
    
    return this.Http.put<Etudiant>(`${this.API_URL}/Etudiant/ModifierEtudiant`,etudiant);
  }

  public deleteEtudiant(idEtudiant: number): Observable<void>{
    return this.Http.delete<void>(`${this.API_URL}/Etudiant/DeleteEtudiant/${idEtudiant}`);
  }
  public getetudiantbyOption(op : string): Observable<Etudiant[]>{
    return this.Http.get<Etudiant[]>(`${this.API_URL}/Etudiant/EtudiantsByOption/${op}`);
  }

  public sortetudiantbynom(nom : string): Observable<Etudiant[]>{
    return this.Http.get<Etudiant[]>(`${this.API_URL}/Etudiant/getAllOrderByNomEtudiantAsc`);
  }

  public assignEtudiantToDepartement(idDep : number, idEtudiant: number): Observable<Etudiant>{
    return this.Http.put<Etudiant>(`${this.API_URL}/Etudiant/assignEtudiantToDepartement/${idEtudiant}/${idDep}`,{});
  }

  
  
  }

