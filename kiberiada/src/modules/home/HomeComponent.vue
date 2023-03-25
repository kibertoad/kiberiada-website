<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img
        contain
        height="300"
        src="@/assets/logo.svg"
      />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Kiberiada</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            to="/code-roaster"
            min-width="164"
            variant="text"
          >
            <v-icon
              icon="mdi-view-dashboard"
              size="large"
              start
            />

            Code Roaster
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            to="/"
            min-width="228"
            size="x-large"
            variant="flat"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Home
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="https://github.com/kibertoad/kiberiada-website"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-account-group"
              size="large"
              start
            />

            Source code
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  //
</script>
