//Code for homework 2
const fileSystem = require("fs"); //so the filesystem works
const readline = require("readline"); //to let code read file input
let identifierList = [];
let predefinedProperties = [ "BEGIN", "END", "IDENTIFIER", "TIME", "WEIGHT", "COLOR", "UNITS" ];
let predefinedAllowedUnits = ["kg", "g", "mg", "lb", "oz", "ton", "kilogram", "gram", "milligram", "pound", "ounce"];

//To create an interface to read specifc file in directory
//IMPORTANT: 
//Change the filename here in createreadstream for different inputs and test cases if needed
const file = readline.createInterface({
    input: fileSystem.createReadStream("records.txt"),
    output: process.stdout,
    terminal: false
});

//The main function to read and write records, holds multiple functions to format and error handling 
function readWriteRecord() {
    let mapRecords = [];
    let increment = -1;
    file.on("line", (line) => {                                                   //open file for reading
        let temp = line.toUpperCase();

        if (temp.match(/:/g) != null && temp.match(/:/g).length > 1) {            //check if there are multiple properties
                console.debug("Can't have more than one property on line and/or TIME is incorrect format");
                fileSystem.writeFileSync("outputRecords.txt", "");
                process.exit();
        }
        else if(temp.includes("BEGIN")) {                                         //to check if need to make a new hashmap to store record
            increment++;
            mapRecords.push(new Map());
            if(!(mapRecords[increment].has(temp.substring(0, line.indexOf(":"))))) {
                mapRecords[increment].set(temp.substring(0, line.indexOf(":")), (temp.substring(line.indexOf(":") + 1).trim()));
            }
            else {
                console.debug("You have more than one value for " + temp.substring(0, line.indexOf(":")) + " key");    //checks for mutliple values for same key
                fileSystem.writeFileSync("outputRecords.txt", "");
                process.exit();
                //return "You have more than one value for " + temp.substring(0, line.indexOf(":")) + " key";
            }
        } 
        else if(temp.includes("END")) {                                           //checks to end hashmap properly
            if(!(mapRecords[increment].has(temp.substring(0, line.indexOf(":"))))) {
                mapRecords[increment].set(temp.substring(0, line.indexOf(":")), (line.substring(line.indexOf(":") + 1).trim()));
            }
            else {
                console.debug("You have more than one value for " + temp.substring(0, line.indexOf(":")) + " key");
                fileSystem.writeFileSync("outputRecords.txt", "");
                process.exit();
                //return "You have more than one value for " + temp.substring(0, line.indexOf(":")) + " key";
            }
        }
        else if(line != "") {                                                     //For all other key value pairs
           if(line.indexOf(":") == -1) {
            console.debug("Not an acutal Key:value property");
            fileSystem.writeFileSync("outputRecords.txt", "");
            process.exit();
            //return "Not an acutal Key:value property";
           }
           if(!(mapRecords[increment].has(temp.substring(0, line.indexOf(":"))))) {
            mapRecords[increment].set(temp.substring(0, line.indexOf(":")), (line.substring(line.indexOf(":") + 1).trim()));
           }
           else {
                console.debug("You have more than one value for " + temp.substring(0, line.indexOf(":")) + " key");
                fileSystem.writeFileSync("outputRecords.txt", "");
                process.exit();
                //return "You have more than one value for " + temp.substring(0, line.indexOf(":")) + " key";
           }
        }
    })
    
    file.on("close", () => {                                                      //Where you must close off the file and start writing to output
        fileSystem.writeFileSync("outputRecords.txt", "");
        if(checkFormat(mapRecords) == true) {                                     //Call the format function to check key value pairs
            sortOrders(mapRecords);                                               //To sort the records based on time 
            for(let i = 0; i < mapRecords.length; i++) {
                    for(let [key, value] of mapRecords[i]) {
                        let recordData = key + ":" + value + "\n";
                        fileSystem.appendFileSync("outputRecords.txt", recordData, "utf8");    //write to outputRecords.txt
                        }            
                }
            }
        return;
    })   

    return true;
}

//Check format function to loop through list to check hashmap formatting
function checkFormat(mapRecords) {                                          
    identifierList = [];
    for(let i = 0; i < mapRecords.length; i++) {
        let returnCheck = checkFormatHelper(mapRecords[i]);                       //Call the checkformathelper
        if (returnCheck != true) {
            return returnCheck;
        }
    }
    return true;
}

