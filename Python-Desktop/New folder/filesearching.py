import sys
import os.path
from shutil import copyfile

print("hello")

# Find SECTION A and change the class
def SECTION_A():
    print 'inside SECTION A'
    if fileExists:
        file = open(filePath, 'r')
        fileRead = file.readlines()
        file = open(filePath, 'r+')
        index = [x for x in range(len(fileRead)) if "\t\t\t\t\t<!-- SECTION A -->" in fileRead[x]]
        print index
        for i in range(len(index)):
            index = int(index[i])
        print index  
        index = index - 1
        print '.............................', index
        line = "\t\t\t\t<div class=\"col - sm - 12\">\n"
        del fileRead[index]
        line = line.split("\"")
        # print 'line', line
        line[1] = "col-md-6 center-block"
        # print 'LINE......', line
        value = " \" ".join(line)
        # print value
        fileRead.insert(index,value)
        fileRead = "".join(fileRead)
        file.write(fileRead)
        print 'Data Appended SECTION_A\n\n'
        file.close()

# Adding class to <h2> tag
def h2_tag():
    if fileExists:
        file = open(filePath, 'r')
        fileRead = file.readlines()
        file = open(filePath, 'r+')
        index = [x for x in range(len(fileRead)) if "\t\t\t\t\t<!-- SECTION A -->\n" in fileRead[x]]
        print '######################', index
        for i in range(len(index)):
            index = int(index[i])
        index = index + 1
        print '.............................', index
        line = "\t\t\t\t\t<h2>Section I: Reading</h2>\n"
        print line
        del fileRead[index]
        print 'line deleted'
        value = line.replace("<h2>", "<h2 class=\"section_1\">")
        print value
        fileRead.insert(index, value)
        fileRead = "".join(fileRead)
        file.write(fileRead)
        print 'Data Appended h2_tag\n\n'
        file.close()

# Adding Class to <p> tag
def p_tag():
    if fileExists:
        file = open(filePath, 'r')
        fileRead = file.readlines()
        file = open(filePath, 'r+')
        pointer = [x for x in range(len(fileRead)) if "\t\t\t\t\t<p><strong>Read the selection below and answer the questions that follow it.</strong>" in fileRead[x]]
        print pointer
        # pointer[0] = pointer[0] - 1
        # print 'pointer[0] ', pointer[0]
        del fileRead[pointer[0]]
        # pointer[1] = pointer[1] - 1
        # print 'pointer[1] ', pointer[1]
        del fileRead[pointer[1]]
        print 'line deleted'
        line = "\t\t\t\t\t<p><strong>Read the selection below and answer the questions that follow it.</strong>"
        # line = line.split("<p")
        # print line
        # line[1] = "<p class = \"section_1_p\">"
        value = line.replace('<p>', '<p class="section_1_p">')
        # value = "  ".join(line)
        print value
        fileRead.insert(pointer[0], value)
        fileRead.insert(pointer[1], value)
        fileRead = "".join(fileRead)
        file.write(fileRead)
        #print fileRead #'Data Appended p_tag'
        file.close()
        
if __name__ == "__main__":
    filePath = os.path.join("C:/Users/w5rtc/Desktop/Python/New folder/changed_original.html")
    fileExists = os.path.exists(filePath)
    print("File exists")
    if fileExists:
        pass
    else:
        src = os.path.join("C:/Users/w5rtc/Desktop/Python/html/original.html")
        dst = os.path.join(
            "C:/Users/w5rtc/Desktop/Python/New folder/original.html")
        copyfile(src, dst)
        print 'File Copied'
        os.rename("C:/Users/w5rtc/Desktop/Python/New folder/original.html",
                "C:/Users/w5rtc/Desktop/Python/New folder/changed_original.html")
        print 'File renamed'
        fileExists = os.path.exists(filePath)
    SECTION_A()
    h2_tag()
    p_tag()
