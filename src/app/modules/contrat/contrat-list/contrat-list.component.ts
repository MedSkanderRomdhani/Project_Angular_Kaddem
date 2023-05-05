import {Component, OnInit} from '@angular/core';
import {ContratService} from "../../../shared/services/contrat.service";
import {ActivatedRoute} from "@angular/router";
import {Contrat} from "../../../shared/models/contrat";
import {Observable} from "rxjs";

@Component({
  selector: 'app-contrat-list',
  templateUrl: './contrat-list.component.html',
  styleUrls: ['./contrat-list.component.css']
})
export class ContratListComponent implements OnInit {
  list!: Contrat[];


  constructor(private service: ContratService) {
  }

  ngOnInit(): void {
    this.service.getAllContrats().subscribe(contrats => {
      this.list = contrats;
    })
  }

  deleteContrat(id: number) {
    this.service.deleteContrat(id).subscribe(() => this.service.getAllContrats().subscribe(data => this.list = data));
  }

  archiverContrat(id: number) {
    this.service.archiverContrat(id).subscribe(() => this.service.getAllContrats().subscribe(data => this.list = data));
  }

}
