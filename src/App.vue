<script setup>
import { ref } from 'vue'
const menu = ref([
    {
        name: 'Table',
        link: '/',
    },
    { name: 'Form', link: '/form' },
])
const rightDrawerOpen = ref(false)
const toggleRightDrawer = () => {
    rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>

<template>
    <q-layout view="lHr lpR fFf">
        <q-header reveal elevated class="bg-cyan-8 text-white" height-hint="98">
            <q-toolbar>
                <q-btn
                    dense
                    flat
                    round
                    icon="menu"
                    @click="toggleRightDrawer"
                />
                <q-toolbar-title side="right">
                    <q-avatar>
                        <img
                            src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
                        />
                    </q-avatar>
                    Title
                </q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-drawer
            v-model="rightDrawerOpen"
            show-if-above
            side="left"
            class="bg-grey-3"
        >
            <q-list style="min-width: 100px" class="menu-list">
                <q-item v-for="(item, index) in menu" :key="index" clickable>
                    <q-item-section
                        ><router-link
                            style="text-decoration: none"
                            :to="item.link"
                            >{{ item.name }}</router-link
                        ></q-item-section
                    >
                </q-item>
            </q-list>
        </q-drawer>
        <q-page-container>
            <q-page class="q-pa-lg"><router-view /></q-page>
        </q-page-container>
    </q-layout>
</template>
