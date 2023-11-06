import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceTypeComponent } from './service-type/service-type.component';

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
        SharedModule
    ]
})
export class ProfileSettingsModule { }