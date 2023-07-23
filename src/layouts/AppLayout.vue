<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <router-view />
        </q-page-container>
        <q-footer class="rounded-black bg-transparent" bordered>
            <q-tabs
                indicator-color="transparent"
                active-color="black"
                class="text-grey bg-white"
                no-caps
            >
                <q-route-tab name="map" icon="map" to="/mapa" lowercase > Mapa</q-route-tab>
                <q-route-tab name="booking" icon="local_parking" to="/reservas" lowercase   > Reservas</q-route-tab>
                <q-route-tab name="chat" icon="chat" to="/chat" lowercase   > Chat</q-route-tab>
                <q-route-tab name="account" icon="person" to="/cuenta" lowercase    > Cuenta</q-route-tab>

            </q-tabs>
        </q-footer>
    </q-layout>
  </template>
  
  <script setup>

  </script>
  