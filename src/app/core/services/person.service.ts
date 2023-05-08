import { Injectable } from '@angular/core';

import * as PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private db: any;

  constructor() { 
    this.db = new PouchDB('person');
  }



}
