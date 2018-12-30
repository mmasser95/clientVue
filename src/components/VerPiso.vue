<template lang="pug">
    h1="{{id}}"
</template>

<script>
import {APIService} from '../APIService';
const apiService = new APIService();

export default {
    name:'VerPiso',
    props:{
        id:String
    },
    methods:{

    }
}
</script>

