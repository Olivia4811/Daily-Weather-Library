var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Daily%20Weather.csv"
var mainCondition = getColumn(url, 5)
var state = getColumn(url, 1)
var city = getColumn (url, 2)
var lowTemperature = getColumn (url, 8)
var highTemperature = getColumn (url, 9)
var humidityPercentage = getColumn(url, 10)

//finds the most frequent condition in a certain state
//returns the name of the most frequent condition
//stateName {string} - the desired state
//return mostFrequent{string} - the name of the most frequent condition in the state
function getCondition(stateName) {
var condition = 0; //keeps track of highest number of occurences found so far
var mostFrequent = "State Not Found"; //stores name of weather that has highest count
//go through dataset
for (var i= 0; i < mainCondition.length; i++) { 
    //see if state in current row matches inputted state
    if(state[i].toLowerCase() === stateName.toLowerCase()) {
        //pick weather from that row to test it
        var currentWeather = mainCondition[i] //make that weather the maincondition
        var count= 0; //reset to zero for next weather
    for (var j = 0; j < state.length; j++) { //scans the list again to see how many times the now current weather appeared 
        if (state[j].toLowerCase() === stateName.toLowerCase() && mainCondition[j] === currentWeather) {
            count++; //add one to count if it matches
        }
    }
    if (count > condition) { //after counting, check which is the highest condition number found
                condition = count; //update score
                mostFrequent = currentWeather; //save to variable
            }
        }
    }
    return mostFrequent;
    }
    console.log(getCondition("New Hampshire".trim()))



    //find the average temperature of all cities in a certain state
    //returns the averge temperature as a number
    //stateName {string} - the desired state
    //return {number} - the averge temperature of cities in the state
    function getAvgTemp(stateName){ 
        var totalDailyAvg = 0;//running total of all averages ofund
        var count= 0; 
        //loop through list
        for(var i = 0; i < state.length; i++){
            //check if state matches input
            if(state[i].toLowerCase() === stateName.toLowerCase()) {
            //calculate the average for that city
            //number to ensure data is treated as math
                var cityAvg = (Number(highTemperature[i]) + Number(lowTemperature[i]))/2;
            //add that city's average to the total, increment the counter    
            totalDailyAvg += cityAvg;
            count++
            }
            //divide the sum of all averages by the number of cities found
        } return (totalDailyAvg/count)
    }
    console.log(getAvgTemp("Alabama".trim()))


    //finds the average humidity in a certain city 
    //returns the average humidity in a certain city 
    //cityName {string} - the desired city
    //return {number} - the average humidity in a city 
    function getAvgHumidity(cityName) {
    var totalDailyAvg = 0 //running total of all averages found
    var count = 0 
    //loop through list 
    for (var i = 0; i < city.length;i++){
        //check if city matches inputted city name
        if(city[i].toLowerCase() === cityName.toLowerCase()) {
            //adds that city's average humidity to the total, and increments the counter
           totalDailyAvg += (Number(humidityPercentage[i])); 
           count++
        }
        //divide the sum of all averages by the count 
    } return(totalDailyAvg/count)
    }

    console.log(getAvgHumidity("Las Vegas"))








