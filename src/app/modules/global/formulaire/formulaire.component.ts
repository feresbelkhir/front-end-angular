import { Component, OnInit } from '@angular/core';
import{HttpClient}from '@angular/common/http';

export class person{
  constructor(
    public prenom:any,
    public datenaiss:any,
    public numero_tel1:any,
    public numero_tel2:any,
    public mobile:any,
    public address:any,
    public ville:any,
    public code_postal:any,
    public complement_address:any,
    public mot_cle:any,
    public commentaire:any,
    public nom:any,
    public nombre_enfont:any,
    public email:any,
    public civilite:any,
    public numero_Rue:any,
    public rue:any,
    public situation_Familial:any,
    public pays:any 
      ){
  }
}

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor(private http: HttpClient) { }
  date:any;
  civil:any="Mme";
  Person:person;
  Error_message:any="";
  ngOnInit(): void {
  }

  show_hide_Slider(){
    const Slider=document.querySelector('.slider');
    if(Slider?.classList.contains("hidden")){
      Slider?.classList.remove("hidden");
    }
    else{
      Slider?.classList.add("hidden");
    }
  }

  select_civil(choix){
    const Slider=document.querySelector('.slider');
    if(choix==3){
      (<HTMLInputElement>document. getElementById("Civilite")). value="Mme";
      this.civil="Mme";
      Slider?.classList.add("hidden");
    }
    if(choix==1){
      (<HTMLInputElement>document. getElementById("Civilite")). value="Mlle";
      this.civil="Mlle";
      Slider?.classList.add("hidden");
    }
    if(choix==2){
      (<HTMLInputElement>document. getElementById("Civilite")). value="Mr";
      this.civil="Mr";
      Slider?.classList.add("hidden");
    }

  }

  verify(){


    var prenom=(<HTMLInputElement>document. getElementById("prenom"))?. value;

    var nom=(<HTMLInputElement>document. getElementById("nom"))?. value;
    
    var datenaiss=(<HTMLInputElement>document. getElementById("date"))?. value;

    var situation_Familial=(<HTMLInputElement>document. getElementById("situation"))?. value;

    var nombre_enfont=(<HTMLInputElement>document. getElementById("nb_enfant"))?. value;

    var email=(<HTMLInputElement>document. getElementById("email"))?. value;

    var numero_tel1=(<HTMLInputElement>document. getElementById("phone1"))?. value;

    var numero_tel2=(<HTMLInputElement>document. getElementById("phone2"))?. value;

    var mobile=(<HTMLInputElement>document. getElementById("mobile"))?. value;

    var address=(<HTMLInputElement>document. getElementById("adresse"))?. value;

    var pays=(<HTMLInputElement>document. getElementById("pays"))?. value;

    var ville=(<HTMLInputElement>document. getElementById("ville"))?. value;

    var rue=(<HTMLInputElement>document. getElementById("rue"))?. value;

    var numero_Rue=(<HTMLInputElement>document. getElementById("n_rue"))?. value;

    var code_postal=(<HTMLInputElement>document. getElementById("code_postal"))?. value;

    var complement_address=(<HTMLInputElement>document. getElementById("comp_Adresse"))?. value;

    var mot_cle=(<HTMLInputElement>document. getElementById("mot_cle"))?. value;

    var commentaire=(<HTMLInputElement>document. getElementById("commentaire"))?. value;
    const Error=document.querySelector('.error_box');
    
    var valid=true;
    if(nom==""){
      valid=false;
      this.Error_message="Nom invalide";
      Error?.classList.add("error_show");
      setTimeout(()=>{
        Error?.classList.remove("error_show");
      },2000);
    }
    if(prenom=="" && valid){
      valid=false;
      Error?.classList.add("error_show");
      setTimeout(()=>{
        Error?.classList.remove("error_show");
      },2000);
      this.Error_message="Prenom invalide";
    }
    if(datenaiss=="" && valid){
      valid=false;
      Error?.classList.add("error_show");
      setTimeout(()=>{
        Error?.classList.remove("error_show");
      },2000);
      this.Error_message="Date de naissance invalide";
    }
    if(nombre_enfont=="" && valid){
      valid=false;
      Error?.classList.add("error_show");
      setTimeout(()=>{
        Error?.classList.remove("error_show");
      },2000);
      this.Error_message="Nombre d'enfont invalide";
    }
    if((email=="" && valid)/*||(this.MailExist(email))*/){
      valid=false;
      Error?.classList.add("error_show");
      setTimeout(()=>{
        Error?.classList.remove("error_show");
      },2000);
      this.Error_message="Email invalide";
    }
    if(numero_tel1=="" && valid){
      valid=false;
      Error?.classList.add("error_show");
      setTimeout(()=>{
        Error?.classList.remove("error_show");
      },2000);
      this.Error_message="Numero_tel1 invalide";
    }
    if(address=="" && valid){
      valid=false;
      Error?.classList.add("error_show");
      setTimeout(()=>{
        Error?.classList.remove("error_show");
      },2000);
      this.Error_message="Adresse invalide";
    }
    if(pays=="" && valid){
      valid=false;
      Error?.classList.add("error_show");
      setTimeout(()=>{
        Error?.classList.remove("error_show");
      },2000);
      this.Error_message="Pays invalide";
    }
    if(ville=="" && valid){
      valid=false;
      Error?.classList.add("error_show");
      setTimeout(()=>{
        Error?.classList.remove("error_show");
      },2000);
      this.Error_message="Ville invalide";
    }
    if(rue=="" && valid){
      valid=false;
      Error?.classList.add("error_show");
      setTimeout(()=>{
        Error?.classList.remove("error_show");
      },2000);
      this.Error_message="Rue invalide";
    }
    if(numero_Rue=="" && valid){
      valid=false;
      Error?.classList.add("error_show");
      setTimeout(()=>{
        Error?.classList.remove("error_show");
      },2000);
      this.Error_message="Numero de rue invalide";
    }
    if(code_postal=="" && valid){
      valid=false;
      Error?.classList.add("error_show");
      setTimeout(()=>{
        Error?.classList.remove("error_show");
      },2000);
      this.Error_message="Code postal invalide";
    }
    if(valid){
    this.Person=new person(prenom,datenaiss,numero_tel1,numero_tel2,mobile,address,ville,
      code_postal,complement_address,mot_cle,commentaire,nom,nombre_enfont,email,
      this.civil,numero_Rue,rue,situation_Familial,pays);

    this.http.post<any>('http://localhost:8081/api/person/add',this.Person).subscribe(
      response =>{console.log(response);},err=>{});
    }
       
     

    

  }

  MailExist(email):any{
    this.http.get<any>('http://localhost:8081/api/person/existbymail/'+email).subscribe(
      response =>{return response.exist;console.log(response);},err=>{console.log(err)});
  } 
}
