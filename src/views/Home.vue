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

          <v-subheader>Rooms</v-subheader>

          <v-list dense v-for="room in rooms" :key="room.id">
            <v-list-item @click.stop="handleEnterRoom(room)">
              <v-list-item-action>
                <v-icon>mdi-message-video</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ room.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container class="fill-height" fluid>
          <router-view :key="forseUpdate" />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    forseUpdate: 0,
    drawer: null,
    drawerRight: null,
    rooms: [
      { id: 1, name: "Room1" },
      { id: 2, name: "Room2" },
      { id: 3, name: "Room3" },
      { id: 4, name: "Room4" },
      { id: 5, name: "Room5" },
      { id: 6, name: "Room6" },
    ],
  }),

  methods: {
    handleLogout() {
      this.$router.push({
        name: "Login",
      });
    },
    handleEnterRoom(room) {
      this.$router.push({
        name: "Room",
        query: {
          roomId: room.id,
        },
      });

      this.forseUpdate += 1;
    },
  },
};
</script>

<style lang="scss"></style>
