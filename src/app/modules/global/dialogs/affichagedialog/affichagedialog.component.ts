import { Inject,Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import{HttpClient}from '@angular/common/http';

@Component({
  selector: 'app-affichagedialog',
  templateUrl: './affichagedialog.component.html',
  styleUrls: ['./affichagedialog.component.css']
})
export class AffichagedialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private http: HttpClient) { }

  ngOnInit(): void {
    (<HTMLInputElement>document. getElementById("id")). value=this.data.id;
    (<HTMLInputElement>document. getElementById("nom")). value=this.data.nom;
    if(this.data.relation==undefined){
      
    }
    (<HTMLInputElement>document. getElementById("relation")). value=this.data.relation;
  }

  Edit(){
    this.data.relation=(<HTMLInputElement>document. getElementById("relation")). value;
    this.http.put<any>('http://localhost:8081/api/person/update/'+this.data.id,this.data).subscribe(
      response =>{console.log(response);},err=>{});
    }

  }


