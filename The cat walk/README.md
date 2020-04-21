Exercise 5: The cat walk

Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Cat Walk</title>
  </head>
  <body>
    <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif" />
  </body>
</html>

    Create a variable to store a reference to the img.
    Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
    Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
    Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
    When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
    When the cat reaches the middle of the screen, replace the img with an image of a cat dancing (use this URL: https://tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
