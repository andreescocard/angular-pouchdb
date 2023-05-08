import "./global-fix";

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import PouchDB from 'pouchdb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  pouchdb: any;
  title = 'angular-pouchdb';
  pouchform: any;

  constructor(private formBuilder: FormBuilder) {


    this.pouchdb = new PouchDB("pouchform");

    this.pouchform = new FormGroup({
      name: new FormControl(''),
      emailid: new FormControl('')
    });

    
    
  }

  saveForm() {
    var pouchformData = {
      _id: new Date().toISOString(),
      name: this.pouchform.value.name,
      emailid: this.pouchform.value.emailid
    }
    this.pouchdb.put(pouchformData, function (result: any, error: any) {
      if (error.ok) {
        alert("Pouch form saved successfully")
      }
    })
    this.pouchform.reset();
  }


  info() {
    this.pouchdb.info().then(function (info: any) {
      console.log(info);
    })
  }

  export() {
    this.pouchdb.allDocs({
      include_docs: true,
      attachments: true
    }).then(function (result: any) {
      console.log(result)
    }).catch(function (err: any) {
      console.log(err);
    });
  }
  

  
}
