---
title: "Pancake Flipper"
excerpt: "A morotized pancake flipper designed to seamlessly automate the cooking of breakfast"
header:
  image: /assets/img/pancake.jpg
  teaser: /assets/img/pancake.jpg
skills: ["SolidWorks", "Design and Analysis"]
---
### Vanderbilt University · Spring 2023
Aaron Gothard, Saksham Sharma

## Pancakes
I love pancakes. They are excellent. They have but one issue: they can only be cooked individually on a dorm stove due to my lack of proper cooking utensils. That's where our Machine Analysis and Design course comes in. We had a series of projects: Design a 4 bar linkage, Design a Cam, and then combine the two. Due to our shared issue of pancake tediousness,  Saksham and I decided on a pancake-themed project.

## Our Linkage
We had two motion criteria for the selection of a linkage, you need the spatula to scoop the pancake from below and then rapidly flip it upward. Using Hrones and Nelson's Atlas of the four-bar linkage, we decided on a crank and rocker design which featured a linear forward motion followed by a sharp vertical motion. This used a 1" crank, a 3.5" rocker, a 3.5" ground, and a 1.5" 4th link. We also added an extension to the rocker arm to further embellish the steepness of the flipping motion.

<iframe width="560" height="315" src="https://www.youtube.com/embed/16_qI1cjIec?si=RPM7wqidy1PkI4EB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen autoplay muted></iframe>

## Our Full Design
Now that we had a working linkage we needed a way to change this from continuous rotary motion to intermittent motion. The solution prescribed by the course were Cams. We had worked on designing them and so we planned on using them to get intermittent linear motion from a single motor. The only step left in our design was to translate intermittent linear motion to intermittent rotary motion. To do that, the cam's follower was affixed with a rack, and the crank link was matched with a pinion gear. The design is seamless and works perfectly on the computer, but we ran into issues once these were laser-cut into existence. Laser cut edges are not square, by nature of the laser's beam. The focal point of the laser is at the surface of the material and grows wider below, leaving behind a trapezoidal shape rather than 90 degree corners. Since we were only allowed to laser-cut these, this was an issue. All of our spur gears turned into bevel gears, and our cam and follower didn't ride properly either. This meant that the assembled design suffered from binding issues and couldn't function as intended.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aC5z9nP_wio?si=napJEZSKSvvfQb3N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen autoplay muted></iframe>

## Conclusion
If it wasn't a prescribed requirement for our project to be laser-cut, I would have looked into 3d-printing or even reuse the gear set from our <a href="http://aarongothard.com/portfolio/Car/">laser cut car</a>. This would have almost-assuredly stopped the binding problem. All things considered, our professor was incredibly happy with our design and made it clear that we went above and beyond what was expected of us for the assignment. Though it never made any pancakes on its own, we could crank it and watch it on the computer, so that tastes almost as good as a warm, fluffy pancake.