import { Component } from '@angular/core';
import {FormControl} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.css'
})
export class FormComponent {

  writtenText = new FormControl('');

  sentenceCount(){
    
    var sentence = this.writtenText.value?.match(/[^.!?]+[.!?]+["']?\s*/g);
    return sentence?.length || 0;
  }

  wordCount(){
    var word = this.writtenText.value?.split(" ").length;
    if(word){
      return word - 1;
    }
    return 0;
  }
  
}
