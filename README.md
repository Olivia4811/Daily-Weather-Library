# Daily-Weather-Library
The function getCondition() returns the most frequent weather condition in a certain state
# 
##### Returns the name of the most frequent weather condition
###### @param stateName {string} - the desired state
###### @return mostFrequent {string} - the name of the most frequent condition in desired state
**` function getCondition(stateName)`**
#

The function getAvgTemp() returns the average temperature of all cities in a state
#
##### Returns the average temperature of all cities in a certain state
###### @param stateName {string} - the desired state
###### @return (totalDailyAvg/count) {number} - the average temperature as a number of all cities in a certain state
**` function getAvgTemp(stateName)`**
#

The function getAvgHumidity() returns the average humidity in a city
# 
##### Returns the average humidity in a certain city
###### @param cityName {string} - the desired city
###### @return (totalDailyAvg/count) {number} - the average humidity in a city
**` function getAvgHumidity(cityName)`**
#

The function hottestCity() returns the city with the highest temperature in a certain state 
#
##### Returns the city with the highest temperature in a certain state
###### @param chosenState {string} - the desired state
###### @return greatestCity {string} - city with the highest temperature in the state
**` function hottestCity(chosenState)`**
#

The function conditionBreakdown() returns the specific weather condition descriptions and how many times they were recorded for a certain main weather condition in a specific state
#
##### Returns weather condition descriptions and their frequencies for a specific main weather condition in a certain state
###### @param chosenState {string} - desired state
###### @param chosenCondition - desired main weather condition (clouds, clear, snow, or rain)
###### @return conditionStats {string} - each condition and the number of times it has been recorded 
**` function conditionBreakdown(chosenState, chosenCondition)`**
