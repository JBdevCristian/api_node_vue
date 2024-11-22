<template>
    <div>
        <h1>Login</h1>
        <br>
        <div class="columns is-centered">
            <div class="">
                <div v-if="error != undefined">
                    <div class="notification is-danger">
                        <p>{{ error }}</p>
                    </div>
                </div>
                <label for="">Email:</label>
                <input type="text" placeholder="E-mail" class="input" v-model="email">
                <label for="">Senha:</label>
                <input type="password" placeholder="Senha" class="input" v-model="password">
                <br>
                <button class="button is-success" @click="Login()">Logar</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                password: '',
                email: '',
                error: undefined
            }
        },
        methods: {
            Login() {
                    axios.post("http://localhost:8686/login", {
                        
                        email: this.email,
                        password: this.password
                    
                    }).then(res => {
                        localStorage.setItem('token', res.data.token)
                        this.$router.push({name: "home"})
                    }).catch(err => {
                        var MSGerror = err.response.data.erro
                        this.error = MSGerror;
                    })
            }
        }
    }
</script>

<style escoped>

</style>