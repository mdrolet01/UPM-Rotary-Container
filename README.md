# UPM-Rotary-Container

First, you will need an UpSquared Board
Next, connect the GROVEPI shield onto the board
Plug in the Rotary sensor to A0 (Analog pin 0)
Make sure docker engine is installed on your computer
Clone the repository and type in the following:

`cd UPM-Rotary Container` <br>
`cd node-container`<br>
`docker build . -t node-web-server` <br>
`cd ../upm-container` <br>
`docker build . -t upm-data` <br>
`cd ../` <br>
`docker-compose up`
