import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthoptionPage } from '../auth/authoption/authoption.page';
import { ForgetPage } from '../auth/forget/forget.page';
import { SigninPage } from '../auth/signin/signin.page';
import { SignupPage } from '../auth/signup/signup.page';
import { TabsPage } from './tabs.page'; 

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component: AuthoptionPage,
    pathMatch: 'full'
  },
  {
    path: 'authoption',
    component: AuthoptionPage,
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninPage,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupPage,
    pathMatch: 'full'
  },
  {
    path: 'forget',
    component: ForgetPage,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
