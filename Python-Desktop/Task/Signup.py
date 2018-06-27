import time

from selenium import webdriver

def Signup():
	driver = webdriver.Chrome("D:\TestSelenium\SeleniumScripts\chromedriver.exe")
	driver.set_page_load_timeout(30)
	url = "https://twitter.com/"
	driver.get(url)
	driver.maximize_window()
	driver.implicitly_wait(5)

	elementClick1 = driver.find_element_by_link_text("Sign up")
	elementClick1.click()
	time.sleep(3)

	elementClick2 = driver.find_element_by_id("full-name")
	elementClick2.send_keys("Arijit Saha")
	time.sleep(3)

	elementClick3 = driver.find_element_by_id("email")
	elementClick3.click()
	time.sleep(3)

	elementClick4 = driver.find_element_by_id("email")
	elementClick4.send_keys("a@b.c")
	time.sleep(3)

	elementClick5 = driver.find_element_by_id("submit_button")
	elementClick5.click()
	time.sleep(3)

	driver.quit();
