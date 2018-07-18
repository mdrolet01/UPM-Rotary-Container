# upm-rotary-http
<h2>This is the HTTP container for sending/receiving sensor data</h2>
First, you will need an UpSquared Board  
Next, connect the GROVEPI shield onto the board  
Plug in the Rotary sensor to A0 (Analog pin 0)  
Make sure docker engine is installed on your computer  
Clone the repository and type in the following:  

`git clone https://github.com/mdrolet01/upm-rotary-http.git` <br>
`cd upm-rotary-http` <br>
`cd node-container`<br>
`docker build . -t node-web-server` <br>
`cd ../upm-container` <br>
`docker build . -t upm-data` <br>
`cd ../` <br>
`docker-compose up`
