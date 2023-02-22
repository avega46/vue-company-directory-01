<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { isAuthenticated, logout, user } = useAuth()

const brand = ref (import.meta.env.VITE_APP_NAME)
</script>


<template>
    <nav>
        <div class="wrapper">
            <RouterLink :to="{ name : 'Home' }" class ="brand">
                <span class="brand-title">{{ brand }}</span>
            </RouterLink>
            <div class="menu">
                <p v-show="isAuthenticated" class="px2 py-4">
                    Welcome back 
                    <strong>
                        <i>{{ user?.email }}</i>
                    </strong>
                </p>
                    <div v-if="isAuthenticated">
                    <RouterLink :to="{name: 'Settings'}" href="#" class="menu-item">Settings</RouterLink>
                    <button href="#" class="menu-logout" @click="logout">Logout</button>
                </div>
                <div v-else>
                    <RouterLink :to="{name: 'Login'}" href="#" class="menu-login">Login</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>


<style scoped lang="postcss">
nav {
    @apply flex h-20 bg-slate-500 text-slate-200;

    .wrapper {
        @apply container mx-auto flex w-full items-center justify-between;
    }

    .brand{
        &-title {
            @apply text-2xl font-bold text-amber-500;
        }
    }

    .menu {
        @apply flex gap-2;
        & div {
        @apply py-2;
        }
        &-item {
            @apply rounded-md px-4 py-2 hover:bg-amber-600 hover:text-slate-500;
        }
        &-login {
            @apply rounded-md bg-green-600 px-4 py-2 hover:bg-green-700 hover:text-slate-900;
        }
        &-logout {
            @apply rounded-md bg-blue-600 px-4 py-2 hover:bg-amber-600 hover:text-slate-900;
        }
    }
}
</style>