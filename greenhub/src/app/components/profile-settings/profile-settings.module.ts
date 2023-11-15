import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceTypeComponent } from './service-type/service-type.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';

const profileSettingsRoutes = [
  {path: '', component: ProfileSettingsComponent}
]

@NgModule({
  declarations: [
    ProfileSettingsComponent,
    MainInfoComponent,
    PortfolioComponent,
    ServiceTypeComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(profileSettingsRoutes),
        SharedModule, 
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatTabsModule,
        MatTreeModule,
        MatButtonModule,
        MatIconModule,
    ]
})
export class ProfileSettingsModule { }