const route = require("express").Router();
const {
  questionStore,
  totalMarks,
  difficultyDistribution,
} = require("../data");

function questionPaperGenerator(totalMarks, difficultyDistribution) {
  const questionPaper = [];
  let remainingMarks = totalMarks;

  difficultyDistribution.forEach(({ difficulty, percentage }) => {
    const difficultyQuestions = questionStore
      .sort(() => Math.random() - 0.5)
      .filter((q) => q.difficulty === difficulty);
    const difficultyWeightage = Math.floor((percentage / 100) * totalMarks);

    // Ensure we have enough questions for the selected difficulty
    if (
      difficultyQuestions.length === 0 ||
      difficultyWeightage > remainingMarks
    ) {
      throw new Error(`Insufficient questions for difficulty: ${difficulty}`);
    }

    // Select questions until reaching the specified marks for this difficulty
    let sum = 0;
    const selectedQuestions = difficultyQuestions.reduce((acc, q) => {
      if (q.marks + sum <= difficultyWeightage) {
        sum += q.marks;
        acc.push(q);
      }
      return acc;
    }, []);

    //To address situations where any combinations of questions may not meet the defined difficulty distribution
    if (sum != difficultyWeightage) {
      if (
        difficultyQuestions.length == selectedQuestions.length &&
        sum < difficultyWeightage
      )
        throw new Error(`Insufficient questions for difficulty: ${difficulty}`);
      else
        throw new Error(
          `Invalid distribution: Please change the weightage of the questions.`
        );
    }

    questionPaper.push(...selectedQuestions);
    remainingMarks -= difficultyWeightage;
  });

  // Shuffle the questions to randomize
  questionPaper.sort(() => Math.random() - 0.5);
  return questionPaper;
}

// Route to generate a question paper
route.get("/", (req, res) => {
  try {
    const questionPaper = questionPaperGenerator(
      totalMarks,
      difficultyDistribution
    );
    const totalMarksInQuestionPaper = questionPaper.reduce(
      (sum, ques) => sum + ques.marks,
      0
    );

    if (totalMarksInQuestionPaper !== totalMarks) {
      throw new Error(
        `Invalid distribution: Total marks in the question paper (${totalMarksInQuestionPaper}) do not match the given total marks (${totalMarks}).`
      );
    }
    console.log({questionPaper,
        totalMarks: totalMarksInQuestionPaper,
        questionsCount: questionPaper.length})
    res.status(200).json({
      questionPaper,
      totalMarks: totalMarksInQuestionPaper,
      questionsCount: questionPaper.length,
    });
  } catch (err) {
    console.log({ msg: err.message })
    res.status(500).json({ msg: err.message });
  }
});

module.exports = route;
