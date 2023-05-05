import {Component, OnInit} from '@angular/core';
import {UniversiteService} from "../../../shared/services/universite.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Universite} from "../../../shared/models/universite";

@Component({
  selector: 'app-universite-form',
  templateUrl: './universite-form.component.html',
  styleUrls: ['./universite-form.component.css']
})
export class UniversiteFormComponent implements OnInit {

  form !: FormGroup;
  universite: Universite = new Universite();
  id !: number;

  constructor(private service: UniversiteService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.id = Number(data.get('id'))
    });

    this.form = new FormGroup({
        nomUniv: new FormControl('', Validators.required),
        adresse: new FormControl('', Validators.required),
      },
    );
  }

  ajouterUniversite() {
    if (this.id == 0) {
      this.service.AjouterUniversite(this.universite).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/universites']);
      });
    } else {
      this.service.ModifierUniversite(this.universite).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/universites']);
      });
    }
  }
  edit (u : Universite){
    this.service.ModifierUniversite(u).subscribe(()=>{
      this.service.AfficherTousLesUniversite();
    });
    this.form.reset();
  }



}

