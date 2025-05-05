//Jasmine testing for homework 2
const { checkFormat } = require("../lib/hw2");
const { readWriteRecord } = require("../lib/hw2");

//IMPORTANT:
//Make sure the file in createreadstream for hw2.js is records.txt just for the jasmine testing 
//It is set by default
  describe('read right test files', () => {

    it('should not take multi line property', () => {
        const result = readWriteRecord();
        expect(result).toBe(true);
    });

  });

  describe('inputs of records in lists of hashmaps that right format', () => {
    
    var test1 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test2 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "3"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "4"], ["TIME", "21020118T230000"], ["COLOR", "#3a7ce3"], ["UNITS", "kg"], ["END", "RECORD"]]),

    ];

    var test3 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "3"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "4"], ["TIME", "21020118T230000"], ["COLOR", "#3a7ce3"], ["UNITS", "kg"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "5"], ["TIME", "20030118T230000"], ["COLOR", "#2a7ce3"], ["END", "RECORD"]]),

    ];

    var test4 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "3"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "4"], ["TIME", "21020118T230000"], ["COLOR", "#3a7ce3"], ["UNITS", "kg"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "5"], ["TIME", "21020118T230000"], ["COLOR", "#3a7ce3"], ["UNITS", "kg"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "6"], ["TIME", "20270118T230000"], ["UNITS", "g"], ["END", "RECORD"]]),

    ];

    var test5 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "3"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "4"], ["TIME", "21020118T230000"], ["COLOR", "#3a7ce3"], ["UNITS", "kg"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "5"], ["TIME", "21020118T230000"], ["COLOR", "#3a7ce3"], ["UNITS", "kg"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "6"], ["TIME", "21320118T230000"], ["COLOR", "#3a7ce3"], ["UNITS", "kg"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "7"], ["TIME", "21720118T230000"], ["COLOR", "#3b7ce3"], ["UNITS", "pounds"], ["END", "RECORD"]]),


    ];

    var test6 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "3"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "4"], ["TIME", "21020118T230000"], ["COLOR", "#3a7ce3"], ["UNITS", "g"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "5"], ["TIME", "21020118T230000"], ["COLOR", "#3a7ce3"], ["UNITS", "kg"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "6"], ["TIME", "21020118T230000"], ["COLOR", "#3a7ce3"], ["UNITS", "mg"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "7"], ["TIME", "21020118T230000"], ["COLOR", "#7a7ce3"], ["UNITS", "kilograms"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "8"], ["TIME", "21020118T230000"], ["COLOR", "#5a7ce3"], ["UNITS", "kg"], ["END", "RECORD"]]),

    ];

    it('should take list of correctly formatted hashmaps (1)', () => {
        const result = checkFormat(test1);
        expect(result).toBe(true);
    });

    it('should take list of correctly formatted hashmaps (2)', () => {
        const result = checkFormat(test2);
        expect(result).toBe(true);
    });

    it('should take list of correctly formatted hashmaps (3)', () => {
        const result = checkFormat(test3);
        expect(result).toBe(true);
    });

    it('should take list of correctly formatted hashmaps (4)', () => {
        const result = checkFormat(test4);
        expect(result).toBe(true);
    });

    it('should take list of correctly formatted hashmaps (5)', () => {
        const result = checkFormat(test5);
        expect(result).toBe(true);
    });

    it('should take list of correctly formatted hashmaps (6)', () => {
        const result = checkFormat(test6);
        expect(result).toBe(true);
    });

  });

  describe('Missing important Closure Properties', () => {

    var test7 = [
        new Map([["IDENTIFIER", "1"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "3"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
        
    ];

    var test8 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "3"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
        
    ];

    var test9 = [
        new Map([["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "3"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
        
    ];

    var test10 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", ""], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "3"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
        
    ];

    var test11 = [
        new Map([["BEGIN", ""], ["IDENTIFIER", "1"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "3"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
        
    ];

    var test12 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "19980118T230000"], ]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "3"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
        
    ];

    var test13 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "3"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
        
    ];

    var test14 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "19980118T230000"], ["END", ""]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "3"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
        
    ];

    var test15 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["END", "w"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "3"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
        
    ];

    it('should take a hashmap without begin and get error(7)', () => {
        const result = checkFormat(test7);
        expect(result).toBe("Does not have required BEGIN:RECORD");
    });

    it('should take a hashmap without begin and get error (8)', () => {
        const result = checkFormat(test8);
        expect(result).toBe("Does not have required BEGIN:RECORD");
    });

    it('should take a hashmap without begin and get error (9)', () => {
        const result = checkFormat(test9);
        expect(result).toBe("Does not have required BEGIN:RECORD");
    });

    it('should not ccept missing record value (10)', () => {
        const result = checkFormat(test10);
        expect(result).toBe("Missing RECORD after BEGIN:");
    });
    
    it('should not accept missing record value (11)', () => {
        const result = checkFormat(test11);
        expect(result).toBe("Missing RECORD after BEGIN:");
    });

    it('should not accept missing END (12)', () => {
        const result = checkFormat(test12);
        expect(result).toBe("Does not have required END:RECORD");
    });

    it('should not accept missing END (13)', () => {
        const result = checkFormat(test13);
        expect(result).toBe("Does not have required END:RECORD");
    });

    it('should not accept missing END (14)', () => {
        const result = checkFormat(test14);
        expect(result).toBe("Missing RECORD after END:");
    });

    it('should not accept missing END (15)', () => {
        const result = checkFormat(test15);
        expect(result).toBe("Missing RECORD after END:");
    });

  });

describe('read test files', () => {

    var test16 = [
        new Map([["BEGIN", "RECORD"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test17 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];
    
    var test18 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test19 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test20 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test21 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test22 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", ""], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test23 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "qwouhd"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test26 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["END", "RECORD"]]),
    ];

    var test27 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["UNITS", "kg"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["END", "RECORD"]]),
    ];

    var test28 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50efe"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test29 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "5qe0"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test30 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "something"], ["END", "RECORD"]]),
    ];

    var test31 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "not a unit"], ["END", "RECORD"]]),
    ];

    var test32 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "BLUE"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test33 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "light pink"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test34 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["TASTE", "GOOD"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test35 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["AMOUNT", "300"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test36 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#2a6ebd"], ["UNITS", "kg"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "5"], ["TIME", "20020118T230000"], ["WEIGHT", ""], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test37 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", ""], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test38 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];

    var test39 = [
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "23"], ["TIME", "19980118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "1"], ["TIME", "20020118T230000"], ["END", "RECORD"]]),
        new Map([["BEGIN", "RECORD"], ["IDENTIFIER", "2"], ["TIME", "20020118T230000"], ["WEIGHT", "50"], ["COLOR", "#3a7bde"], ["UNITS", "kg"], ["END", "RECORD"]]),
    ];


    it('should not accept missing IDENTIFIER (16)', () => {
        const result = checkFormat(test16);
        expect(result).toBe("Does not have required IDENTIFIER key");
    });
        
    it('should not accept missing IDENTIFIER (17)', () => {
        const result = checkFormat(test17);
        expect(result).toBe("Does not have required IDENTIFIER key");
    });

    it('should not accept Duplicate IDENTIFIER (18)', () => {
        const result = checkFormat(test18);
        expect(result).toBe("One of your records has a duplicate identifier");
    });

    it('should not accept Duplicate IDENTIFIER (19)', () => {
        const result = checkFormat(test19);
        expect(result).toBe("One of your records has a duplicate identifier");
    });

    it('should not accept missing TIME (20)', () => {
        const result = checkFormat(test20);
        expect(result).toBe("Does not have required TIME key");
    });

    it('should not accept missing TIME (21)', () => {
        const result = checkFormat(test21);
        expect(result).toBe("Does not have required TIME key");
    });
    
    it('should not accept wrong TIME FORMAT (22)', () => {
        const result = checkFormat(test22);
        expect(result).toBe("TIME is formatted incorrectly, should be YYYYMMDDTHHMMSS");
    });

    it('should not accept wrong TIME FORMAT (23)', () => {
        const result = checkFormat(test23);
        expect(result).toBe("TIME is formatted incorrectly, should be YYYYMMDDTHHMMSS");
    });
    
    it('should not accept wrong forgot UNITS (26)', () => {
        const result = checkFormat(test26);
        expect(result).toBe("You are missing the UNITS property");
    });

    it('should not accept wrong forgot UNITS (27)', () => {
        const result = checkFormat(test27);
        expect(result).toBe("You are missing the UNITS property");
    });
    
    it('should not accept wrong format WEIGHT (28)', () => {
        const result = checkFormat(test28);
        expect(result).toBe("The weight is formatted incorrectly and should only include numbers");
    });

    it('should not accept wrong format WEIGHT (29)', () => {
        const result = checkFormat(test29);
        expect(result).toBe("The weight is formatted incorrectly and should only include numbers");
    });

    it('should not accept wrong format UNITS (30)', () => {
        const result = checkFormat(test30);
        expect(result).toBe("The UNITS does not have a included measuring unit");
    });

    it('should not accept wrong format UNITS (31)', () => {
        const result = checkFormat(test31);
        expect(result).toBe("The UNITS does not have a included measuring unit");
    });

    it('should not accept wrong format COLOR (32)', () => {
        const result = checkFormat(test32);
        expect(result).toBe("Incorrect formatting for color, should be in HEX");
    });

    it('should not accept wrong format COLOR (33)', () => {
        const result = checkFormat(test33);
        expect(result).toBe("Incorrect formatting for color, should be in HEX");
    });

    it('should not accept unkown property (34)', () => {
        const result = checkFormat(test34);
        expect(result).toBe("You have an unknown property");
    });

    it('should not accept unkown property (35)', () => {
        const result = checkFormat(test35);
        expect(result).toBe("You have an unknown property");
    });

    it('should not accept missing a property value (36)', () => {
        const result = checkFormat(test36);
        expect(result).toBe("You are missing a value for one of your keys");
    });

    it('should not accept missing a property value (37)', () => {
        const result = checkFormat(test37);
        expect(result).toBe("You are missing a value for one of your keys");
    });

   });