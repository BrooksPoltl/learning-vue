<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model = "user.username">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input type="text" class="form-control" v-model = "user.email">
                </div>
                <button class="btn btn-primary" @click = "submit">Submit</button>
                <hr>
                <input type="text" class="form-control" v-model = "node">
                <button class="btn btn-primary" @click = "fetchData"> Get Data</button>
                <br>
                <br>
                <ul class="list-group">
                    <li class="list-group-item" v-for = "(u, index) in users" :key = "index" >{{ u.username }} - {{ u.email }}</li>
                </ul>
                <br>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                user: {
                    username:'',
                    email: ''
                },
                users: [],
                resource: {},
                node: ''
            }
        },
        methods: {
            submit() {
                // this.$http.post('data.json', this.user)
                // .then( res => {
                //         console.log(res);
                //     }, error =>{
                //         console.log(error);
                //     })
                //this.resource.save({},this.user);
                this.resource.saveAlt(this.user);
            },
            fetchData() {
                // this.$http.get('data.json')
                //     .then( res =>{
                //         return res.json();
                    
                //     })
                //     .then(data =>{
                //         console.log(data)     
                //         const resultArr = [];
                //         for(let key in data) {
                //             resultArr.push(data[key]);
                //         }
                //         this.users = resultArr;
                //     });
                this.resource.getData({node: this.node})
                    .then( res =>{
                        return res.json();
                    
                    })
                    .then(data =>{
                        console.log(data)     
                        const resultArr = [];
                        for(let key in data) {
                            resultArr.push(data[key]);
                        }
                        this.users = resultArr;
                    });
            },


        },
        created(){
            const customActions =  {
                saveAlt: {method: 'POST', url: 'alternative.json'},
                getData: {method: 'GET'}
            }
            this.resource = this.$resource('{node}.json', {}, customActions);
        }    
    }
</script>

<style>
</style>
