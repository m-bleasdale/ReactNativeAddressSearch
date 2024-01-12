# React Native Address Search

A simple, user friendly React Native app which uses the Google Places API to search and select addresses. A small component of a hypothetical larger project.

I created this as apart of a larger mobile app project which did not get finished. I decided to create a repo out of my location searching mechanic which is fully complete, screen-size responsive and has haptic responses.

It makes use of a react native app to provide a user interface which makes a request based on the typed characters to search for relevant locations (takes into account current users location too). It then makes a request to a custom REST API using express.js which makes a request to the Google Places API and responds with the most relevant locaitons. If a user selects a location, more detailed data is requested and the lcoation ID is saved in state.

Uses expo and React Native.
