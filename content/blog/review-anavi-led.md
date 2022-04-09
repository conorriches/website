---
date: "2022-04-09"
title: "Review - Anavi Light Controller"
excerpt: "Open Source Hardware and Software Done Right. Extremely convenient and well built LED lighting controller, but perhaps misses a couple of 'nice to have' features."
---

## Purchase and Review Facts

| Purchase      | Information                                                |
| ------------- | ---------------------------------------------------------- |
| Date Bought   | March 2022                                                 |
| Date Reviewed | April 2022                                                 |
| Sponsored?    | No. No sponsors, gifts, incentives, or request for review. |
| Price I Paid  | £22.80                                                     |
| Rating        | ⭐⭐⭐⭐                                                       |

## Introducing the Anavi Light Controller
The Anavi Light Controller was [recently added to The Pi Hut](https://thepihut.com/products/anavi-light-controller), as an open source hardware project. This means that you not only can buy the thing, but you get all the files you need to make your own version. 

It runs off 12v, and powers 12v non-addressable RGB LED tape, meaning there are three channels for red, green, and blue. The brains is an ESP8266, a mainstay in WiFi boards and familiar to many makers, myself included. This is the same controller as found in NodeMCUs.

![The Anavi LED Lighting Controller - very neat!](https://anavi.technology/images/anavi-light-controller.jpg)

## Hardware
The board is very well made, nicely soldered, but surprisingly bare. You have the ESP8266 itself, three controllers for each channel, a power regulator which converts the 12v input to the 3.3v needed by the ESP8266, and a button and LED. There are also three I2C pin headers for I2C devices, meaning this can play part of a wider system of devices. 

Screw terminals output to the LED tape which is nice, and a barrel jack input which makes plugging it in a breeze.

The one thing I was surprised not to see was the ability to program it via USB, instead you need to connect up a [USB-to-UART converter](https://www.ebay.co.uk/itm/203604196200), which fortunately can be found very cheaply online. Note that the programming pins are male, so you'll want a programmer that comes with female-to-female dupont cables.

![Slightly bare, but has most things you'll need. Plus it's open source, so you're able to make your own based on this.](https://cdn.shopify.com/s/files/1/0176/3274/products/anavi-light-controller-anavi-technology-104856-34120408301763_600x.jpg)

Programming an ESP8266 directly ended up being super easy and actually quite fun, so it's not a major downside at all - if anything I ended up learning something new, and in future instead of choosing a NodeMCU by default, I'll feel confident to just use the ESP8266 itself, and design my own supporting circuitry as needed.

The only thing I missed from the hardware were breakout GPIO pins, as in many of my projects I'd like to have an external button and LED available to me (for example, mounted on an enclosure that the circuit board sits in), but the only way to do this is to tap onto the on board button and LED. Even some pads on the back of the PCB would have assisted with this.

## Software
It's clear that open source is fundamentally important to Anavi products, and this extends wonderfully to the software. The device comes pre-loaded with simple but easy to understand software with MQTT connectivity, so you can get going immediately with internet controllable LED lights while getting familiar with the board.

The [software and documentation](https://github.com/AnaviTechnology/anavi-docs/blob/master/anavi-light-controller/anavi-light-controller.md) is gold-standard, and I found it really easy to get going with. The [article on how to flash your own firmware](https://www.anavi.org/article/220/) was great for me, and it worked perfectly. This in many ways justifies the slightly higher price point - it feels very much like "after sales support" having such a wealth of documentation and examples that are written in Arduino code, so for your average maker it's a breeze, and pleasure to use. Big props to Anavi for doing this so well.

## Summary
A really cool board, embodying everything that is great about open source hardware and software, clearly made with care and done really well. A touch expensive and maybe missing a few features like breakout GPIO pins but it's a great place to start and great to support indie makers and open source hardware. I can really see myself hacking the existing designs to make my own version, further showing the joys of open source hardware.