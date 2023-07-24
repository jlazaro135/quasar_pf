<template>
    <q-header
    class="text-center bg-white text-black"
    >
        <q-toolbar>
            <q-toolbar-title class="text-weight-bold">
                Chat
            </q-toolbar-title>
        </q-toolbar>
    </q-header>
    <q-list bordered separator>
        <q-item clickable v-ripple>
            <q-item-section avatar>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label class="text-weight-bold row ">
                    Nombre conductor
                    <q-icon name="directions_car" class="q-ml-sm"></q-icon>
                </q-item-label>
                <q-item-label caption lines="2" class="text-weight-bold">Calle falsísima 123</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
            <q-item-section avatar>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar3.jpg">
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label class="text-weight-bold row ">
                    Nombre propietario
                    <q-icon name="local_parking" class="q-ml-sm"></q-icon>
                </q-item-label>
                <q-item-label caption lines="2" class="text-weight-bold">Calle falsísima 123</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
            <q-item-section avatar>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label class="text-weight-bold row ">
                    Nombre conductor
                    <q-icon name="local_parking" class="q-ml-sm"></q-icon>
                </q-item-label>
                <q-item-label caption lines="2" class="text-weight-bold">Calle Evergreen Terrace 777</q-item-label>
            </q-item-section>
        </q-item>
    </q-list>
</template>
    
<script setup>  
</script>