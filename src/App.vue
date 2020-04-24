<template>
  <div>
    <b-card title="Verkeersinformatie" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item active>Wegen</b-nav-item>
          <b-nav-item>Files</b-nav-item>
          <b-nav-item>Werkzaamheden</b-nav-item>
          <b-nav-item disabled>Flitsers</b-nav-item>
        </b-nav>
      </b-card-header>
      <b-card-body>
        <b-card-text>
          <Roadlist />
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import './assets/overall_style.scss';

import Roadlist from "./components/RoadList";

export default {
  name: 'App',
  components: {
    Roadlist
  }
}
</script>

<style>
</style>
