import { Routes } from '@angular/router';
import { PortadaComponent } from './componentes/portada/portada.component';
import { ErrorComponent } from './componentes/error/error.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { CafesMundoComponent } from './componentes/cafes-mundo/cafes-mundo.component';
import { TiposCafeComponent } from './componentes/tipos-cafe/tipos-cafe.component';
import { CafeComponent } from './componentes/cafe/cafe.component';

export const routes: Routes = [

    {
        path: "",
    component: LoginComponent
    },
    {
        path: "index",
    component: PortadaComponent  
    },
    {
        path: "cafeterias",
        component: CafesMundoComponent
    },
    {
        path: "tipos_de_cafe",
        component: TiposCafeComponent
    },
    
    {
        path: "sobre_nosotros",
        component:SobreNosotrosComponent
    },
    {
        path: "tipos_de_cafe/:id",
        component:CafeComponent
    },

   
    {
        path:"**",
        component: ErrorComponent
    }


];
