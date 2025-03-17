<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">conduit</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'home' }" exact-active-class="active">Home</router-link>
        </li>
        <!-- 未登录用户显示 -->
        <template v-if="!isAuthenticated">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'login' }" exact-active-class="active">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'register' }" exact-active-class="active">Sign up</router-link>
          </li>
        </template>
        <!-- 已登录用户显示 -->
        <template v-else>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'editor' }" exact-active-class="active">
              <i class="ion-compose"></i>&nbsp;New Article
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'settings' }" exact-active-class="active">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'profile', params: { username: user.username } }" exact-active-class="active">
              <img :src="user.image" class="user-pic" v-if="user.image" />
              {{ user.username }}
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/users';

const userStore = useUserStore();
const { user, isAuthenticated } = storeToRefs(userStore);
</script>
