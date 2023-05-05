import { Component, OnInit } from '@angular/core';
import { DetailEquipe } from 'src/app/shared/models/DetailEquipe';
import { Equipe } from 'src/app/shared/models/equipe';
import { ServiceDetailEquipeService } from 'src/app/shared/services/service-detail-equipe.service';
import { ServiceEquipeService } from 'src/app/shared/services/service-equipe.service';

@Component({
  selector: 'app-listeequipe',
  templateUrl: './listeequipe.component.html',
  styleUrls: ['./listeequipe.component.css']
})
export class ListeequipeComponent implements OnInit {
  listEquipe: Equipe[];
  equipe: Equipe;
  de:DetailEquipe=new DetailEquipe();

  nb:number;
  constructor(private SE: ServiceEquipeService, private sde: ServiceDetailEquipeService) {

  }

  ngOnInit(): void {
    this.SE.getAllEquipe().subscribe(data => this.listEquipe = data);


  }
  delete(id: number) {
    this.SE.deleteEquipe(id).subscribe(() => this.SE.getAllEquipe().subscribe(data => this.listEquipe = data));
  }
  update(equipe: Equipe) {
    this.SE.updateEquipe(equipe).subscribe();
  }

  detail(id: number) {
    this.SE.detailEquipe(id).subscribe();
  }
  OngetDetailEquipe(id: number) {
    this.sde.getDetailEquipe(id).subscribe(data =>this.de = data);
  }
  countEtudiants(id:number){


    this.SE.countEtudiantsparEquipe(id).subscribe(data=>this.nb=data);

  }

}
