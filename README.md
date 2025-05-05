# Software Engineering Homework 2

## Context
- I ran both the code and the jasmine tests through the VScode terminal
- I also made sure node.js and the jasmine packages were in order before running

## Setup for hw2.js code 
- To run the actual hw2.js code make sure you are in the lib folder (example:
     " C:\Users\aryas\Desktop\Rutgers 2021-2025\Spring 2024\Software Engineering\Homeworks\Homework 2\lib ")
- Then in the VScode terminal run "node hw2.js"
- You will then be prompted with nothing, or some debug line in the terminal based on the file input
- If set to default "records.txt", you will get your output in "outputRecords.txt"
- Both of these files are in lib folder

## Setup for jasmine test cases
- For the jasmine test cases make sure to go back one folder from lib into homework2 (using cd ..) 
- (example: " C:\Users\aryas\Desktop\Rutgers 2021-2025\Spring 2024\Software Engineering\Homeworks\Homework 2 ")
- Then to run the cases just type in the terminal "npx jasmine"
- It should run 36 specs or test cases and 0 failures

## IMPORTANT Setup for extra tests with txt files
- For the final extra tests not in jasmine, since they are separte files I made, you can run them thorugh the hw2.js code
- Instructions and reuslts for each file below
- To run these extra files in lib, "testcase1.txt" to "testcase5.txt"
- Go into the hw2.js file, at line 12, below the IMPORTANT you will see " input: fileSystem.createReadStream("records.txt"), "
    To test files you must change the parameters of createReadStream to whichever file you want to test, example below:
    " input: fileSystem.createReadStream("testcase1.txt"), "
    
    ## OUTPUT: Can't have more than one property on line and/or TIME is incorrect format
    
    " input: fileSystem.createReadStream("testcase2.txt"), " 
    
    ## OUTPUT: Can't have more than one property on line and/or TIME is incorrect format
    
    " input: fileSystem.createReadStream("testcase3.txt"), " 
    
    ## OUTPUT: You have more than one value for IDENTIFIER key
  
    " input: fileSystem.createReadStream("testcase4.txt"), "
    
    ## OUTPUT: You have more than one value for WEIGHT key

    " input: fileSystem.createReadStream("testcase5.txt"), " 
    
    ## OUTPUT: You have an unknown property

    If you want your own file you must put it into the lib folder then change the same line