<template>
  <div class="home">
    <!-- layout -->
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawerRight" app clipped right>
        <v-list dense> </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-right color="primary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>VideoChatMaster</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon
          @click.stop="drawerRight = !drawerRight"
        ></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
          <v-list-item @click.stop="handleLogout">
            <v-list-item-action>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- <v-list-item
            v-for="route in this.$router.options.routes"
            :key="route.name"
            link
          >
            <v-list-item-action>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ route.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container class="fill-height" fluid>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    drawer: null,
    drawerRight: null,
  }),

  methods: {
    handleLogout() {
      this.$router.push({
        name: "Login",
      });
    },
  },
};
</script>
