import Vue from 'vue'
import Router from 'vue-router';

import Home from '@/components/Home';
import Ver from '@/components/Ver';
import VerPiso from '@/components/VerPiso';
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
            path:'/anadirpiso',
            component: AnadirPiso,
        }
    ],
    linkActiveClass:'active',
    mode:'history'
})