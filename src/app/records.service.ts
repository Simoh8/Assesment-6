import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
 
 Todo: string[]=[]

  getTodo(){
    return this.Todo
  }
  addinformation(info:any){

    this.Todo.push(info)
    return this.Todo
  }
}
