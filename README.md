# React Native Address Search

A simple, user friendly React Native app which uses the Google Places API to search and select addresses. A small component of a hypothetical larger project.

I created this as apart of a larger mobile app project which did not get finished. I decided to create a repo out of my location searching mechanic which is fully complete.

Uses expo and React Native.


## How it works

- It makes use of a react native app to provide a user interface which makes a request based on the typed characters to search for relevant locations (takes into account current users location too by favouring closest locations). 

- It then makes a request to a custom REST API using express.js which makes a request to the Google Places API and responds with the most relevant locations. If a user selects a location, more detailed data is requested and the lcoation ID is saved in state.

- Users can also select current location, which uses the GPS location of the device.

- The system is complete with screen-size responsiveness, haptic responses, and animations to add a finishing touch and a sense of professionalism.

![image](https://github.com/m-bleasdale/ReactNativeAddressSearch/assets/90987696/f17ef941-6c8f-4c52-acd8-117226fd4fa9)

