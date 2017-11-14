# React-NYT

A `NodeJS`, `MongoDB`, `Express`, and `ReactJS` application where users can query, display, and save articles from the [New York Times Article Search API](http://developer.nytimes.com/). Users can remove saved articles as well.

## How app works

The user can find the articles from New York Times.

![1](https://user-images.githubusercontent.com/28790452/32760515-3b627220-c8b4-11e7-8443-a6b24be95c19.gif)

The user can save the articles (all articles will be stored in the MongoDB).

![2](https://user-images.githubusercontent.com/28790452/32760518-3c79b164-c8b4-11e7-8942-92a38693cac7.gif)

The user can delete the articles (all articles will be stored in the MongoDB).

![3](https://user-images.githubusercontent.com/28790452/32760520-3e00c9aa-c8b4-11e7-9562-23e447ab22bf.gif)

## Project Installation

There are two methods to download the repository.

#### Method I: Familiar with Git?

Clone this repository, install dependencies, then run the project with the following:

```
> git clone git@github.com:artprofi91/React-NYT.git
> cd React-NYT
> npm install
> npm start
> go to localhost:8080
```

#### Not Familiar with Git?

Click [here](https://github.com/artprofi91/React-NYT) then download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory and:

```
> npm install
> node server.js
> go to localhost:8080
```

#### Hint

Don't forget to start your `mongod` command in the seperate terminal window.
Don't forget to add your NYT API_KEY (helper.js).