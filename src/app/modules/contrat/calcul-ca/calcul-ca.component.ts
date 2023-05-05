import {Component, OnInit} from '@angular/core';
import {ContratService} from "../../../shared/services/contrat.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-calcul-ca',
  templateUrl: './calcul-ca.component.html',
  styleUrls: ['./calcul-ca.component.css', '../../../../assets/css/bootstrap.min.css', '../../../../assets/css/style.css']
})
export class CalculCAComponent implements OnInit {
  startdate: Date;
  enddate: Date;
  // ca: Observable<Object>;
  chiffre: number;

  constructor(private contratService: ContratService) {
  }

  ngOnInit(): void {
  }

  calculerCA() {
    this.contratService.getChiffreDaffaire(this.startdate, this.enddate).subscribe(value => this.chiffre=value)
  }
}
