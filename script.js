var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Daily%20Weather.csv"
var mainCondition = getColumn(url, 5)
var conditionDesc = getColumn(url,6);
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
var condition = 0; 
var mostFrequent = "State Not Found"; 
for (var i= 0; i < mainCondition.length; i++) { 
    if(state[i].toLowerCase() === stateName.toLowerCase()) {
        var currentWeather = mainCondition[i] 
        var count= 0;
    for (var j = 0; j < state.length; j++) { 
        if (state[j].toLowerCase() === stateName.toLowerCase() && mainCondition[j] === currentWeather) {
            count++; 
        }
    }
    if (count > condition) { 
                condition = count; 
                mostFrequent = currentWeather; 
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
        var totalDailyAvg = 0;
        var count= 0; 
        for(var i = 0; i < state.length; i++){
            if(state[i].toLowerCase() === stateName.toLowerCase()) {
                var cityAvg = (Number(highTemperature[i]) + Number(lowTemperature[i]))/2;
            totalDailyAvg += cityAvg;
            count++
            }
        } return (totalDailyAvg/count)
    }
    console.log(getAvgTemp("Alabama".trim()))


    //finds the average humidity in a certain city 
    //returns the average humidity in a certain city 
    //cityName {string} - the desired city
    //return {number} - the average humidity in a city 
    function getAvgHumidity(cityName) {
    var totalDailyAvg = 0 
    var count = 0 
    //loop through list 
    for (var i = 0; i < city.length;i++){
        if(city[i].toLowerCase() === cityName.toLowerCase()) {
           totalDailyAvg += (Number(humidityPercentage[i])); 
           count++
        }
    } return(totalDailyAvg/count)
    }

    console.log(getAvgHumidity("Las Vegas".trim())


/*Returns the city with the highest temperature for a certain state
@param chosenState {string} - the desired state
@return greatestCity {string} - city with the highest temperature in the state
*/
function hottestCity(chosenState){
var greatestTemp = 0;
var greatestCity = "";
    for (var i = 0; i < state.length; i++){
        if (chosenState.toLowerCase().includes(state[i].toLowerCase()) && highTemperature[i] > greatestTemp){
            greatestTemp = highTemperature[i];
            greatestCity = city[i];
        }
    }
    if(greatestCity == ""){
    greatestCity = "State is not found"
    }  
 return greatestCity
}
console.log(hottestCity("mexico"));


/*Returns weather condition descriptions and the frequencies for a main weather condition in a state
@param chosenState {string} - desired state
@param chosenCondition {stirng} - desired weather condition (clouds, snow, rain, clear)
@return conditionStats {string} - each condition and the number of times it has been recorded
*/
function conditionBreakdown (chosenState, chosenCondition){
var uniqueDesc = [];
    for(i = 0; i < conditionDesc.length; i++){
        if (chosenState.toLowerCase().includes(state[i].toLowerCase()) && chosenCondition.toLowerCase().includes(mainCondition[i].toLowerCase()) && !uniqueDesc.includes(conditionDesc[i])){
            uniqueDesc.push(conditionDesc[i]);
        }
    }
var conditionStats = "";
    for (i = 0; i < uniqueDesc.length; i++){
        var frequency = 0;
            for (j = 0; j < conditionDesc.length; j++){
                if(chosenState.toLowerCase().includes(state[j].toLowerCase()) && chosenCondition.toLowerCase().includes(mainCondition[j].toLowerCase())){
                    if(conditionDesc[j] == uniqueDesc[i]){
                        frequency ++;
                    }
            }
        }
        conditionStats += uniqueDesc[i] + ", "+frequency+"; ";
    }
        if(conditionStats == ""){
    conditionStats = "State/Condition is not found"
    }  
    return conditionStats
}
console.log(conditionBreakdown("mexico", "sun"))











