<template>
    <div>
      <h2>WebSocket通信示例</h2>
      <p>当前时间: {{ currentTime }}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      currentTime: ''
    }
  },
  created () {
    // 创建WebSocket连接
    const socket = new WebSocket('ws://localhost:3080')

    // 监听WebSocket的打开事件
    socket.addEventListener('open', () => {
      console.log('WebSocket连接已打开')
    })

    // 监听WebSocket的消息事件
    socket.addEventListener('message', (event) => {
    // 处理接收到的消息
      this.currentTime = event.data
      console.log('接收到的消息:', event.data)
    })

    // 监听WebSocket的关闭事件
    socket.addEventListener('close', () => {
      console.log('WebSocket连接已关闭')
    })
  }
}
</script>
