import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "../app/core/auth/guards/auth.guard";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'account' },
    // { path: 'account', loadChildren: () => import('../app/modules/account/account.module').then(m => m.AccountModule) },
    // { path: 'dashboard', component: DashboardComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
