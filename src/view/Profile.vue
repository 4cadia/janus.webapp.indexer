<template>
    <div class="profile-main">
        <div class ="card-profile">
            <svg class="icon-account" title="Account" viewBox="0 0 24 24" width="90" height="90" fill="currentcolor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z">
                </path>
                <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
            <ul>
            <li class="data-list" v-for="(item, index) in data" :key="index">
                <p>{{item.value}}</p>
            </li>
            <li>
              <v-score-profile :profile-data="data" ></v-score-profile>
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ScoreProfile from '../components/ScoreProfile';


export default {
  name: 'Profile',
  components: {
    'v-score-profile': ScoreProfile 
  },
  computed: {
    ...mapState({
      //      userID: state => state.profile.userID,
      //      data: state => state.profile.data,

    })
  },
  methods: {},
  data () {
    return {
      userId: 'ba0a0f0f655fc07c59a2b789fe17149f56bf8b2853697b9814de969d6e21abf6',
      data: [
        {'value': 'victoria@janusproj.com'},
        {'value': '+55 11960794437'}
      ]
    }
  }
}
</script>

<style scoped>
    .profile-main{
        display: flex;
        justify-content: center;

    }
    .card-profile{
        width: 30vw;
        background-color: #e0e0e0;
        margin: 5%;
        padding: 3% 0;
    }
    .data-list{
        display: flex;
        justify-content: center;
        padding: 1%;

    }
</style>
