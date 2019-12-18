import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import {UserInfoComponent} from './user-info/user-info.component';


@NgModule({
    declarations: [
        UserInfoComponent,
        SettingsComponent
    ],
    imports: [

        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: SettingsComponent
            }, {
                path: 'user-info',
                component: UserInfoComponent
            },{
                path: 'settings',
                component: SettingsComponent
            }
        ])

    ]
})
export class UserModule {
}
