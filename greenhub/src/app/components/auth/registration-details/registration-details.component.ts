import {Component, ElementRef, EventEmitter, Output, ViewChild, inject} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {ToastrService} from "ngx-toastr";
import StorageService from "../../../services/storage.service";
import { Observable, map, startWith } from 'rxjs';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.scss']
})
export class RegistrationDetailsComponent  extends StorageService{

  user = this.fb.group({
    experience: ['', [Validators.required, Validators.minLength(4)]],
    minPrice: ['', [Validators.required, Validators.minLength(1)]],
    maxPrice: ['', Validators.required, Validators.minLength(1)],
  });
  @Output() registrationServices: EventEmitter<boolean> = new EventEmitter<boolean>();
  hasCode = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  cityCtrl = new FormControl('');
  filteredCities: Observable<string[]> | undefined;
  cities: string[] = ['Київ'];
  allCities: string[] = ['Львів', 'Харків', 'Житомир', 'Івано-Франківськ', 'Рівне'];

  @ViewChild('fruitInput') cityInput: ElementRef<HTMLInputElement> | undefined;

  announcer = inject(LiveAnnouncer);
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    super();

    this.filteredCities = this.cityCtrl.valueChanges.pipe(
      startWith(null),
      map((city: string | null) => (city ? this._filter(city) : this.allCities.slice())),
    );
  }

  goToRegistrationServices(e: Event): void{
    e.preventDefault();
    e.stopPropagation();
    this.registrationServices.emit(true);
  }

  registrationDetails({value, valid}: { value: any, valid: boolean }){
    this.authService.confirmRegistration(value).subscribe(response => {
      this.toastr.success('Зареєстровано');
      this.authService.login(value);
  });

 }

 
 addCity(event: MatChipInputEvent): void {
  const value = (event.value || '').trim();
  if (value) {
    this.cities.push(value);
  }
  event.chipInput!.clear();

  this.cityCtrl.setValue(null);
}

removeCity(city: string): void {
  const index = this.cities.indexOf(city);

  if (index >= 0) {
    this.cities.splice(index, 1);

    this.announcer.announce(`Видалено ${city}`);
  }
}

selectedCity(event: MatAutocompleteSelectedEvent): void {
  this.cities.push(event.option.viewValue);
  if (this.cityInput) {
    this.cityInput.nativeElement.value = '';
  }
  this.cityCtrl.setValue(null);
}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.allCities.filter(city => city.toLowerCase().includes(filterValue));
}
}

