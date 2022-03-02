<template lang="pug">
#letterall
  b-card-group(deck='')
    LettersCard( )
    router-link(:to='"/letter/" + letter._id')
  b-card(:src="letter.image", img-bottom='' v-for='(letter, index) in letters' :key='letter._id')
    b-card-text
      | {{ letter.name }}
</template>

<script>
import LettersCard from '../components/LettersCard.vue'

export default {
  components: {
    LettersCard
  },
  data () {
    return {
      letters: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/letters')
      this.letters = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '消息取得失敗'
      })
    }
  }
}
</script>
