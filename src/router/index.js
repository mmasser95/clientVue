import Vue from 'vue'
import Router from 'vue-router';

import Home from '@/components/Home';
import Ver from '@/components/Ver';
import VerPiso from '@/components/VerPiso';
import VerInquilino from '@/components/VerInquilino';
import AnadirPiso from '@/components/AnadirPiso';

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
            path:'/anadirpiso',
            component: AnadirPiso,
        }
    ],
    linkActiveClass:'active',
    mode:'history'
})