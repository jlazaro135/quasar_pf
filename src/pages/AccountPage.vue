<template>
    <q-header
    class="text-center bg-white text-black"
    >
        <q-toolbar>
            <q-toolbar-title class="text-weight-bold">
                Cuenta
            </q-toolbar-title>
        </q-toolbar>
    </q-header>
    <q-list>
        <q-item clickable v-ripple>
            <q-item-section avatar>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label class="text-h5 text-weight-bold">Hola Jesús Lazariopoivh</q-item-label>
                <q-item-label caption lines="2" class="text-weight-bold">Editar perfil</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
            <q-item-section side>
                <q-icon name="local_parking"/>
            </q-item-section>
            <q-item-section>
                <q-item-label>Mis plazas</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-icon name="navigate_next" />
            </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
        <q-item-section side>
            <q-icon name="directions_car" />
        </q-item-section>
        <q-item-section>
            <q-item-label>Mis vehículos</q-item-label>
        </q-item-section>
        <q-item-section side>
            <q-icon name="navigate_next" />
        </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
        <q-item-section side>
            <q-icon name="list_alt" />
        </q-item-section>
        <q-item-section>
            <q-item-label>Histórico</q-item-label>
        </q-item-section>
        <q-item-section side>
            <q-icon name="navigate_next" />
        </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
        <q-item-section side>
            <q-icon name="account_balance_wallet" />
        </q-item-section>
        <q-item-section>
            <q-item-label>Cartera</q-item-label>
        </q-item-section>
        <q-item-section side>
            <q-icon name="navigate_next" />
        </q-item-section>
        </q-item>
        <q-item-label class="text-weight-bold text-black text-h6" header>Notificaciones</q-item-label>
        <q-item clickable v-ripple>
        <q-item-section side>
            <q-icon name="notifications" />
        </q-item-section>
        <q-item-section>
            <q-item-label>Notificaciones móvil</q-item-label>
        </q-item-section>
        <q-item-section side>
            <q-toggle
            v-model="value"
            color="purple"
            />
        </q-item-section>
        </q-item>
        <q-item-label class="text-weight-bold text-black text-h6" header>Ayuda</q-item-label>
        <q-item clickable v-ripple>
            <q-item-section side>
                <q-icon name="forum"/>
            </q-item-section>
            <q-item-section>
                <q-item-label>Contacto</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-icon name="navigate_next" />
            </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
            <q-item-section side>
                <q-icon name="air"/>
            </q-item-section>
            <q-item-section>
                <q-item-label>Zona de bajas emisiones</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-icon name="navigate_next" />
            </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
            <q-item-section side>
                <q-icon name="help"/>
            </q-item-section>
            <q-item-section>
                <q-item-label>Preguntas frecuentes</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-icon name="navigate_next" />
            </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
        <q-item-section side>
            <q-icon name="policy"/>
        </q-item-section>
        <q-item-section>
            <q-item-label>Términos y condiciones</q-item-label>
        </q-item-section>
        <q-item-section side>
            <q-icon name="navigate_next" />
        </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
        <q-item-section side>
            <q-icon name="cancel"/>
        </q-item-section>
        <q-item-section>
            <q-item-label>Política de cancelación</q-item-label>
        </q-item-section>
        <q-item-section side>
            <q-icon name="navigate_next" />
        </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
        <q-item-section side>
            <q-icon name="verified"/>
        </q-item-section>
        <q-item-section>
            <q-item-label>Datos de la aplicación</q-item-label>
        </q-item-section>
        <q-item-section side>
            <q-icon name="navigate_next" />
        </q-item-section>
        </q-item>
    </q-list>
</template>
    
    <script setup>
    </script>