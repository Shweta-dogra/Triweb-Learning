# Quiz Manager Application
- This application is basically creating and using quiz by different users.
- Multiple users can give the quiz and get their result.
- The user who created the quiz only can update , delete &  publish the quiz.

## Tech Stack Used:
NodeJS, ExpressJS, Mongoose

* [Main](./src/app.ts)
    In this file first level of routing , database connection and port configuration is done.

* [Routes](./src/routes/)
    All the second level of routing is done in these files that is creating API calls and connecting api's with functions like login, creating & publishing quizes, playing quizes and getting reports.

* [Controllers](./src/controllers/)
    In these files all the functions for performing different operations are created.

* [Helper](./src/helper/)
    A basic program is written for throwing custom errors in this projects in typical situations.

* [Middleware](./src/middlewares/)
    A middleware is created for authentication and authorization in this projet for different actions of users.

* [Models](./src/models/)
    These are the different formats for saving data in database.