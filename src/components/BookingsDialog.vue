<template>
    <q-dialog
        persistent
        maximized
        transition-show="slide-left"
        transition-hide="slide-right"
        >
        <q-card class="bg-white">
            <q-bar class="bg-white">
                <q-btn dense flat icon="navigate_before" v-close-popup>
                Atrás
                </q-btn>
                <q-space />
                <q-icon name="info_outlined" />
            </q-bar>

            <q-card-section>
                <div class="text-h6">Detalles del alquiler</div>
                <div class="row items-center">
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                    </q-avatar>
                    <span class="q-ml-sm text-weight-bold">
                        Nombre propietario
                    </span>
                    <q-space />
                    <q-btn class="text-black" :icon="symOutlinedChat" color="grey-3" round/>
                </div>
                <div class="row items-center q-mt-sm">
                    <q-rating
                        v-model="ratingModel"
                        size="1.5em"
                        icon="star"
                        color="purple-9"
                        class="q-mr-xs"
                    />
                    <span class="text-caption">
                        (5 opiniones)
                    </span>
                    <q-space />
                    <q-btn class="q-pa-none" :ripple="false" flat no-caps label="Ver Opiniones" />
                </div>
                <q-separator />
                <div class="row items-center q-mt-md">
                    <span class="text-weight-bold">
                        Localizador
                    </span>
                    <q-space />
                    <span>
                        #123456
                    </span>
                </div>
                <div class="row items-center q-mt-lg">
                    <span class="text-weight-bold">
                        Estado
                    </span>
                    <q-space />
                    <span>
                        Confirmada
                    </span>
                </div>
                <div class="column q-mt-lg">
                    <span class="text-weight-bold">
                        Fechas
                    </span>
                    <span class="text-grey-8 q-mt-xs text-caption">
                        22/05/23 - 25/05/23
                    </span>
                </div>
                <div class="column q-mt-lg">
                    <span class="text-weight-bold">
                        Precio
                    </span>
                    <span class="text-grey-8 q-mt-xs text-caption">
                        120 €
                    </span>
                </div>
                <div class="row q-mt-lg items-center no-wrap">
                    <div class="column">
                        <span class="text-weight-bold">
                            Dirección de la plaza
                        </span>
                        <span class="text-grey-8 q-mt-xs text-caption">
                            Calle Falsa 123, 28952, Madrid
                        </span>
                    </div>
                    <q-space />
                    <q-btn class="text-black" :icon="symOutlinedAssistantNavigation" color="grey-3" label="Ir" rounded no-caps/>
                </div>
                <div class="row q-mt-lg items-center no-wrap">
                    <div class="column">
                        <span class="text-weight-bold">
                            Permiso de acceso para ZBE
                        </span>
                        <span class="text-grey-8 q-mt-xs text-caption">
                            La dirección está marcada como parte de una Zona de Bajas Emisiones. 
                            El propietario ha realizado la gestión para que la plaza esté asignada a 
                            la matrícula de tu vehículo.
                        </span>
                    </div>
                    <q-space />
                    <q-btn class="text-black" color="grey-3" label="Ver" rounded no-caps/>
                </div>
                <div class="column q-mt-lg">
                    <span class="text-weight-bold">
                        vehículo
                    </span>
                    <span class="text-grey-8 q-mt-xs text-caption">
                        Alfa Romeo año la polca
                    </span>
                </div>
                <div class="column q-mt-lg">
                    <span class="text-weight-bold">
                        Matrícula vehículo
                    </span>
                    <span class="text-grey-8 q-mt-xs text-caption">
                        1234 BBB
                    </span>
                </div>
                <div class="column q-mt-lg">
                    <span class="text-weight-bold">
                        Distintivo ambiental
                    </span>
                    <span class="text-grey-8 q-mt-xs text-caption">
                        Etiqueta C
                    </span>
                </div>
                <div class="row q-mt-lg items-center no-wrap">
                    <div class="column">
                        <span class="text-weight-bold">
                            Dirección de entrega de llaves/mando 
                        </span>
                        <span class="text-grey-8 q-mt-xs text-caption">
                            Calle Falsa 123, 28952, Madrid
                        </span>
                    </div>
                    <q-space />
                    <q-btn class="text-black" :icon="symOutlinedAssistantNavigation" color="grey-3" label="Ir" rounded no-caps/>
                </div>
                <div class="column q-mt-lg">
                    <span class="text-weight-bold">
                        Tamaño de la plaza
                    </span>
                    <span class="text-grey-8 q-mt-xs text-caption">
                        Enorme
                    </span>
                </div>
                <div class="column q-mt-lg">
                    <span class="text-weight-bold">
                        Tipo de acceso
                    </span>
                    <span class="text-grey-8 q-mt-xs text-caption">
                        Automático
                    </span>
                </div>
                <div class="column q-mt-lg">
                    <span class="text-weight-bold">
                       Tipo de plaza 
                    </span>
                    <span class="text-grey-8 q-mt-xs text-caption">
                        Independiente
                    </span>
                </div>
                <div class="column q-mt-lg">
                    <span class="text-weight-bold">
                        Punto de recarga
                    </span>
                    <span class="text-grey-8 q-mt-xs text-caption">
                        No
                    </span>
                </div>
                <div class="column q-mt-lg">
                    <span class="text-weight-bold">
                        Detalles adicionales
                    </span>
                    <span class="text-grey-8 q-mt-xs text-caption">
                        Hay que darle un roce a la columna para una experiencia plena.
                    </span>
                </div>
                <div class="text-center q-mt-lg">
                    <q-btn color="red" flat label="Cancelar Alquiler"/> 
                </div>
            </q-card-section>
        </q-card>   
    </q-dialog>
</template>

<script setup>
import { symOutlinedChat, symOutlinedAssistantNavigation } from '@quasar/extras/material-symbols-outlined'

</script>


