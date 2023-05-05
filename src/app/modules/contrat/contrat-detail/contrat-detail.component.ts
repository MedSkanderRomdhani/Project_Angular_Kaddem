import {Component, OnInit} from '@angular/core';
import {ContratService} from "../../../shared/services/contrat.service";
import {ActivatedRoute} from "@angular/router";
import {Contrat} from "../../../shared/models/contrat";
import {Observable} from "rxjs";

@Component({
  selector: 'app-contrat-detail',
  templateUrl: './contrat-detail.component.html',
  styleUrls: ['./contrat-detail.component.css']
})
export class ContratDetailComponent implements OnInit {
  id: number;
  contrat: Contrat;

  constructor(private service: ContratService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.id = Number(data.get('id'));
      this.service.getContratById(this.id).subscribe(data => this.contrat = data);
    });
    // this.service.getContratById(this.id).subscribe(data => this.contrat = data);
  }

}
