import os, sys, time
from selenium import webdriver

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

smURL = "https://sherriemcnulty.github.io/"
print ('Testing on : ' , smURL)
print ("Program Started at:"+ time.strftime("%Y-%m-%d %H:%M:%S"))

chromeBrowser = webdriver.Chrome()
#chromeBrowser.implicitly_wait(10) # seconds
#chromeBrowser.maximize_window()

###########################
chromeBrowser.get(smURL)
time.sleep(1)
link_resume = chromeBrowser.find_element_by_xpath("/html/body/div[1]/div/nav[2]/div/a[2]")
time.sleep(1)
link_resume.click()
time.sleep(1)

try:
    assert chromeBrowser.title == "Sherrie McNulty - Profile", "Expected Results NOT Found!"
except AssertionError:
    print ("Expected Results NOT Found when looking for: ", expectedFirstRecentVehicleText)
else:
    print ("Resume Page Validation Successful!")

time.sleep(2)
chromeBrowser.quit()
###########################




print ("Program Ended at:"+ time.strftime("%Y-%m-%d %H:%M:%S"))
