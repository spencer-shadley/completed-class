# Unit 17 Nosql Homework: Workout Tracker

For this assignment, you'll create a workout tracker. You have already been provided with the front end code in the `Develop` folder. This assignment will require you to create Mongo database with a Mongoose schema and handle routes with Express.

## User Story

- As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals quicker when they track their workout progress.

## Demo

- [YouTube](https://youtu.be/yUsxRaOYVG4)

<details>
  <summary>Example network response for http://localhost:3000/api/workouts/range</summary>

```js
Array[10][
  ({
    _id: '5e76f5ace86e9235b4684a98',
    day: '2020-03-22T05:20:44.610Z',
    exercises:
      Array[1][
        {
          _id: '5e76f5bce86e9235b4684a99',
          type: 'cardio',
          name: 'getting toilet paper',
          distance: 2,
          duration: 40
        }
      ],
    __v: 0,
    totalDuration: 40,
    id: '5e76f5ace86e9235b4684a98'
  },
  {
    _id: '5e76f577e86e9235b4684a94',
    day: '2020-03-22T05:19:51.241Z',
    exercises:
      Array[2][
        ({
          _id: '5e76f584e86e9235b4684a95',
          type: 'cardio',
          name: 'Running',
          distance: 8,
          duration: 20
        },
        {
          _id: '5e76f599e86e9235b4684a96',
          type: 'resistance',
          name: 'Squats',
          weight: 500,
          sets: 6,
          reps: 4,
          duration: 10
        })
      ],
    __v: 0,
    totalDuration: 30,
    id: '5e76f577e86e9235b4684a94'
  },
  {
    _id: '5e76f44d1066c12f78789c39',
    day: '2020-03-21T05:14:53.872Z',
    exercises:
      Array[1][
        {
          type: 'resistance',
          name: 'Bench',
          duration: 30,
          distance: 2
        }
      ],
    totalDuration: 30,
    id: '5e76f44d1066c12f78789c39'
  },
  {
    _id: '5e76f44d1066c12f78789c38',
    day: '2020-03-20T05:14:53.872Z',
    exercises:
      Array[1][
        {
          type: 'resistance',
          name: 'Military Press',
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ],
    totalDuration: 20,
    id: '5e76f44d1066c12f78789c38'
  },
  {
    _id: '5e76f44d1066c12f78789c37',
    day: '2020-03-19T05:14:53.872Z',
    exercises:
      Array[1][
        {
          type: 'resistance',
          name: 'Bench Press',
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ],
    totalDuration: 20,
    id: '5e76f44d1066c12f78789c37'
  },
  {
    _id: '5e76f44d1066c12f78789c36',
    day: '2020-03-18T05:14:53.872Z',
    exercises:
      Array[1][
        {
          type: 'resistance',
          name: 'Quad Press',
          duration: 30,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ],
    totalDuration: 30,
    id: '5e76f44d1066c12f78789c36'
  },
  {
    _id: '5e76f44d1066c12f78789c35',
    day: '2020-03-17T05:14:53.872Z',
    exercises:
      Array[1][
        {
          type: 'resistance',
          name: 'Bench Press',
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ],
    totalDuration: 20,
    id: '5e76f44d1066c12f78789c35'
  },
  {
    _id: '5e76f44d1066c12f78789c34',
    day: '2020-03-16T05:14:53.872Z',
    exercises:
      Array[1][
        {
          type: 'resistance',
          name: 'Bench Press',
          duration: 20,
          weight: 285,
          reps: 10,
          sets: 4
        }
      ],
    totalDuration: 20,
    id: '5e76f44d1066c12f78789c34'
  },
  {
    _id: '5e76f44d1066c12f78789c33',
    day: '2020-03-15T05:14:53.872Z',
    exercises:
      Array[1][
        {
          type: 'cardio',
          name: 'Running',
          duration: 25,
          distance: 4
        }
      ],
    totalDuration: 25,
    id: '5e76f44d1066c12f78789c33'
  },
  {
    _id: '5e76f44d1066c12f78789c32',
    day: '2020-03-14T05:14:53.872Z',
    exercises:
      Array[1][
        {
          type: 'resistance',
          name: 'Push Press',
          duration: 25,
          weight: 185,
          reps: 8,
          sets: 4
        }
      ],
    totalDuration: 25,
    id: '5e76f44d1066c12f78789c32'
  })
];
```

  </details>

## Acceptance Criteria

When the user loads the page, they should be given the option to create a new workout, or continue with their last workout.

The user should be able to:

- Add exercises to a previous workout plan.

- Add new exercises to a new workout plan.

- View multiple the combined weight of multiple exercises on the `stats` page.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills

2. Your commit history allows you to revert your code base in the event that you need to return to a previous state

Follow these guidelines for committing:

- Make single purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits

- Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history

- Don't commit half done work, for the sake of your collaborators (and your future self!)

- Test your application before you commit to ensure functionality at every step in the development process

We would like you to have well over 200 commits by graduation, so commit early and often!

## Submission on BCS

You are required to submit the following:

- The URL to the deployed application (instructions are [here](../../17-nosql/supplemental/MongoDBHerokuDeploy.md))

- The URL to the Github repository
