import * as WebSocket from 'ws';  
  
// 创建WebSocket服务器实例  
const wss = new WebSocket.Server({ port: 3080 });  
console.log('进入ws');

// 监听连接事件  
wss.on('connection', (ws) => {  
  console.log('Client connected');  
    
  // 接收客户端消息事件  
  ws.on('message', (message) => {  
    console.log(`Received message: ${message}`);  
    // 广播消息给所有已连接的客户端  
    wss.clients.forEach((client) => {  
      if (client.readyState === WebSocket.OPEN) {  
        client.send(message);  
      }  
    });  
  });  
    
  // 监听关闭连接事件  
  ws.on('close', () => {  
    console.log('Client disconnected');  
  });
  
  //监听错误
  ws.on('error', () => {
    console.log('onerror')
  })
});