<template>
    <div>
        <h1>Registro de usuario</h1>
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
                <label for="">Senha:</label>
                <input type="password" placeholder="Senha" class="input" v-model="password">
                <br>
                <button class="button is-success" @click="register()">Cadastrar</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                name: '',
                password: '',
                email: '',
                error: undefined
            }
        },
        methods: {
                register() {
                    axios.post("http://localhost:8686/user", {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    }).then(res => {
                        console.log(res.data)
                        this.$router.push({name: "home"})
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