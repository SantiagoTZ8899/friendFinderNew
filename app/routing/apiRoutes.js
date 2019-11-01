const friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        let userAnswers = req.body.scores;
        const answersArray = [];
        let coolMatch = 0;

        for (let i = 0; i < friendsData.length; i++) {
            let answerDifference = 0;

            for (let j = 0; j < userAnswers.length; j++) {
                answerDifference +=(Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(userAnswers[j])))
            }

            answersArray.push(answerDifference);
        }
        for (let i = 0; i < answersArray.length; i++) {
            if (answersArray[i] <= answersArray[coolMatch]) {
                coolMatch = i;
            }
        }
        // return the coolest match
        let coolestMatch = friendsData[coolMatch];
        res.json(coolestMatch);
        friendsData.push(req.body)
    });

    app.post("/api/clear", function(req, res) {
        friendsData.length = [];
        res.json({
            ok: true
        });
    });
};