---
layout: page
title: Portfolio
tags: [about, Jekyll, theme, responsive]
modified: 2014-08-08T20:53:07.573882-04:00
comments: true
image:
  feature: sample-image-2.jpg
  credit: WeGraphics
  creditlink: http://wegraphics.net/downloads/free-ultimate-blurred-background-pack/
---

Here you can find some of my personal projects I have completed during my time as a student as well as projects I am currently working on in my free time. Most of these projects can be found on my Github page. 

## Summarize (WIP)

* Program capable of scraping news articles and other reading material and automatically generating a comprehensive summary of the text
* Summarization algorithm written in Python, heavy use of Beautiful Soup library for web scraping and the NLTK library for a variety of language processing operations
* Machine-learning component utilizes MongoDB to archive significant trends and patterns
* [Code hosted on Github](https://github.com/purdoo/Summarize) 

<a markdown="0" href="https://github.com/purdoo/Summarize" class="btn">Github Repo</a>

## Amplifier Control Subsystem GUI
<img src="{{ site.url }}/images/tiva.png" alt="tiva_screen" style="height:260px;"><img src="{{ site.url }}/images/tiva2.png" alt="tiva_screen" style="height:260px;">

* Senior Design project for ECE 49595 (formerly known as ECE 402)
* Programmed a TIVA C Series Microcontroller to provide an interface to control and monitor a complete Hi-Fi sound system
* Designed to be integrated directly into a Power Amplifier Subsystem
  * Responsible for controlling three tonal control and one volume control (digital potentiometers) located directly in the power amplifier circuit 
  * Communicated with digital potentiometers via SPI interface
  * Programmed to monitor external temperature sensor and perform analog to digital signal conversion
* Written primarily in C using Code Composer Studio and the grlib library
* Awarded the Barrett Robinson Design Award at the end of the semester and was recognized as a section leader for my subsystem
 
<a markdown="0" href="https://github.com/purdoo/AmplifierControl" class="btn">Github</a>
