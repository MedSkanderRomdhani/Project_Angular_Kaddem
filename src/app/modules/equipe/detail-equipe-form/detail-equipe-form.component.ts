import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailEquipe } from 'src/app/shared/models/DetailEquipe';
import { ServiceDetailEquipeService } from 'src/app/shared/services/service-detail-equipe.service';

@Component({
  selector: 'app-detail-equipe-form',
  templateUrl: './detail-equipe-form.component.html',
  styleUrls: ['./detail-equipe-form.component.css']
})
export class DetailEquipeFormComponent implements OnInit {
  form: FormGroup;
  de: DetailEquipe = new DetailEquipe();
  id: any;
  constructor(private sde: ServiceDetailEquipeService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data['idDetailEquipe']
    });
    console.log(this.id);
    this.form = new FormGroup({

      salle: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
      thematique: new FormControl('', Validators.required),


    })
    this.findObject(this.id);
  }
  findObject(id: number) {
    console.log("findobjectavant:" + id)
    if (id) {
      console.log("findobject:" + id)
      this.sde.getDetailEquipeById(id).subscribe(d => {
        this.de.idDetailEquipe = d.idDetailEquipe;
        this.de.salle = d.salle; this.de.thematique = d.thematique
      });
    }
  }
  ajouterDetailEquipe() {
    if (this.id == null) {
      this.sde.addDetailEquipe(this.de).subscribe(() => {
        this.form.reset();
        //this.router.navigate(['/detailEquipe']);
      });
    } else {
      this.sde.updateDetailEquipe(this.de).subscribe();
    }
    this.form.reset();
  }
}
 /*
  ngOnInit(): void {
   this.createForm(new DetailEquipe());
   this.route.paramMap.subscribe(params=>{
     this.id=+params.get('id'); 
     if (this.id){
       //update
       this.sde.getDetailEquipe(this.id).subscribe(
         res=>{
          this.de=res, 
          this.createForm(this.de)}
          )

     }}
     )
     
 }




 createForm(de){
   this.myForm=new FormGroup({
     autres : new FormGroup({
     salle:new FormControl('',[Validators.required,Validators.pattern("[0-9]{*}")]),
     thematique: new FormControl ('',[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z]*")]),
     
     }),
     })
 }


 get myControls(){
   return this.myForm.controls['autres'];
 }

 get salle(){
  return this.myForm.controls['autres'].get('salle');
 }
 get thematique(){

   // console.log (this.myForm.controls['autres.firstName']);
    return this.myForm.controls['thematique'].get('thematique');
   }



onSubmit() {
 this.de.salle=this.myForm.controls['autres'].get('salle').value;
 this.de.thematique=this.myForm.controls['autres'].get('thematique').value;
 if (this.id){
   this.sde.updateDetailEquipe(this.de).subscribe();
   }else{
   this.sde.addDetailEquipe(this.de).subscribe();
  
  }
 
   this.myForm.reset();
   this.router.navigate(['/detailEquipe']);
}

} 
*/
