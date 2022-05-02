# Areas to observe

The [store](src/app/store/root.reducer.ts) folder contains 3 areas.

1. The `Requests` area which stores information on HttpRequests. The selector here is what is being used for the toast message.
2. The `Toast` area which has an action and effect to listen for a toast message and open a toast
3. The root area which deals with the fluff of sending the API request and wiring everything together.

## Service

The [Pokemon.Service](src/app/services//pokemon.service.ts) has a 5000ms delay on the request.
