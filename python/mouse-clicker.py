import time
import macmouse

# Clicks the mouse twice every 5 mintues, with a 1 second between each click
while (True):
    time.sleep(30)
    macmouse.click(button='left')
    time.sleep(1)
    macmouse.click(button='left')
    time.sleep(320)
