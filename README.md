## Agenda

We will build the polls application using Express framework. Polls is the go-to tutorial for Django and introduces several concepts. We want to understand how we can achieve similar things with Express.

## Part 1

See https://docs.djangoproject.com/en/4.1/intro/tutorial01/.

* Support url http://localhost:8000/polls/. This should return a response with status code 200.

## Part 2

See https://docs.djangoproject.com/en/4.1/intro/tutorial02/

* Support models Question and Choice
* Add a method, was_published_recently, on model Question

## Part 3

See https://docs.djangoproject.com/en/4.1/intro/tutorial03/

* Add detail, result and vote url.
* Modify index view to return five latest questions.
* Add templating
* Add support for 404 in detail view

## Setup

If running without Docker, execute the following command

  $ node server.js

The above assumes that file `.env` is populated with appropriate database credentials.

If running with Docker, execute the following command

  $ docker run --name express-polls -p 3000:3000 express-polls

This assumes that image `express-polls` exists. Also, this assumes that file `.env.docker` is populated with appropriate database credentials.

## TODO

### Application
- API to add questions
- API to add choices for a question
- API to view question
- API to view choices for a question

- Mongo integration
- Redis integration
- S3 integration

### Infra
- API Gateway
  - Number of requests
  - Check number of requests on each endpoint
  - Play with headers
- Cloudwatch
  - Check application logs
