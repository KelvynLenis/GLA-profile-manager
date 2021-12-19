from bs4 import BeautifulSoup
import urllib
import re

f = open("characters_url.txt", "w")
f_class = open("class_url.txt", "w")
file_smh = open("smh_url.txt", "a")
file_island = open("island_url.txt", "w")

char = re.compile(r'\w*/characters*')
classe = re.compile(r'\w*/icons')
smh = re.compile(r'\w*/img1\.png')
island = re.compile(r'\w*/island')

html_page = urllib.request.urlopen("https://wiki.gla.com.br/personagens")
html_island_page = urllib.request.urlopen("https://wiki.gla.com.br/ilhas")
html_specialmission_page = urllib.request.urlopen("https://wiki.gla.com.br/special-mission/10")

soup = BeautifulSoup(html_island_page)
images = []

for img in soup.findAll('img'):
	#print(img.get('src'))
	#print()
    images.append(img.get('src'))

for img in images:
	if re.search(island, img):
		file_island.write(f"{img}\n")	
		print(img)
		print()

f.close()
f_class.close()
file_smh.close()
file_island.close()
