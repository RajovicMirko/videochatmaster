<template>
  <div id="video-grid">
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
    <div class="video">this is video for roomId: {{ roomId }}</div>
  </div>
</template>

<script>
export default {
  name: "Room",

  computed: {
    roomId() {
      return this.$router.currentRoute.query.roomId;
    },
  },
};
</script>

<style lang="scss">
#video-grid {
  align-self: flex-start;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.video {
  margin: 0.5rem;
  background-color: aqua;
}

@for $i from 1 through 50 {
  .video:first-child:nth-last-child(#{$i}),
  .video:first-child:nth-last-child(#{$i}) ~ .video {
    @if $i == 1 {
      width: 100%;
    } @else if $i <= 4 {
      width: 45%;
      height: 45%;
    } @else if $i <= 9 {
      width: 30%;
      height: 30%;
    } @else {
      width: 300px;
      height: 200px;
    }
  }
}
</style>
