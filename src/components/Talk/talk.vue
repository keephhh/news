<template lang="html">
  <div class="container">
    <div class="chat">
      <div v-for="(item, index) in messageList">
              <div class="group" v-if="item.type === 2">
                  <div class="center">
                      <div class="jiqi">
                        <img class="avatar" src="../../pic/avatar.jpg" alt="">
                        <div class="user1">牧码人</div>
                      </div>
                      <div class="text1"><span class="horn">{{item.msg}}</span></div>
                  </div>
                  <br style="clear: both;"/>
              </div>
              <div class="sending" v-if="item.type === 3">
                  <div class="right">
                      <div class="person">
                        <div class="user2">keephhh</div>
                        <img class="avatar" src="../../pic/avatar2.jpg" alt="">
                      </div>
                      <div class="text2"><span class="horn">{{item.msg}}</span></div>
                  </div>
                  <br style="clear: both;"/>
              </div>
          </div>
    </div>
    <div class="send">
      <i class="icon-yuyin"></i>
      <input type="text" @keyup.enter="send" v-model="value" class="input">
      <button  @click="send">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      messageList: [{
       type: 2 ,
       msg: '你们喜欢用掘金分享技术吗？'
     }]
    }
  },
  mounted () {
  this.$store.commit('details', {data: '智能聊天室', fa: false, fb: true, fc: false})
  this.$store.commit('hidfooter', false)

  socket.on('receiveGroupMsg', (value) => {
      this.messageList.push(
        {type: 2, msg: value}
      );
  })
},
  methods: {
    send () {
      if (this.value === '') {
        return;
      } else {
        socket.emit('sendGroupMsg', this.value.trim());
        this.messageList.push({
          type: 3,
          msg: this.value.trim()
        })
        this.value = ''
      }
    },
    scroll () {
    this.$refs.scroll.scrollTop = this.$refs.scroll.scrollHeight;
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../common/style/talk.scss";
</style>
