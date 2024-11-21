<template>
    <div>
        <h1>Registro de usuario</h1>
        <br>
        <div class="columns is-centered">
            <div class="">
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
    export default {
        data() {
            return {
                name: '',
                password: '',
                email: ''
            }
        },
        methods: {
                register() {
                console.log(this.name, this.email, this.password)
            }
        }
    }
</script>

<style escoped>

</style>