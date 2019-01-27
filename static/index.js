Vue.component('toggle-card', {
    props: ['title', 'content'],
    template: `<v-layout>
    <v-dialog v-model="displayToggle">
        <v-card class="card">
            <v-card-title class="headline">{{title}}</v-card-title>
            <v-card-text>
                {{content}}
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat="flat" @click="displayToggle = false">
                    OK
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-layout>`,
    data: function () {
        return {
            displayToggle: true,
        }
    }
})

Vue.component('card2', {
    props: ['title', 'content'],
    template: `<v-layout>
    <v-flex sm12 offset-sm0>
        <v-card class="card">
            <v-card-title>
                <h4>{{title}}</h4>
            </v-card-title>
            {{content}}
            {{this.$parent.val}}
        </v-card>
    </v-flex>
</v-layout>`,
    data: function () {
        return {}
    }
})

new Vue({
    el: '#app',
    data() {
        return {
            nam: "TEXT",
            val: 1,
            card: true,
            card2: true,
            fromC: ''
        }
    },
    methods: {}

});