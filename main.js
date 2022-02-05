const calculate = document.getElementById("calculate");
const goBack = document.getElementById("goBack");
const container = document.getElementById("container");

let programLengthAns = document.getElementById("programLengthAns");
let programVocabularyAns = document.getElementById("programVocabularyAns");
let programVolumeAns = document.getElementById("programVolumeAns");
let programDifficultyAns = document.getElementById("programDifficultyAns");
let programLevelAns = document.getElementById("programLevelAns");



let programLength, programVocabulary;

calculate.addEventListener("click", () => {
  let dOperator = document.getElementById("dn1").value; //n1
  let tOperator = document.getElementById("tn1").value; //N1
  let dOperands = document.getElementById("dn2").value; //n2
  let tOperands = document.getElementById("tn2").value; //N2
//!______________________________________Getters_____________________________________
  container.classList.add("right-panel-active");
  programLength = parseInt(tOperator) + parseInt(tOperands);
  programVocabulary = parseInt(dOperator) + parseInt(dOperands);
  let programVolume = calculateVolume(programLength, programVocabulary);
  let programDifficulty = calculateDifficulty(dOperator, tOperands, dOperands);
  let programLevel = calculateLevel(programDifficulty);
  let programEffort = calculateEffort(programDifficulty,programVolume);



  // ! ___________________________Outputs______________________________________________
  programLengthAns.placeholder ="Program Length = " + programLength;                //! length
  programVocabularyAns.placeholder = "Program Vocabulary = " + programVocabulary;   //!Vocabulary
  programVolumeAns.placeholder = "Program Volume = " + programVolume;               //!Volume
  programDifficultyAns.placeholder = "Program Difficulty = " + programDifficulty;   //!difficulty
  programLevelAns.placeholder = "Program Level = " + programLevel;                  //!Level




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
  difficulty = parseInt(difficulty);

  let programLevel = (1 / difficulty);

  return programLevel;
}

//! program Effort calculator
function calculateEffort(difficulty,volume) {
  difficulty = parseInt(difficulty);
  volume = parseInt(volume);

  let programEffort = (difficulty * volume);

  return programEffort;
}



goBack.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
