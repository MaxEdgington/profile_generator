// The node:readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userStory = {};

rl.question("What's your name?", (name) => {
  userStory.name = name;

  rl.question("What's an activity you like doing?", (activity) => {
    userStory.activity = activity;

    rl.question("What do you listen to while doing that?", (music) => {
      userStory.music = music;

      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)",
        (meal) => {
          userStory.meal = meal;

          rl.question(
            "What's your favourite thing to eat for that meal?",
            (food) => {
              userStory.food = food;

              rl.question(
                "Which sport is your absolute favourite?",
                (sport) => {
                  userStory.sport = sport;

                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at!",
                    (superpower) => {
                      userStory.superpower = superpower;

                      console.log(userStory.name + " loves listening to " + userStory.music + " while " + userStory.activity + ", demolishing " + userStory.food + " for " + userStory.meal + ", prefers " + userStory.sport + ", and is amazing at " + userStory.superpower);

                      rl.close;
                      process.exit();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});

