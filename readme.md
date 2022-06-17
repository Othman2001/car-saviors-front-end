# Car saviors

(note that this repo is still under progress and more digrams (eerd. , uml class , state machine ,....etc) will be added soon )

Car Saviors is large scale project for eductional purposes. i have used the following :

1. react native
2. typescript
3. overmind js https://overmindjs.org/
4. expo
5. styled components
6. firebase
7. cloud functions
8. firestore

---

## car saviors is offering this services:

1. rent car
2. offer your car for rental
3. request winch to save you
4. see the nearest car workshops for you

---

## the code base is divided in 3 parts

1. front end
   https://github.com/Othman2001/car-saviors-front-end
2. backend cloud functions:
   https://github.com/Othman2001/car-saviors-backend
3. admin dashboard:
   https://github.com/Othman2001/admincars

this repo is about the front end part, so let's talk more about the architecture used the front end code is divided in 3 main parts :

1. appliction folder: which contains all the the business domain state objects (overmind js is dividing the code to state, actions , effects)
2. infrastructure folder: any api / network requests or side effects can be found in this folder
3. presnation folder: all the UI components

about the presnation you will find the code divied in two parts here :

1. components : which is just UI
2. containers : which is wrapper for the component and handles any complex logic

---

## users types:

this application is little complex in terms of authentication and authorization as it offers a lot of services:

1. if user is registerd his car for rental his role in the database will be changed to car-owner (this means he will see anthor navigations than the normal user )
2. if the user is winch driver he will only see the map and the driver profle screen
3. if the user is just normal user he will see the normal navigations

---

## demo

unfortunately till this moment there is no uploaded demo you can download the codebases and run them locally or watch the vedio of the app you want:
https://drive.google.com/file/d/1trzu4Wpaq_IuJnM00OkBpqD9yVINLEkG/view?usp=sharing
https://drive.google.com/file/d/1mhYzYr_bdsusSGCbn3ilYSJN_TeBY3pR/view?usp=sharing
