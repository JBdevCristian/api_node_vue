<template>
    <div>
        <h1>Usuarios</h1>
        <div>
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
                        <td>{{ user.role }}</td>
                        <td>Ações</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                users: []
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
            console.log("Olá")
        }
    }
</script>

<style scoped>

</style>