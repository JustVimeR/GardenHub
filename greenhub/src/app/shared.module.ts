import { AsyncPipe, DatePipe, NgClass, NgFor, NgForOf, NgIf } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ProfileWarningComponent } from "./components/general/profile-warning/profile-warning.component";
import { OrderComponent } from "./components/general/order/order.component";

@NgModule({
    declarations: [
      // COMPONENTS
      ProfileWarningComponent,
      OrderComponent
      // DIRECTIVES
    
      // PIPES
      
    ],
    exports: [
      // COMPONENTS
      ProfileWarningComponent,
      OrderComponent,
      // DIRECTIVES
  
      // PIPES
      
      // MODULES
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatChipsModule,
      NgFor,
      MatIconModule,
      MatAutocompleteModule
    ],
    imports: [
      NgIf,
      NgForOf,
      FormsModule,
      ReactiveFormsModule,
      NgClass,
      MatAutocompleteModule,
      MatIconModule,
      AsyncPipe
    ],
    providers: [DatePipe],
  })
  export class SharedModule {
  }