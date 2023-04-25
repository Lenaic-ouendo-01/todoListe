<template>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">

    <div class="container">
        <div class="ent">
          <h1 class="texte">Liste des tâches à faire.</h1>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ul v-for="detail in details" v-bind:key="detail.id">
              <li>{{detail.value}}</li>
              <button class="but text-danger" @click="deleteTask(detail.id)">Delete</button>
            </ul>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form action="" class="">
              <h3>Nouvelle Tâche</h3>
              <label for="tache">Entrez le libellé de  la tâche:</label>
              <input type="text" v-model="detail"  @keyup.enter="addTask">
              <button type="button" @click="addTask" class="bg-warning">Add Task</button>
            </form>
          </div>
        </div>
    </div>

    
</template>


<script setup>
import { ref } from 'vue';

    let detail= ""
    let details= ref([{id:1, value:'tache 1'}, {id:2, value:'tache 2'}, {id:3, value:'tache 3'}])

    function deleteTask(id){
        details.value = details.value.filter(
            function(detail){
                return detail.id != id;
            }
        );
    }

    function addTask(){
        details.value.push({id: Date.now(), value: detail})
    }
</script>


<style scoped>

.but{
    border-radius: 5px ;
    background-color: rgba(246, 171, 144, 0.639);
    border-style:dotted ;
}
.ent{
  background: linear-gradient(-90deg, #0458a1,#0c0e3a);
  height: 60px;
  
}
.bg-warning{
    margin: 15px;
}
.texte{
    color: aliceblue;
}
</style>