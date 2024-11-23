<template>
    <div>
        <h1>Usuarios</h1>
        <div class="columns is-centered mt-5">
            <table  class="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cargo</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ processRole(user.role) }}</td>
                        <td><button class="button is-success">Editar</button> | <button class="button is-danger" @click="shoowModal(user.id)">Deletar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div :class="{modal: true, 'is-active': showModal}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">Você realmente quer deletar esse usuario?</p>
                <button class="delete" aria-label="close" @click="hideModal()"></button>
                </header>
                <section class="modal-card-body">
                    <h1 class="has-text-white">Você realmente quer deletar esse usuario?</h1>
                </section>
                <footer class="modal-card-foot">
                <div class="buttons">
                    <button class="button is-danger" @click="deleteUser()">Sim quero deletar</button>
                    <button class="button" @click="hideModal()">Cancelar</button>
                </div>
                </footer>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                users: [],
                showModal: false,
                deleteUserId: -1
            }
        },
        created() {
            var req = {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }

            axios.get("http://localhost:8686/user",req).then(res => {
                console.log(res)
                this.users = res.data
            }).catch(err => {
                console.log(err)
            })
        },
        methods: {
            processRole(value) {
                if (value == 0) {
                    return "Usuario Comum!"
                } else if(value == 1){
                    return "Admin"
                }
            },
            hideModal() {
                this.showModal = false
            },
            shoowModal(id) {
                this.deleteUserId = id
                this.showModal = true
            },
            deleteUser() {
                var req = {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem('token')
                    }
                }

                axios.delete("http://localhost:8686/user/"+this.deleteUserId, req).then(res => {
                    console.log(res)
                    this.showModal = false

                    axios.get("http://localhost:8686/user",req).then(res => {
                        console.log(res)
                        this.users = res.data
                    }).catch(err => {
                        console.log(err)
                    })
                }).catch(err => {
                    console.log(err)
                    this.showModal = false
                })
            }
        }
    }
</script>

<style scoped>

</style>