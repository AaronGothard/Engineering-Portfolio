---
title: "Reconfigurable Vehicle Buck"
excerpt: "A full-scale, reconfigurable car interior designed for Nissan to evaluate interior layout concepts for future vehicle platforms."
header:
  image: /assets/img/nissanbuck_testing.jpg
  teaser: /assets/img/nissanbuck_render.png
skills: [Solidworks, Hands-On, Machining, Ansys]
gallery:
  - url: /assets/img/nissanbuck_interior.jpg
    image_path: /assets/img/nissanbuck_interior.jpg
    alt: "Vehicle packaging buck in testing configuration"
  - url: /assets/img/nissanbuck_team.jpg
    image_path: /assets/img/nissanbuck_team.jpg
    alt: "The Vanderbilt team with visiting NTCNA engineers"
  - url: /assets/img/nissanbuck_render.jpg
    image_path: /assets/img/nissanbuck_render.png
    alt: "Team at final presentation with Nissan representatives"
---


### Vanderbilt University · Fall 2024 – Spring 2025
Aaron Gothard, Nick Diaz, David Guiracocha, Elijah Holland, Nicole Yeh

## Overview

As part of my senior design capstone, I collaborated with a multidisciplinary team to design and fabricate a full-scale reconfigurable vehicle packaging buck for Nissan. The buck enables physical exploration of different interior layouts and cargo configurations for early-stage vehicle development and consumer research.

Our goal was to create a modular, human-centric platform that supports rapid testing of seating arrangements, cargo space layouts, visibility studies, and ingress/egress ergonomics. The final deliverable was delivered to Nissan for use in market research and concept validation.

## Vehicle Design Background

In the context of vehicle design, there are a few terms to understand before we can dive into the details:
-   The vertical members that are typically on either side of the door are called *pillars*. The foremost pillar (in line with the instrument panel) is called the *A Pillar*. As you move rearward, the next pillar is called the *B Pillar*, and the pattern continues. 
-   There is an invisible horizontal plane that splits the waistline in half, called the *waistline* or *beltline*. This means each pillar is divided into two members: the above-waistline portion and the below-waistline portion
-   When you look at a car from the front or the rear, its pillars typically angle in above the waistline. This angle is referred to as the *tumblehome angle*

![Labeled Diagram](/assets/img/nissanbuck_pillarandwidth.png)


## Task Specifications
In total, there needed to be 11 variable dimensions:
- **Overall Width**: The buck needed to expand and contract to simulate different widths of vehicles
- **B, C, D Pillar Locations**: Each of the 3 rear pillars need to be able to translate fore and aft. The A Pillars do not need to translate, as they are used as the datum for the other pillars to locate off of.
- **Waistline Height**: The waistline of the buck needs to raise and lower
- **Tumblehome Angle**: The above waistline pillars need to be able to pivot inwards to give a variable tumblehome angle
- **Windshield Angle**: On top of the A Pillar's tumblehome pivot needs to be another joint to allow for the rearward sweep of the windshield to be adjusted.
- **Roof Height**: The above waistline pillars need to also lengthen and contract to raise and lower the roof
- **Seat Position**: The front and rear seat tracks need to move fore and aft, vertically up and down, and the front seats need to slide side to side.

With so many points of articulation, we were worried that the frame wouldn't be rigid enough for consumers to sit in, so Nissan decided that the base needs to hold a load of 400kg excluding its own weight. Additionally, they requested that the frame must be made from 8020 aluminum extrusions and include casters for ease of use.

## My Role
Since I front-loaded my degree requirements, I had the lightest semester out of the group. As such I took on a heavier workload when it came to bringing Nissan's dream into reality. 

- **Concept Development**  
  Led early brainstorming for each of the vital joints and sourced or machined parts for each

- **3D Design**  
  Designed the assembly in SolidWorks and validated geometric design criteria for each requirement. Ran simple load analysis to validate load requirements. Designed custom brackets for fitment and telescoping joints for above and below waistline pillars

- **Fabrication**  
  Milled each of the custom parts, cut members and floors, and assembled 700+ individual components in this SUV-sized behemoth

- **Collaboration**  
  Managed communication between our team, Dr. Withrow, The Wond'ry, LASIR, and Nissan Americas at every step of the journey

## Technical Tools Used

- SolidWorks for 3D modeling and detailed part drawings  
- Laser cutting and 3D printing (ULS 150D, Stratasys F170) for early prototypes 
- Milling (Sharp Vertical Knee Mill) for custom brackets and telescoping members
- Ergonomic tools for interior dimension benchmarking (SAE J1100-based)

## Impact

This project gave Nissan a valuable physical asset for iterative interior design testing and informed early vehicle development decisions with real user data. It also gave me hands-on experience designing human-focused systems and collaborating with an industry partner on a real-world engineering challenge. See what the the Wond'ry had to say about this project <a href="https://www.linkedin.com/posts/thewondry_vugivingday-thewondry-studentinnovation-ugcPost-7316217261315227649-M_9d?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZhIbwBYnidTBF8g0tJkQIXkYWlvI2qKNA"> here</a>

## Reflection

This project was one of the most meaningful parts of my undergraduate experience, career. Requiring me to put in well over 200 hours of work, it combined engineering fundamentals, hands-on prototyping, user research, and real industry feedback into a single, cohesive challenge. Working with Nissan pushed me to think not just as an engineer, but as a designer solving problems for real people. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/_DXw8G_t55U?si=xzYaMDIArdWUt_08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

{% include gallery %}

[Return to Portfolio](/portfolio)
