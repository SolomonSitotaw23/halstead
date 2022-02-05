const calculate = document.getElementById("calculate");
const signInButton = document.getElementById("goBack");
const container = document.getElementById("container");

let programLengthAns = document.getElementById("programLengthAns");
let programVocabularyAns = document.getElementById("programVocabularyAns");
let programVolumeAns = document.getElementById("programVolumeAns");

let programLength, programVocabulary;

calculate.addEventListener("click", () => {
  let dOperator = document.getElementById("dn1").value; //n1
  let tOperator = document.getElementById("tn1").value; //N1
  let dOperands = document.getElementById("dn2").value; //n2
  let tOperands = document.getElementById("tn2").value; //N2

  container.classList.add("right-panel-active");
  programLength = parseInt(tOperator) + parseInt(tOperands);
  programVocabulary = parseInt(dOperator) + parseInt(dOperands);
  let programVolume = calculateVolume(programLength, programVocabulary);

  programLengthAns.placeholder = "Program Length = " + programLength;
  programVocabularyAns.placeholder =
    "Program Vocabulary = " + programVocabulary;

  programVolumeAns.placeholder = "Program Volume = " + programVolume;
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
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
function calculateDifficulty(n1, N2,n2) {
  programLength = parseInt(programLength);
  programVocabulary = parseInt(programVocabulary);

  let programDifficulty = (n1/2)*(N2/n2)

  return programDifficulty;
}


