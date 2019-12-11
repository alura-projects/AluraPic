import { NgModule } from "@angular/core";
import { Routes, RouterModule, RouterOutlet } from '@angular/router'
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoComponent } from "./photos/photo/photo.component";


const routes: Routes = [
    {
        path: 'user/flavio', 
        component: PhotoListComponent
    },
    {
        path: 'p/add',
        component: PhotoComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}