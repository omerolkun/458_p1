import selenium
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys




def enter_credentials(id, password):
    # Finds id and password text areas
    id_field = driver.find_element_by_id("id-field")
    pass_field = driver.find_element_by_id("password-field")

    #Clear the text fields
    id_field.clear()
    pass_field.clear()

    # Enters the given parameters into text fields
    id_field.send_keys(id)
    pass_field.send_keys(password)

    # Press submit
    driver.find_element_by_id("login-form-submit").click()
    


# Selenium setup for chrome using webdrivers
options = webdriver.ChromeOptions()

options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
options.add_argument("--mute-audio")

path = "/home/buket/COURSES/458p1/CS458Reborn/chromedriver"
login_location = "/home/buket/COURSES/458p1/CS458Reborn/login.html"
driver = webdriver.Chrome(path, options=options)
driver.maximize_window()
#driver.get("https://stars.bilkent.edu.tr/accounts/login")
driver.get("file:///home/buket/COURSES/458p1/CS458Reborn/login.html")

'''
# Using readlines()
file1 = open('database.txt', 'r')
lines = file1.readlines()

time.sleep(2)
for line in lines:
    #Split the line by white spaces to get two indexes of information
    # 0 index is id, 1 index is password
    credentials = line.split("\t")

    print("testing id: ", credentials[0],", password: ", credentials[1])

    # Call automated submission method
    enter_credentials(credentials[0], credentials[1])
    time.sleep(3)

'''