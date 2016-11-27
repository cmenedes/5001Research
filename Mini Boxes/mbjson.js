// enter question in "clue": "",
// enter answer in "answer": "",
// enter choices for each question in "choices": ["", "","",""], 

var data = {
    "boxes": [
        {
            "color": "red",
			"img": "./images/redbox.png",
            "questions": [
                {
                    "clue": "Hypothesis testing is a _________.",
                    "answer": "Procedure for deciding whether the outcome of a study supports a particular theory or practical innovation",
                    "value": "2",//num points for question 
                    "choices": ["conventional level of statistical significance", "procedure for deciding whether the outcome of a population supports a particular sample","procedure for deciding whether the outcome of a study supports a particular theory or practical innovation","type 2 error"], 
                    
                },
                {
                    "clue": "A hypothesis is a _________.",
                    "answer": "a prediction based on previous theories/research/observations",
                    "value": "2",//num points for question
                    "choices": ["result based on a previous theory.", "a research observation","a prediction based on previous theories/research/observations","type 2 error"],
                    
                }
               
            ]
        },
        {
            "color": "orange",
			"img": "./images/orangebox.png",
            "questions": [
                 {
                    "clue": "Based on the normal curve percentages, you can determine that only about 2% of bulldogs start barking before 3 weeks of age; these are the puppies who are more than _____ standard deviations below the mean.",
                    "answer": "2",
                    "value": "2",//num points for question
                    "choices": ["2", "1","5","4"],
                    
                },
                {
                    "clue": "A researcher working on a project has an idea: If puppies were to drink milk that's more processed, its effect on them would increase; puppies drinking milk that's more purified may start barking earlier than other puppies. What type of problem is this? ",
                    "answer": "Hypothesis testing problem",
                    "value": "2",//num points for question
                    "choices": ["Population problem", "Sample problem","Hypothesis testing problem","All of the above"],
                    
                }
       
            ]
        },
        {
            "color": "yellow",
			"img": "./images/yellowbox.png",
            "questions": [
                {
                    "clue": "A researcher wants to know whether purified milk contributes to puppies barking earlier. Why is this a hypothesis testing problem?",
                    "answer": "The researcher wants to draw a general conclusion about whether purified milk allows puppies in general to bark earlier.",
                    "value": "2",//num points for question
                    "choices": ["The researcher wants to draw a general conclusion about whether purified milk allows one puppy to bark earlier.", "The researcher wants to draw a general conclusion about whether purified milk allows puppies in general to bark earlier.","c) The researcher is interested in the health bulldogs.","All of the above."],
                    
                },
                {
                    "clue": "A researcher examined one French bulldog instead of all French bulldogs in the world when conducting an experiment. Why?",
                    "answer": "Working with all French Bulldogs would be cost prohibitive.",
                    "value": "2",//num points for question
                    "choices": ["Working with all French Bulldogs would be cost prohibitive.", "He is trying to understand only that one French bulldog.","There is only one French bulldog in the world.","All of the above."],
                    
                }
               
            ]
        },
        {
            "color": "green",
			"img": "./images/greenbox.png",
            "questions": [
                {
                    "clue": "How many steps does a hypothesis testing problem involve?",
                    "answer": "5",
                    "value": "2",//num points for question
                    "choices": ["4", "5","3","6"],
                    
                },
                {
                    "clue": "What is the purpose of restating research questions in terms of a population if you only study samples?",
                    "answer": "To draw a conclusions about the population.",
                    "value": "2",//num points for question
                    "choices": ["To draw a conclusions about the population.", "To draw conclusions about a single person.","To draw conclusions about two people.","None of the above."],
                    
                }
            ]
        },     
        {
            "color": "silver",
			"img": "./images/violetbox.png",
            "questions": [
                {
                    "clue": "What is the research hypothesis in the following example: If puppies drink more highly processed milk, its effect on them would increase: puppies drinking highly purified milk (Population #1) should start barking earlier than other puppies (Population #2).",
                    "answer": "Population #1 puppies will bark earlier than Population #2 puppies.",
                    "value": "2",//num points for question
                    "choices": ["Population #1 puppies will bark earlier than Population #2 puppies.", "Population #2 puppies will bark in the same timeframe as Population #1 puppies.","Population #2 puppies will bark earlier than Population #1 puppies.","Population #1 puppies will not bark earlier than Population #2 puppies."],
                    
                },
                {
                    "clue": "What are the characteristics of comparison distribution?",
                    "answer": "The mean of Population #2 is 4 and standard deviation of Population #2 is 2.",
                    "value": "2",//num points for question
                    "choices": ["The mean of Population #1 is 4 and standard deviation of Population #1 is 2.", "The mean of Population #2 is 4 and standard deviation of Population #2 is 2.","Type 1 error","Type 2 error"],
                    
                }
            ]
        },
        {
            "color": "blue",
			"img": "./images/bluebox.png",
            "questions": [
                {
                    "clue": "What does comparison distribution represent?",
                    "answer": "The population situation if the null hypothesis is true.",
                    "value": "2",//num points for question
                    "choices": ["The population situation if the null hypothesis is false.", "The population’s score on the distribution.","The population situation if the null hypothesis is true.", "The population situation if the research hypothesis is true."],
                    
                },
                {
                    "clue": "p<.01 and p<.05 are also known as:",
                    "answer": "Conventional levels of statistical significance",
                    "value": "2",//num points for question
                    "choices": ["Normal distributions", "Conventional levels of statistical significance","Levels of the sample","Levels of a population"],
                    
                }
            ]
        },
        {
            "color": "purple",
			"img": "./images/purplebox.png",
            "questions": [
                {
                    "clue": "If a sample’s z score is -1 and the z cut off is -1.64, you: ",
                    "answer": "Fail to reject the null hypothesis.",
                    "value": "2",//num points for question
                    "choices": ["Reject the research hypothesis.", "Fail to reject the null hypothesis.","Reject the null hypothesis.","Fail to reject the research hypothesis."],
                    
                },
                {
                    "clue": "If you fail to reject the null hypothesis, you conclude that:",
                    "answer": "The purified milk makes a difference in French bulldogs’ early barking.",
                    "value": "2",//num points for question
                    "choices": ["The purified milk makes a difference in French bulldogs’ early barking.", "The purified milk does not make a difference in French bulldogs’ early barking.","The purified milk does not make a difference in French bulldogs’ late barking."," All of the above."],
                    
                }
            ]
        }               
        
    ]
};
