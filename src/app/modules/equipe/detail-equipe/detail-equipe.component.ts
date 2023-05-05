import { Component, Input, OnInit } from '@angular/core';
import { DetailEquipe } from 'src/app/shared/models/DetailEquipe';
import { ServiceDetailEquipeService } from 'src/app/shared/services/service-detail-equipe.service';


@Component({
  selector: 'app-detail-equipe',
  templateUrl: './detail-equipe.component.html',
  styleUrls: ['./detail-equipe.component.css']
})
export class DetailEquipeComponent implements OnInit {

  constructor(private sde:ServiceDetailEquipeService) { }

  ngOnInit(): void {
   
  }
  @Input() DetE:DetailEquipe;
  
}
