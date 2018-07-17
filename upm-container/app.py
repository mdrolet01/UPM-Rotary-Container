#!/usr/bin/env python
from __future__ import print_function
import mraa
import os
import requests
from time import sleep
from upm import pyupm_grove as grove

def main():
    # New knob on AIO pin 0
    mraa.addSubplatform(mraa.GROVEPI,"0")
    knob = grove.GroveRotary(512)


    # Loop indefinitely
    while True:
        # Read values
        abs = knob.abs_value()
        absdeg = knob.abs_deg()
        absrad = knob.abs_rad()

        print("Abs values: %4d" % int(abs) , " raw %4d" % int(absdeg), "deg = %5.2f" % absrad , " rad ", end=' ')
        url = "http://" + os.environ['HTTPServer_URL'] +":"+ os.environ['HTTPServer_PORT']  + "/data"
        payload = "{\"sensor_id\":\"Temperature Sensor\",\"value\":" + str(int(absdeg)) + "}"
        headers = {
            'Content-Type': "application/json",
            'Cache-Control': "no-cache",
            }

        response = requests.request("POST", url, data=payload, headers=headers)
        #Sleep for 0.1 s
        sleep(0.1)

if __name__ == '__main__':
    main()
