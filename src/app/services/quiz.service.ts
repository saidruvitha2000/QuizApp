import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      
      
      {id:'data/clanguage.json',name:'C Language'},
      { id: 'data/javascript.json', name: 'JavaScript' },


      { id: 'data/python.json', name: 'Python' }
    ];
  }

}