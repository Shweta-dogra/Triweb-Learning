# Quiz Manager Application
- It is a quiz application in which REST API's are used.
- This application is based on creating and using quizes by different users.
- Multiple users can give the quiz and get their result.
- The user who created the quiz only can update , delete & publish the quiz.

## Tech Stack Used:
NodeJS v18.12.1, ExpressJS v4.18.2, Typescript v5.2.2, Mongoose v7.3

## How to use this repo:
After cloning this repository, open the terminal and run following code.
- yarn init
- yarn start (to run the project)

# Folder Structure:
- Quiz-Manger-App
    * [src](./src/):
        * [Main](./src/app.ts): 
            In this file first level of routing , database connection and port configuration is done.

        * [Routes](./src/routes/): 
            All the second level of routing is done in these files that is creating API calls and connecting api's with functions like login, creating & publishing quizes, playing quizes and getting reports.

        * [Controllers](./src/controllers/): 
            In these files all the functions for performing different operations are created.

        * [Helper](./src/helper/): 
            A basic program for throwing custom errors in this projects in typical situations.

        * [Middleware](./src/middlewares/): 
            A middleware for authentication and authorization in this project for different actions of users.

        * [Models](./src/models/): 
            These are the different formats for saving data in database.

