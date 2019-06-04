<template>
  <div class="content">
    <div v-if="hasExceptions" class="alert alert-danger errors" role="alert" id="alert">
       <button class="alert-link close" @click="handleDismissDanger">x</button>
       <ul class="errors-list">
        <li v-for="(exception, index) in this.exceptions" :key="index">{{ exception }}</li>
      </ul>
      
    </div>
    <form @submit.prevent="handleSubmit" class="form">
      <div class="form_content">
        <div class="form_field">
          <v-file-input
            inputName="file"
            v-model="files"
            ref="inputFile"
            accept=".zip"
          />
        </div>
        <p class="separator">or</p>
        <div class="form_field">
          <v-input
            placeholderTxt="e.g. 0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A"
            inputType="text"
            inputName="hash"
            inputLabel="Content Hash"
            v-model="hash"
            ref="inputHash"
          />
        </div>
        <div class="form_control">
          <button type="submit" class="btn btn--alert" @click="reset()">Cancel</button>
          <button type="submit" class="btn btn--success" @click="save()">Index content</button>
        </div>
      </div>
    </form>
    <div v-if="hasExceptions" class="errors">
      <ul class="errors-list">
        <li v-for="(exception, index) in this.exceptions" :key="index">{{ exception }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input'
import FileInput from '@/components/FileInput'
import Indexer from 'janusndxr'
import IndexRequest from 'janusndxr/dist/src/Domain/Entity/IndexRequest'
import SpiderConfig from 'janusndxr/dist/src/Domain/Entity/SpiderConfig'
import jsonConfig from '@/utils/web3Config.json'
import { mapState } from 'vuex'

const STATUS_INITIAL = 0
const STATUS_SAVING = 1
const STATUS_SUCCESS = 2
const STATUS_FAILED = 3

export default {
  name: 'FormIndexer',
  components: {
    'v-input': Input,
    'v-file-input': FileInput
  },
  data () {
    return {
      attemptSubmit: false,
      exceptions: [],
      hash: '',
      files: []
    }
  },
  computed: {
    hasExceptions: function () {
      return this.exceptions.length > 0
    },
    isInitial () {
      return this.currentStatus === STATUS_INITIAL
    },
    isSaving () {
      return this.currentStatus === STATUS_SAVING
    },
    isSuccess () {
      return this.currentStatus === STATUS_SUCCESS
    },
    isFailed () {
      return this.currentStatus === STATUS_FAILED
    },
    ...mapState({
      account: state => state.web3.account,
      provider: state => state.web3.instance
    })
  },
  methods: {
    handleSubmit (e) {
      this.attemptSubmit = true
      // this.dismissDanger()
    },
    reset () {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL
      this.files = []
      this.uploadError = null
      this.hash = ''
    },
    save () {
      this.exceptions = []
      if (this.files.length === 0 && this.hash === '') {
        this.currentStatus = STATUS_FAILED
        this.exceptions.push('Zip file or Content Hash must be filled!')
        this.showDanger()
        return
      }
      // upload data to the server
      this.currentStatus = STATUS_SAVING
      this.upload()
        .then(x => {
          console(x)
          this.uploadedFiles = [].concat(x)
          this.currentStatus = STATUS_SUCCESS
        })
        .catch(err => {
          this.uploadError = err.response
          this.currentStatus = STATUS_FAILED
        })
    },
    upload () {
      let config = new SpiderConfig()
      config.RpcHost = jsonConfig.EthereumRpcHost
      config.RpcPort = jsonConfig.EthereumRpcPort
      config.ipfsHost = jsonConfig.IpfsRpcHost
      config.ipfsPort = jsonConfig.IpfsRpcPort
      config.indexerSmAbi = jsonConfig.indexerSmAbi
      config.indexerSmAddress = jsonConfig.indexerSmAddress
      config.Web3Provider = this.provider.givenProvider

      let indexRequest = new IndexRequest()
      indexRequest.Address = this.account
      if (this.files.length > 0) {
        indexRequest.Content = this.files[0]
        indexRequest.ContentType = 'zip'
      } else {
        indexRequest.Content = this.hash
        indexRequest.ContentType = 'hash'
      }

      let indexer = new Indexer(config)
      indexer.AddContent(indexRequest, indexResult => {
        debugger
        if (indexResult.Errors) {
          for (let index = 0; index < indexResult.Errors.length; index++) {
            this.exceptions.push(indexResult.Errors[index])
          }
        }
        console.log(this.exceptions)
      })
    },
    handleDismissDanger () {
      this.exceptions = []
      this.dismissDanger()
    },
    dismissDanger () {
      var element = document.getElementById('alert')
      element.classList.toggle('invisible', true)
    },
    showDanger () {
      var element = document.getElementById('alert')
      element.classList.toogle('invisible', false)
    }
  },
  mounted () {
    this.reset()
    this.$on('fileinput', (value) => console.log(value))
  }
}
</script>

<style scoped>
.content {
  max-width: 1024px;
  margin: auto;
}
.form {
  max-width: 60%;
  margin: 0 auto 100px;
}
.form_field {
  position: relative;
}
.form_control {
  text-align: right;
}
.separator::before,
.separator::after {
  content: '';
  height: 1px;
  width: 40%;
  display: inline-block;
  background-color: var(--color-gray);
  position: relative;
  margin: 0 5px;
  vertical-align: middle;
}
.alert {
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all ease-in-out .5s;
}
.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
.alert-link {
  font-weight: 700;
  color: #491217;
}
.invisible {
  opacity: 0;
  padding: 0;
  font-size: 0;
}
.close {
  float: right;
  font-size: 16;
  font-weight: 100%;
  line-height: 1;
  color: red;
  text-shadow: blueviolet;
  opacity: .5;
}
button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
  -webkit-appearance: none;
}
</style>
