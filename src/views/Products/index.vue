<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>
                    Produits
                    <a href="/produits/create" class="btn btn-primary float-end">
                        Add Produit
                    </a>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Titre</th>
                            <th>Description</th>
                            <th>Prix</th>
                            <th>Categorie number</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="this.produits.length > 0">
                        <tr v-for="produit in this.produits">
                            <td>{{ produit.id }}</td>
                            <td>{{ produit.titre }}</td>
                            <td>{{ produit.description }}</td>
                            <td>{{ produit.prix }}</td>
                            <td>{{ produit.id_categorie }}</td>
                            <td>{{ produit.created_at }}</td>
                            <td>
                                <Routlink :to="{ path: '/produits' + produit.id + '/edit' }" class="btn btn-success">
                                    Edit
                                </Routlink>
                                <button type="button" class="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="7">Loading...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'produits',
    data() {
        return {
            produits: []
        }
    },
    mounted() {
        this.getProduits()
    },
    methods: {
        getProduits() {

            axios.get('http://127.0.0.1:8000/api/products').then(response => {
                this.produits = response.data;
            })
                .catch(error => {
                    console.error("Erreur f chargement dyal les données:", error);
                });
        }
    }
}
</script>