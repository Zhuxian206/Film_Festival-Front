<template lang="pug">
#newcard
  router-link(:to='"/neww/" + neww._id')
  b-card(:src="neww.image", img-bottom='')
    b-card-text
      | {{ neww.name }}
</template>

<script>
export default {
  props: {
    neww: {
      type: Object,
      required: true
    }
  }
}
</script>
