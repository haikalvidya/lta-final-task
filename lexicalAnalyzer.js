function lexicalAnalyzer() {
  var kata_inpt = document.getElementById("inputlexical").value;
  const kalimat = kata_inpt.toLowerCase() + ' #';
  
	// create finite automata representation
  let fa_relation_repres = {};
  let states = ['q0','q1', 'q2', 'q3','q4', 'q5', 'q6','q7', 'q8', 'q9', 
                'q10', 'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19', 
                'q20', 'q21', 'q22', 'q23', 'q24', 'q25', 'q26', 'q27', 'q28', 'q29', 
                'q30', 'q31', 'q32', 'q33', 'q34', 'q35', 'q36', 'q37', 'q38', 'q39', 
                'q40', 'q41', 'q42'];
  
  // list all characters on words that we use
  const words = "au ho ibana manuhor maniop mangalului manggadis pinahan sira miyak lem tas";
  let listWords = words.split(' ');
  let listChars = words.split('');
  let setChars = [...new Set(listChars)];
  
  // get box element to change color if error or success
  theBox = document.getElementById("result-lexical-box");

  // check kata_inpt is valid by checkin in listWords
  let kata_inpt_list = kata_inpt.split(' ');
  let isInList = true;
  kata_inpt_list.forEach(word => {
    if(!listWords.includes(word)) {
      isInList = false;
      Swal.fire({
        text: "One of the words entered is not in the list",
        confirmButtonColor: '#52b69a',
        confirmButtonText: 'OK!'
      });
    }
  });

  // set result to empty string
  document.getElementById("result-lexical").innerHTML = ''

  // generate fa_relation_repres values
  states.forEach(theState => {
    fa_relation_repres[[theState, "#"]] = 'err';
    fa_relation_repres[[theState, " "]] = 'err';
    setChars.forEach(char => {
      fa_relation_repres[[theState, char]] = 'err';
    });
  });

  // fill fa_relation_repres with word like fa design
  // start and finish state
  fa_relation_repres['q0', ' '] = 'q0';

  fa_relation_repres[['q41', '#']] = 'acc';
  fa_relation_repres[['q41', ' ']] = 'q42';

  fa_relation_repres[['q42', '#']] = 'acc';
  fa_relation_repres[['q42', ' ']] = 'q42';

  // au
  fa_relation_repres[['q0', 'a']] = 'q1';
  fa_relation_repres[['q1', 'u']] = 'q41';
  fa_relation_repres[['q42', 'a']] = 'q1';

  // ho
  fa_relation_repres[['q0', 'h']] = 'q2';
  fa_relation_repres[['q2', 'o']] = 'q41';
  fa_relation_repres[['q42', 'h']] = 'q2';

  // ibana
  fa_relation_repres[['q0', 'i']] = 'q3';
  fa_relation_repres[['q3', 'b']] = 'q4';
  fa_relation_repres[['q4', 'a']] = 'q5';
  fa_relation_repres[['q5', 'n']] = 'q6';
  fa_relation_repres[['q6', 'a']] = 'q41';
  fa_relation_repres[['q42', 'i']] = 'q3';

  // manuhor
  fa_relation_repres[['q0', 'm']] = 'q7';
  fa_relation_repres[['q7', 'a']] = 'q8';
  fa_relation_repres[['q8', 'n']] = 'q9';
  fa_relation_repres[['q9', 'u']] = 'q22';
  fa_relation_repres[['q22', 'h']] = 'q23';
  fa_relation_repres[['q23', 'o']] = 'q24';
  fa_relation_repres[['q24', 'r']] = 'q41';
  fa_relation_repres[['q42', 'm']] = 'q7';

  // maniop
  fa_relation_repres[['q0', 'm']] = 'q7';
  fa_relation_repres[['q7', 'a']] = 'q8';
  fa_relation_repres[['q8', 'n']] = 'q9';
  fa_relation_repres[['q9', 'i']] = 'q20';
  fa_relation_repres[['q20', 'o']] = 'q21';
  fa_relation_repres[['q21', 'p']] = 'q41';
  fa_relation_repres[['q42', 'm']] = 'q7';

  // mangalului
  fa_relation_repres[['q0', 'm']] = 'q7';
  fa_relation_repres[['q7', 'a']] = 'q8';
  fa_relation_repres[['q8', 'n']] = 'q9';
  fa_relation_repres[['q9', 'g']] = 'q10';
  fa_relation_repres[['q10', 'a']] = 'q15';
  fa_relation_repres[['q15', 'l']] = 'q16';
  fa_relation_repres[['q16', 'u']] = 'q17';
  fa_relation_repres[['q17', 'l']] = 'q18';
  fa_relation_repres[['q18', 'u']] = 'q19';
  fa_relation_repres[['q19', 'i']] = 'q41';
  fa_relation_repres[['q42', 'm']] = 'q7';

  // manggadis
  fa_relation_repres[['q0', 'm']] = 'q7';
  fa_relation_repres[['q7', 'a']] = 'q8';
  fa_relation_repres[['q8', 'n']] = 'q9';
  fa_relation_repres[['q9', 'g']] = 'q10';
  fa_relation_repres[['q10', 'g']] = 'q11';
  fa_relation_repres[['q11', 'a']] = 'q12';
  fa_relation_repres[['q12', 'd']] = 'q13';
  fa_relation_repres[['q13', 'i']] = 'q14';
  fa_relation_repres[['q14', 's']] = 'q41';
  fa_relation_repres[['q42', 'm']] = 'q7';

  // pinahan
  fa_relation_repres[['q0', 'p']] = 'q28';
  fa_relation_repres[['q28', 'i']] = 'q29';
  fa_relation_repres[['q29', 'n']] = 'q30';
  fa_relation_repres[['q30', 'a']] = 'q31';
  fa_relation_repres[['q31', 'h']] = 'q32';
  fa_relation_repres[['q32', 'a']] = 'q33';
  fa_relation_repres[['q33', 'n']] = 'q41';
  fa_relation_repres[['q42', 'p']] = 'q28';

  // sira
  fa_relation_repres[['q0', 's']] = 'q34';
  fa_relation_repres[['q34', 'i']] = 'q35';
  fa_relation_repres[['q35', 'r']] = 'q36';
  fa_relation_repres[['q36', 'a']] = 'q41';
  fa_relation_repres[['q42', 's']] = 'q34';

  // miyak
  fa_relation_repres[['q0', 'm']] = 'q7';
  fa_relation_repres[['q7', 'i']] = 'q25';
  fa_relation_repres[['q25', 'y']] = 'q26';
  fa_relation_repres[['q26', 'a']] = 'q27';
  fa_relation_repres[['q27', 'k']] = 'q41';
  fa_relation_repres[['q42', 'm']] = 'q7';

  // lem
  fa_relation_repres[['q0', 'l']] = 'q37';
  fa_relation_repres[['q37', 'e']] = 'q38';
  fa_relation_repres[['q38', 'm']] = 'q41';
  fa_relation_repres[['q42', 'l']] = 'q37';

  // tas
  fa_relation_repres[['q0', 't']] = 'q39';
  fa_relation_repres[['q39', 'a']] = 'q40';
  fa_relation_repres[['q40', 's']] = 'q41';
  fa_relation_repres[['q42', 't']] = 'q39';
  
  // lexical analysis
  let state = 'q0';
  let cur_str = '';
  for (let iter_char = 0;state != "acc" && state != 'err'; iter_char++){
    let cur_char = kalimat.charAt(iter_char);
    cur_str += cur_char;
    state = fa_relation_repres[[state, cur_char]];
    if (state == 'q42'){
      document.getElementById("result-lexical").innerHTML += 'current word: ' + cur_str + 'is valid<br>';
      cur_str = '';
    }
  }

  // check last state
  if (state == 'acc') {
    document.getElementById("result-lexical").innerHTML += 'kalimat yang dimasukkan valid: ' + kata_inpt;
    theBox.className = "alert alert-success"
  } else if(state == 'err' || !isInList) {
    document.getElementById("result-lexical").innerHTML += 'error<br>';
    theBox.className = "alert alert-danger"
  }
}

function parser() {
  const kata_inpt = document.getElementById("inputparser");
  // still in progres
  document.getElementById("result-parser").innerHTML = kata_inpt;
}

