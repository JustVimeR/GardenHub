import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import StorageService from 'src/app/services/storage.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent extends StorageService{
  user = this.fb.group({
    firstName: ['', Validators.required],
    lastName:['', Validators.required],
    userName:['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['+380', [Validators.required, Validators.minLength(12)]]
  });

  constructor(private fb: FormBuilder){
    super();
  }

  userProfile({value, valid}: { value: any, valid: boolean }) {
    console.log(valid);
    
   }
}
