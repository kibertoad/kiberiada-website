<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <div class="py-14"/>

      <v-textarea
        name="input-7-1"
        variant="filled"
        label="Code for roasting"
        auto-grow
        v-model="inputSourceCode"
      ></v-textarea>

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            color="primary"
            @click="submitCode"
            min-width="228"
            size="x-large"
            variant="flat"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Submit
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">

import {ref, defineComponent} from "vue";

export default defineComponent({
  components: {},

  setup() {
    const inputSourceCode = ref<string>()

    const submitCode = () => {
      console.log('Fire! '+inputSourceCode.value)
    }

    return {
      inputSourceCode,
      submitCode,
    }
  }
})
</script>
