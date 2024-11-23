<template>
    <div>
        <h1>Edição de usuario</h1>
        <br>
        <div class="columns is-centered">
            <div class="">
                <div v-if="error != undefined">
                    <div class="notification is-danger">
                        <p>{{ error }}</p>
                    </div>
                </div>
                <label for="">Nome:</label>
                <input type="text" placeholder="Nome do Usuario" class="input" v-model="name">
                <label for="">Email:</label>
                <input type="text" placeholder="E-mail" class="input" v-model="email">
                <br>
                <button class="button is-success mt-3" @click="update()">Editar</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        created() {
            var req = {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem('token')
                    }
                }

            axios.get("http://localhost:8686/user/" + this.$route.params.id, req).then(res => {
                this.name = res.data.name;
                this.email = res.data.email;
                this.id = res.data.id;
            }).catch(err => {
                console.log(err.response)
                this.$router.push({name: 'Users'})
            })
        },
        data() {
            return {
                name: '',
                email: '',
                id: -1,
                error: undefined
            }
        },
        methods: {
            update() {
                var req = {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem('token')
                    }
                }

                    axios.put("http://localhost:8686/user", {
                        name: this.name,
                        email: this.email,
                        id: this.id
                    }, req).then(res => {
                        console.log(res.data)
                        this.$router.push({name: "Users"})
                    }).catch(err => {
                        var MSGerror = err.response.data.err
                        this.error = MSGerror;
                    })

                console.log(this.name, this.email, this.password)
            }
        }
    }
</script>

<style escoped>

</style>