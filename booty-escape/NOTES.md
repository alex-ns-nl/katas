Add project notes below

this belongs in the README file...
example scenario from the client:
1. we define a map 4x4
2. in the map, the ship always starts on the left to right
3. the ship doesn't change the root
4. the route is safe if we never encounter royal navy around the ship
5. navy moves vertically
6. the aim is to find out whether a route is safe or not

suggested approach (acceptance test):
first acceptance test:
given we have this map
0,N,0,N,0
0,0,0,0,0
X,0,N,0,0
when we check if the route is safe, 
then the result is not safe

first unit test:
given a map that has no enemies (ie. "this map")
X
when we check if the route is safe,
the result is safe

Suggestion findSome for array within array:
return arr.some(subArray => subArray.includes(searchString))