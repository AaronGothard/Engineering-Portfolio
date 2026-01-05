---
title: "Snake in Python"
excerpt: "A playable arcade version of snake, built from scratch on an arduino in high school"
header:
  image: /assets/img/snake.png
  teaser: /assets/img/snake-game-icon.jpg
skills: ["Python", "Fusion360"]
---

## East Canton High School · October, 2021

As a side project while I was ahead of schedule in my Amazon Future Engineer program, I used some of the spare hardware (an 8x8 lcd matrix and a joystick) to make the game snake in python.

I began this journey by getting to know the 8x8 LCD as well as how it interfaces with the arduino. The matrix accepts an array of 8, 8 bit integers. Each of these bits represents an LED that is either turned on or off depending on the value of the array. This being my first experience with binary I had a few hurdles to overcome. I began by making a program that displayed text that scrolls across the screen. This utilized a library of arrays for each letter and number, tediously hardcoded by yours truly. After learning how the display operated and getting the display working, I moved on to the joystick which was much simpler. I separated the input into 3 different values: left/right, up/down, and pushdown button input.

Now that the hardware was all good to go, I set out to create the game snake. The overall structure of it is pretty simple:
1. Read the joystick values to choose the snake's velocity in each axis
2. Add the velocity to the head's position (provided the velocity is in a valid direction)
3. Checked to see if it was on a point of interest (apple, body, boundary point)
4. If it is an apple: Add one to the length of the snake and re-assign a random position for the apple
5. Write the current snake and apple pixels to the matrix display

After getting this functional and properly working, I decided to 3D model housings for the display and the joystick which I then printed on our classroom's Ender 3 3D Printer.

A full demonstration is shown below, and the source code is hosted on my github <a href="https://github.com/AaronGothard/Snake-Python/blob/main/ArduinoSnake.py">here</a>

<iframe width="560" height="315" src="https://www.youtube.com/embed/WlHp1nSYgAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay muted></iframe>

Note: Unfortunately I had to set the frame rate intentionally low here. Though I can clearly program the game snake, I was horrendous at actually *playing* the game.