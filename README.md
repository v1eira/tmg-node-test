# TMG NodeJS Test

## Installation

Once you have [Node.js](https://nodejs.org/en/) installed, install the dependencies running:

```bash
$ npm install
```

## Running the app

After doing the previous step, simply run:

```bash
$ npm run start
```

The server will start on localhost, port 3000.

## Running the tests

Some unit tests were made in order to assure the functionalities are working fine. These files test the behavior of the controllers and the repositories of the 2 models defined: stack and store. To run these tests, simply do:

```bash
$ npm run test
```

This will run all the tests inside the ```test``` directory.

## Architecture

I decided to use TypeScript in this solution because it offers more flexibility to implement a pattern like DDD, providing interfaces to work with and improving code quality by making it easier to apply SOLID principles. This project was built using the DDD (Domain Driven Design) concept, with 4 layers as follows:

![solution-diagram](/images/solution-diagram.png)

### Data
Contains the implementation of the use cases defined in the domain layer making use of the repositories interfaces defined and exported in this layer.

### Domain
Has the definition (interfaces) of all models and use cases that should be used and implemented throughout the application.

### Infra
This layer implements and exports the repositories defined in the data layer.

### Presentation
This layer has the implementation of the controllers that are going to handle the requests on the app routes. It also contain the definition and implementation of errors and validation helpers.

This solution has another layer, ```Main```, that is responsible for just connecting everything and make the application run. It has all the application routes and factories implementations, which are used in these routes in order to abstract the instantiation of the controllers.

<b>Another solution would be possible with plain JS, using concrete classes instead of the abstractions contained in these files. By doing so, we would have classes with their own methods and properties being exposed to the rest of the application.</b>

## Routes

All routes start with the address ```http://localhost:3000```.

### Stack routes

#### Add
Description: Add a value to the stack.

Route: ```/stack/add```

Expected body:
```
{
	"value": 3
}
```

#### Get
Description: Retrieve value from the top of the stack.

Route: ```/stack/get```

Response:
```
3
```

### Store routes

#### Set
Description: Set value for provided key in the store. The param "ttl" is optional and should be provided as a number, meaning the number of seconds this value will be available in the store.

Route: ```/store/set```

Expected body:
```
{
	"key": "name",
	"value": "Larry",
	"ttl": 20
}
```

#### Get
Description: Retrieve value from the store for the provided key.

Route: ```/store/get```

Expected body:
```
{
	"key": "name"
}
```

Response:
```
"Larry"
```

#### Delete
Description: Delete the provided key and its value from the store.

Route: ```/store/delete```

Expected body:
```
{
	"key": "name"
}
```