# TCP Server in Node.js

## TCP Server 

- Server is an EventEmitter. It can be TCP or IPC based on what it listens to.
- TCP Server has a connectionListener callback that lets you access a socket connection, which is a Subclass of  Duplex Stream. 

- We can define the on "data", "end", "error", etc. events on it, whenever something is written in the internal write buffer - 
A packet is sent through the socket carrying that buffer as data.
- Once a server with a connectionListener is created - We call the listen method, which is basically an endless loop in which your node.js TCP server is constantly listening.
- We define a hostName(IP Address) and a Port number on which the server listens.
- Running the listening method basically means running your server on hostName:PORT, and now it can talk to the world!

## Socket Connection

- A simple sender/ Socket is a Subclass of Duplex Stream, which is connecting to that same host and port. 
- The createConnection method of net module returns a Socket that inherits from Duplex Stream. 
- It returns us a Socket Connection which has a stream to pass data through and an endpoint. 
- First parameter in `net.createConnection` is options in which we can define hostName and PORT to create a connection to. 
- Second parameter is `connectionListener` which access the top level socket connection and can write buffers to it. 
- We create a buffer and write it to the socket. 

## Making sense of it

- On the hostName and PORT our socket is connected to, we just wrote a buffer in the stream of it. 
- The socket sends a packet which along with many things(like headers, src address, dst address, etc.) contains the "data". The buffer we wrote. 
- The TCP Server is already running/ listening on the hostName:PORT. It listens to the "data" event on the socket it receives.
- As of now, we are just printing that data or buffer we get from the write event on the socket. 
