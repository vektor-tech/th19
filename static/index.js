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

// EXPENSE-CARD
Vue.component('expense-card', {
    props: ['title', 'content'],
    template: `<v-layout>
    <v-flex sm12 offset-sm0>
        <v-card class="card">
            <v-card-title>
                <h1>{{title}}</h1>
            </v-card-title>
            <h2>$ {{this.$parent.expenses}}</h2>
        </v-card>
    </v-flex>
</v-layout>`,
    data: function () {
        return {}
    }
})

// INCOME-CARD
Vue.component('income-card', {
    props: ['title', 'content'],
    template: `<v-layout>
    <v-flex sm12 offset-sm0>
        <v-card class="card">
            <v-card-title>
                <h1>{{title}}</h1>
            </v-card-title>
            <h2>$ {{this.$parent.income}}</h2>
        </v-card>
    </v-flex>
</v-layout>`,
    data: function () {
        return {}
    }
})

// INVESTMENT-CARD
Vue.component('investment-card', {
    props: ['title', 'content'],
    template: `<v-layout>
    <v-flex sm12 offset-sm0>
        <v-card class="card">
            <v-card-title>
                <h1>{{title}}</h1>
            </v-card-title>
            <h2>$ {{this.$parent.investment}}</h2>
        </v-card>
    </v-flex>
</v-layout>`,
    data: function () {
        return {}
    }
})

// BUSINESS-CARD
Vue.component('business-card', {
    props: ['title', 'content'],
    template: `<v-layout>
    <v-flex sm12 offset-sm0>
        <v-card class="card">
            <v-card-title>
                <h1>{{title}}</h1>
            </v-card-title>
            <h2>$ {{this.$parent.business}}</h2>
        </v-card>
    </v-flex>
</v-layout>`,
    data: function () {
        return {}
    }
})

// CASH-CARD
Vue.component('cash-card', {
    props: ['title', 'content'],
    template: `<v-layout>
    <v-flex sm12 offset-sm0>
        <v-card class="card">
            <v-card-title>
                <h1>{{title}}</h1>
            </v-card-title>
            <h2>$ {{this.$parent.cash}}</h2>
        </v-card>
    </v-flex>
</v-layout>`,
    data: function () {
        return {}
    }
})

// NET-WORTH GRAPH
Vue.component('net-worth-graph', {
    props: ['title', 'content'],
    template: `<v-layout>
    <v-flex sm12 offset-sm0>
        <v-card>
            <v-card-title>
                <h2>NET Worth</h2>
            </v-card-title>
            <line-chart :data="this.$parent.lineData"></line-chart>
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
            expenses: 1200,
            income: 2500,
            investment: 80000,
            business: 12000,
            cash: 3100,

            input_expense_toggle: true,

            content: 99,
            lineData: {
                "Current": 0,
                "Retire": 100,
                "Deadd": 10
            }
        }
    },
    methods: {}

});