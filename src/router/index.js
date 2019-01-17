import Vue from 'vue'
import Router from 'vue-router';

import Home from '@/components/Home';
import Ver from '@/components/Ver';
import VerPiso from '@/components/VerPiso';
import VerInquilino from '@/components/VerInquilino';
import VerInmueble from '@/components/VerInmueble';
import VerPropietario from '@/components/VerPropietario';
import VerReserva from '@/components/VerReserva';
import AnadirPiso from '@/components/AnadirPiso';
import AnadirInquilino from '@/components/AnadirInquilino';
import AnadirInmueble from '@/components/AnadirInmueble';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/ver',
            component:Ver
        },
        {
            path:'/verpiso/:id',
            component: VerPiso,
            props:true
        },
        {
            path:'/verinquilino/:id',
            component:VerInquilino,
            props:true
        },
        {
            path:'/verinmueble/:id',
            component:VerInmueble,
            props:true
        },
        {
            path:'/verpropietario/:id',
            component:VerPropietario,
            props:true
        },
        {
            path:'/verreserva/:id',
            component:VerReserva,
            props:true
        },
        {
            path:'/anadirpiso',
            component: AnadirPiso,
        },
        {
            path:'/anadirinquilino',
            component: AnadirInquilino
        },
        {
            path:'/anadirinmueble',
            component: AnadirInmueble
        }
    ],
    linkActiveClass:'active',
    mode:'history'
})