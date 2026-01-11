# Disclaimer

The files in this repository are meant as inspiration for others who want to build a keyboard from scratch as well. You can build the keyboard yourself with the files provided here, but be aware that it's not beginner friendly. The MCU is soldered directly onto the PCB, the power connection from the PCB to the XIAO needs to be soldered manually, there is no reset button (you'll need to short GND and RST on the exposed XIAO) and the battery is soldered directly onto the PCB as well. When opening the PCB in KiCAD and running the Design Rule Checker it complains about two not connected components, this is because they have to be soldered manually, and I couldn't figure out how to fix this in KiCAD.
The config makes use of custom footprints, meaning that it won't work with the web version of Ergogen.

# My keyboard journey

 I've used ergonomic keyboards for more than 10 years, both prebuilt ones and keyboards I designed and built myself. I've documented my experience so that others can draw some inspiration from it. Depending on what you're planning to do, different chapters might be of interest to you.

1. [How  it all started: The prebuilt keyboards I used and my experience with them](docs/prebuilt_keyboards.md)
2. [Building my own keyboard from scratch](docs/from_scratch.md)