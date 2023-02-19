import { Component } from '@angular/core';
import { RecordsService } from '../records.service';
import { FormsModule } from '@angular/forms';
import { Todo} from './../Models/Todo'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[RecordsService]
})
export class FormComponent {

todos!:Todo[];

ngOnit(){
  this.todos=[{

    title:'Wash Clothes',
    description:'For the weeekend event',
    startdate: '2/3/44444',
    completed:true
    
  }]
}

}
