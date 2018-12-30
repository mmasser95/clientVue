import Vue from 'vue'
import Router from 'vue-router';

import Home from '@/components/Home';
import Ver from '@/components/Ver';
import VerPiso from '@/components/VerPiso';

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
        }
    ],
    linkActiveClass:'active',
    mode:'history'
})