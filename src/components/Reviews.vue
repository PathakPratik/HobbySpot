<template>
  <div>
    <b-card style="max-width: 20rem;" class="mb-2">
      <b-card-text>
        <span>{{movieReviews[0].content.slice(0,100)}}</span>
        <span style="display:none;">{{movieReviews[0].content.slice(100,1000)}}</span>
      </b-card-text>
      <b-button variant="primary">Read More</b-button>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
