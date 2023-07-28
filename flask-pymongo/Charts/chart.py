import matplotlib.pyplot as plt
import json

dictionary = json.load(open('myDatabase.inventory.json', 'r'))
xAxis = [key for key, value in dictionary.items()]
yAxis = [value for key, value in dictionary.items()]
plt.grid(True)

## LINE GRAPH ##
plt.plot(xAxis,yAxis, color='maroon', marker='o')
plt.xlabel('region')
plt.ylabel('value')

## BAR GRAPH ##
fig = plt.figure()
plt.bar(xAxis,yAxis, color='maroon')
plt.xlabel('region')
plt.ylabel('value')

plt.show()