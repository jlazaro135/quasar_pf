<template>
    <q-header
    class="text-center bg-white text-black"
    >
        <q-toolbar>
            <q-toolbar-title class="text-weight-bold">
                Reservas
            </q-toolbar-title>
        </q-toolbar>
    </q-header>
      <q-tabs
        v-model="tab"
        class="text-grey"
        active-color="purple-9"
        indicator-color="purple-9"
      >
        <q-tab name="reservas" icon="directions_car" label="Como conductor" no-caps />
        <q-tab name="alquileres" icon="local_parking" label="Como propietario" no-caps />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="reservas" class="q-pa-none">
            <q-list>
                <q-item clickable v-ripple class="q-pa-md">
                    <q-item-section>
                        <q-item-label class="text-weight-bold">Calle falsísis isisima 123</q-item-label>
                        <q-item-label class="text-caption">
                            22/02/22 - 24/02/22
                        </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-item-label lines="2" class="bg-warning text-white q-pa-xs rounded-borders">
                            Pendiente de Pago
                        </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="navigate_next" />
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple class="q-pa-md">
                    <q-item-section>
                        <q-item-label class="text-weight-bold">Calle falsísis isisima 123</q-item-label>
                        <q-item-label class="text-caption">
                            13/03/23 - 25/03/23
                        </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-item-label lines="2" class="bg-green text-white q-pa-xs rounded-borders">
                            Confirmada
                        </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="navigate_next" />
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple class="q-pa-md">
                    <q-item-section>
                        <q-item-label class="text-weight-bold">Calle falsísis isisima 123</q-item-label>
                        <q-item-label class="text-caption">
                            13/03/23 - 25/03/23
                        </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="warning" color="warning"></q-icon>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="navigate_next" />
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple class="q-pa-md">
                    <q-item-section>
                        <q-item-label class="text-weight-bold">Calle falsísis isisima 123</q-item-label>
                        <q-item-label class="text-caption">
                            13/03/23 - 25/03/23
                        </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-item-label lines="2" class="bg-red text-white q-pa-xs rounded-borders">
                            Cancelada
                        </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="navigate_next" />
                    </q-item-section>
                </q-item>
            </q-list>
        </q-tab-panel>

        <q-tab-panel name="alquileres">
            <q-list>
                <q-item clickable v-ripple class="q-pa-none q-py-md">
                    <q-item-section>
                        <q-item-label class="text-weight-bold">Calle falsísis isisima 123</q-item-label>
                        <q-item-label class="text-caption">
                            22/02/22 - 24/02/22
                        </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-item-label lines="2" class="bg-warning text-white q-pa-xs rounded-borders">
                            Pendiente de Pago
                        </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="navigate_next" />
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple class="q-pa-none q-py-md">
                    <q-item-section>
                        <q-item-label class="text-weight-bold">Calle falsísis isisima 123</q-item-label>
                        <q-item-label class="text-caption">
                            13/03/23 - 25/03/23
                        </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-item-label lines="2" class="bg-green text-white q-pa-xs rounded-borders">
                            Confirmada
                        </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="navigate_next" />
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple class="q-pa-none q-py-md">
                    <q-item-section>
                        <q-item-label class="text-weight-bold">Calle falsísis isisima 123</q-item-label>
                        <q-item-label class="text-caption">
                            13/03/23 - 25/03/23
                        </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="warning" color="warning"></q-icon>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="navigate_next" />
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple class="q-pa-none q-py-md">
                    <q-item-section>
                        <q-item-label class="text-weight-bold">Calle falsísis isisima 123</q-item-label>
                        <q-item-label class="text-caption">
                            13/03/23 - 25/03/23
                        </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-item-label lines="2" class="bg-red text-white q-pa-xs rounded-borders">
                            Cancelada
                        </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="navigate_next" />
                    </q-item-section>
                </q-item>
            </q-list>
        </q-tab-panel>
      </q-tab-panels>
</template>
    
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('reservas'),
      innerTab: ref('innerMails'),
      splitterModel: ref(20)
    }
  }
}
</script>