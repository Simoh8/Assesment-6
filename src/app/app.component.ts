import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assesment6';

  data:{name:string,balance:string,details:string }[]=[]


  addStudent(name:HTMLInputElement,balance:HTMLInputElement,details:HTMLInputElement,desc='Single student'){

    this.data.push({name:name.value,balance:balance.value,details:details.value,})
  }
  deleteStudent(index:number){
    this.data.splice(index,1)
  }
  // updateStudent(index:number){
  //   this.data[index].name=name.value,
  //   this.data[index].balance=balance.value
  //   this.data[index].details=details.value
  // }

}
