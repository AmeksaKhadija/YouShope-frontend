<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Edit products</h4>
            </div>
            <div class="card-body">

                <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                    <li class="mb-0 ms-3" v-for="error in this.errorList">
                        {{ error[0] }}
                    </li>
                </ul>

                <div class="mb-3">
                    <label for="">Titre</label>
                    <input type="text" v-model="model.produit.titre" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Description</label>
                    <input type="text" v-model="model.produit.description" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Prix</label>
                    <input type="text" v-model="model.produit.prix" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Image</label>
                    <input type="text" v-model="model.produit.image" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Categorie</label>
                    <input type="number" v-model="model.produit.id_categorie" class="form-control" />
                </div>
                <div class="mb-3">
                    <button type="button" @click="saveProduit" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'produitsCreate',
    data() {
        return {
            errorList: '',
            model: {
                produit: {
                    titre: '',
                    description: '',
                    prix: '',
                    image: '',
                    id_categorie: null,
                }
            }
        }
    },
    methods: {
        saveProduit() {
            var mythis = this;
            axios.post('http://127.0.0.1:8000/api/products', this.model.produit).then(response => {
                // this.produits = response.data;
                console.log(response.data);
                alert(response.data.message);
                this.model.produit = {
                    titre: '',
                    description: '',
                    prix: '',
                    image: '',
                    id_categorie: ''
                }
                this.errorList = '';
            })
                .catch(function (error) {
                    if (error.response) {

                        if (error.response.status == 422) {
                            mythis.errorList = error.response.data.errors;
                        }
                        // console.log(error.response.data);
                        // console.log(error.response.status);
                        // console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                });
        }
    }
}
</script>