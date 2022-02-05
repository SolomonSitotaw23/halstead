const calculate = document.getElementById("calculate");
const goBack = document.getElementById("goBack");
const container = document.getElementById("container");
const errorMsg = document.getElementById("errorMsg");

errorMsg.classList.add("disabled");

let programLengthAns = document.getElementById("programLengthAns");
let programVocabularyAns = document.getElementById("programVocabularyAns");
let programVolumeAns = document.getElementById("programVolumeAns");
let programDifficultyAns = document.getElementById("programDifficultyAns");
let programLevelAns = document.getElementById("programLevelAns");
let programEffortAns = document.getElementById("programEffortAns");
let programmingTimeAns = document.getElementById("programmingTimeAns");

let programBugsAns = document.getElementById("programBugsAns");

let programLength, programVocabulary;

calculate.addEventListener("click", () => {
  let dOperator = document.getElementById("dn1").value; //n1 //! Getting Distinct  Operators
  let tOperator = document.getElementById("tn1").value; //N1 //!   ""    total     Operators
  let dOperands = document.getElementById("dn2").value; //n2 //!   ""    distinct  Operands
  let tOperands = document.getElementById("tn2").value; //N2 //!   ""    total     Operands
  //!______________________________________Getters_____________________________________

  programLength = parseInt(tOperator) + parseInt(tOperands); //!Length
  programVocabulary = parseInt(dOperator) + parseInt(dOperands); //!Vocabulary
  let programVolume = calculateVolume(programLength, programVocabulary); //!Volume
  let programDifficulty = calculateDifficulty(dOperator, tOperands, dOperands); //!difficulty
  let programLevel = calculateLevel(programDifficulty); //!Level
  let programEffort = calculateEffort(programDifficulty, programVolume); //!Effort
  let programTime = calculateTime(programEffort); //!Time
  let programBugs = calculateBugs(programEffort); //!Bugs
  // ! ___________________________Outputs______________________________________________
  programLengthAns.placeholder = "Program Length = " + programLength; //! length
  programVocabularyAns.placeholder =
    "Program Vocabulary = " + programVocabulary; //!Vocabulary
  programVolumeAns.placeholder = "Program Volume = " + programVolume; //!Volume
  programDifficultyAns.placeholder =
    "Program Difficulty = " + programDifficulty; //!difficulty
  programLevelAns.placeholder = "Program Level = " + programLevel; //!Level
  programEffortAns.placeholder = "Program Effort = " + programEffort; //!Effort
  programmingTimeAns.placeholder = "Program Time = " + programTime; //!Time
  programBugsAns.placeholder = "Program Bugs = " + programBugs; //!Time

  if (
    dOperator == "" ||
    tOperator == "" ||
    dOperands == "" ||
    tOperands == ""
  ) {
    errorMsg.classList.remove("disabled");
  } else {
    container.classList.add("right-panel-active");
    errorMsg.classList.add("disabled");
  }
});

//! Volume calculator
function calculateVolume(programLength, programVocabulary) {
  programLength = parseInt(programLength);
  programVocabulary = parseInt(programVocabulary);

  let programVolume =
    (Math.log(programVocabulary) / Math.log(2)) * programLength;

  return programVolume;
}

//! Difficulty calculator
function calculateDifficulty(n1, N2, n2) {
  n1 = parseInt(n1);
  N2 = parseInt(N2);
  n2 = parseInt(n2);

  let programDifficulty = (n1 / 2) * (N2 / n2);

  return programDifficulty;
}

//! program Level calculator
function calculateLevel(difficulty) {
  difficulty = parseFloat(difficulty);

  let programLevel = 1 / difficulty;

  return programLevel;
}

//! program Effort calculator
function calculateEffort(difficulty, volume) {
  difficulty = parseFloat(difficulty);
  volume = parseFloat(volume);

  let programEffort = difficulty * volume;

  return programEffort;
}
//! program Time calculator
function calculateTime(effort) {
  effort = parseFloat(effort);

  let programTime = effort / 18;

  return programTime;
}

//! program Bugs calculator
function calculateBugs(effort) {
  effort = parseFloat(effort);
  effortsqu = effort * effort;

  let programBugs = Math.cbrt(effortsqu);
  return programBugs;
}

goBack.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