//Most of the conditionals to check each key value pair 
function checkFormatHelper(record) {                                             
    if(!(record.has("BEGIN"))){                                                   //Check if begin is in record 
        console.debug("Does not have required BEGIN:RECORD");
        return "Does not have required BEGIN:RECORD";
    }
    else if(!(record.get("BEGIN") == ("RECORD"))) {                               //Check if record is present
        console.debug("Missing RECORD after BEGIN:");
        return "Missing RECORD after BEGIN:";
    }
    if(!(record.has("END"))){                                                     //Check for end in record
        console.debug("Does not have required END:RECORD");
        return "Does not have required END:RECORD";
    }
    else if(!(record.get("END") == ("RECORD"))) {                                  //Check if record is present
        console.debug("Missing RECORD after END:");
        return "Missing RECORD after END:";
    }
    if(!(record.has("IDENTIFIER"))){                                               //Identifier property is required
        console.debug("Does not have required IDENTIFIER key");
        return "Does not have required IDENTIFIER key";
    }
    else {
        if(identifierList.includes(record.get("IDENTIFIER"))) {                   //Must be unique to record
            console.debug("One of your records has a duplicate identifier")
            return "One of your records has a duplicate identifier";
        }
        identifierList.push(record.get("IDENTIFIER"));
    }
    if(!(record.has("TIME"))){                                                    //Time property is required 
        console.debug("Does not have required TIME key");
        return "Does not have required TIME key";
    }
    else {                                                                        //Code from previous hw to have working date function 
        const correctYear = record.get("TIME").slice(0,4);
        const correctMonth = record.get("TIME").slice(4,6) - 1;
        const correctDay = record.get("TIME").slice(6,8);
        const correctHour = record.get("TIME").slice(9,11);
        const correctMinute = record.get("TIME").slice(11,13);

        let newInputArg = record.get("TIME").slice(0,4) + '-' + record.get("TIME").slice(4,6) + "-" + record.get("TIME").slice(6,11) + ":" + record.get("TIME").slice(11,13) + ":" +  record.get("TIME").slice(13,15);
        let outputDate = new Date(newInputArg);

        if(outputDate.getFullYear() == correctYear && correctYear != 0 && outputDate.getMonth() == correctMonth && outputDate.getDate() == correctDay && outputDate.getHours() == correctHour && outputDate.getMinutes() == correctMinute) {
            const correctFormat = {year:'numeric', month:'long', day:'numeric', hour:'numeric', minute:'numeric', hour12:true};
            const dateTimeFormat = new Intl.DateTimeFormat('en-US', correctFormat);
            record.set("TIME", dateTimeFormat.format(outputDate)); 
        }
        else {
            console.debug("TIME is formatted incorrectly, should be YYYYMMDDTHHMMSS");
            return "TIME is formatted incorrectly, should be YYYYMMDDTHHMMSS";
            //isInvalid = true;
        }
    }
    if(record.keys().length != record.values().length){                           //Check for multiple values again
        console.debug("You have more than one value for each key");
        return "You have more than one value for each key";
    }
    if(record.has("WEIGHT")) {                                                    //Check for weight and units if needed
        if(!(record.has("UNITS"))) {
            console.debug("You are missing the UNITS property");
            return "You are missing the UNITS property";
        }
        else if(!(predefinedAllowedUnits.includes((record.get("UNITS")).toLowerCase()))) {   //Units must follow predefined list
            console.debug("The UNITS does not have a included measuring unit");
            return "The UNITS does not have a included measuring unit";
        }
        if((isNaN(Number(record.get("WEIGHT"))))) {                                          //Weight must be in numerical format
            console.debug("The weight is formatted incorrectly and should only include numbers");
            return "The weight is formatted incorrectly and should only include numbers";
        }
    }
    if(record.has("COLOR")) {                                                     //Color must be in hexcode format 
        let regEx = /^#?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/;
        if(!regEx.test(record.get("COLOR"))) {
            console.debug("Incorrect formatting for color, should be in HEX");
            return "Incorrect formatting for color, should be in HEX";
        }
    }
    if(!(Array.from(record.keys()).every(r => predefinedProperties.includes(r)))) {  //No unknown properties allowed 
        console.debug("You have an unknown property");
        return "You have an unknown property";
    }
    if(!(Array.from(record.values()).every(r => r.toString()))) {                 //Check for missing values of keys
        console.debug("You are missing a value for one of your keys");
        return "You are missing a value for one of your keys";
    }
    return true;
}

//Function to sort the records based on date time
 function sortOrders(mapRecords) {
    for(let i = 0; i < mapRecords.length - 1; i++) {
        for(let j = 0; j < mapRecords.length; j++)
            if (new Date(mapRecords[i].get("TIME")) > new Date(mapRecords[j].get("TIME"))) {
                swapElement(mapRecords, i, j);
            }
    }
 }

 //Helper method to sort the records
 function swapElement(array, i, j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
 }

 readWriteRecord();                                                               //First call to run read and write function
 module.exports = { checkFormat, readWriteRecord };                               //To export for jasmine testing 
