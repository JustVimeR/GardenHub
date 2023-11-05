import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

const profileSettingsRoutes = [
  {path: '', component: ProfileSettingsComponent}
]

@NgModule({
  declarations: [
    ProfileSettingsComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(profileSettingsRoutes),
        SharedModule
    ]
})
export class ProfileSettingsModule { }