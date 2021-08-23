import { Component, OnInit } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import{MatDialog} from '@angular/material/dialog';
import{AffichagedialogComponent}from 'src/app/modules/global/dialogs/affichagedialog/affichagedialog.component';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

  constructor(private http: HttpClient,private dialog:MatDialog) { }
  displayedColumns = ['id', 'nom','Relation','actions'];
  dataSource:any;
  persontable:any[];
  ngOnInit(): void {
    this.http.get<any>('http://localhost:8081/api/person/showall').subscribe(
      response =>{this.dataSource=response;this.persontable=response;
      (<HTMLInputElement>document. getElementById("elements")).value=this.persontable.length.toString();
      },err=>{});
  }

  Edit(row){
    let dialogRef = this.dialog.open(AffichagedialogComponent, {
      width: '600px',
      height: '400px',
      data: row
    });
  }
  search(){
    var search=(<HTMLInputElement>document. getElementById("search"))?. value;
    let newtable=[];
    this.persontable.forEach(element => {
      if(element.nom!=null && element.nom?.includes(search)){
        newtable.push(element);
      }
    });
    this.dataSource=newtable;
    (<HTMLInputElement>document. getElementById("elements")).value=newtable.length.toString();
  }

}
export interface Persom {
  id:any
  nom:any;
}
