<template>
  <q-page
    padding
    class="flex flex-center text-center"
  >
    <q-spinner
      size="lg"
      color="primary"
      v-if="indexing"
    />
    <pre>{{ trainings }}</pre>
    <q-page-sticky
      position="bottom-right"
      :offset="[22,22]">
      <q-btn
      :loading="creating"
      fab
      color="primary"
      icon="add"
      @click="create()">

      </q-btn>
    </q-page-sticky>
  </q-page>
</template>

<script setup>
import Training from 'models/Training'
import { useModelCollection, useModelApi } from '@vuemodel/supabase'

const { index, collection: trainings, indexing } = useModelCollection(Training);
index()

const { create, creating } = useModelApi(Training)
</script>
