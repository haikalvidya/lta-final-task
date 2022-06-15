function lexicalAnalyzer(kata_inpt='', elemtIdResult='', elemntIdBox='') {
  if (kata_inpt.length == 0) {
    var kata_inpt = document.getElementById("inputlexical").value;
  }
  if (elemtIdResult.length==0 && elemntIdBox.length==0){
    elemtIdResult = "result-lexical";
    elemntIdBox = "result-lexical-box";
  }
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
  theBox = document.getElementById(elemntIdBox);

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
  document.getElementById(elemtIdResult).innerHTML = '';

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
      document.getElementById(elemtIdResult).innerHTML += 'current word: ' + cur_str + 'is valid<br>';
      cur_str = '';
    }
  }

  // check last state
  if (state == 'acc') {
    document.getElementById(elemtIdResult).innerHTML += 'kalimat yang dimasukkan valid: ' + kata_inpt;
    theBox.className = "alert alert-success";
    return true;
  } else if(state == 'err' || !isInList) {
    document.getElementById(elemtIdResult).innerHTML += 'error<br>';
    theBox.className = "alert alert-danger";
    return false;
  }
}

function parser(kata_inpt='', elemtIdResult='', elemntIdBox='', fromLexical=false) {
  if (kata_inpt == '') {
    kata_inpt = document.getElementById("inputparser").value;
  }
  if (elemtIdResult == '' || elemntIdBox == ''){
    elemtIdResult = "result-parser";
    elemntIdBox = "result-parser-box";
  }
  let listInpt = kata_inpt.toLowerCase().split(' ');
  listInpt.push('EOS');
  
  // get box element to change color if error or success
  theBox = document.getElementById(elemntIdBox);

  // set result to empty string
  if (document.getElementById(elemtIdResult).textContent.includes('Result') || !fromLexical) {
    document.getElementById(elemtIdResult).innerHTML = '';
  } else {
    document.getElementById(elemtIdResult).innerHTML += '<br><br>================================================<br><br>';
  }

  // list all characters on words that we use
  const words = "au ho ibana manuhor maniop mangalului manggadis pinahan sira miyak lem tas";
  let listTerm = words.split(' ');
  let listNonTerm = ['S', 'SB', 'VB', 'OB'];

  // parse table representation
  let parse_table = {};

  // non-term S
  parse_table[['S', '']] = ['ERR'];
  parse_table[['S', 'au']] = ['SB', 'VB', 'OB'];
  parse_table[['S', 'ho']] = ['SB', 'VB', 'OB'];
  parse_table[['S', 'ibana']] = ['SB', 'VB', 'OB'];
  parse_table[['S', 'manuhor']] = ['ERR'];
  parse_table[['S', 'maniop']] = ['ERR'];
  parse_table[['S', 'mangalului']] = ['ERR'];
  parse_table[['S', 'manggadis']] = ['ERR'];
  parse_table[['S', 'pinahan']] = ['ERR'];
  parse_table[['S', 'sira']] = ['ERR'];
  parse_table[['S', 'miyak']] = ['ERR'];
  parse_table[['S', 'lem']] = ['ERR'];
  parse_table[['S', 'tas']] = ['ERR'];
  parse_table[['S', 'EOS']] = ['ERR'];

  // non-term SB
  parse_table[['SB', 'au']] = ['au'];
  parse_table[['SB', 'ho']] = ['ho'];
  parse_table[['SB', 'ibana']] = ['ibana'];
  parse_table[['SB', 'manuhor']] = ['ERR'];
  parse_table[['SB', 'maniop']] = ['ERR'];
  parse_table[['SB', 'mangalului']] = ['ERR'];
  parse_table[['SB', 'manggadis']] = ['ERR'];
  parse_table[['SB', 'pinahan']] = ['ERR'];
  parse_table[['SB', 'sira']] = ['ERR'];
  parse_table[['SB', 'miyak']] = ['ERR'];
  parse_table[['SB', 'lem']] = ['ERR'];
  parse_table[['SB', 'tas']] = ['ERR'];
  parse_table[['SB', 'EOS']] = ['ERR'];

  // non-term VB
  parse_table[['VB', 'ho']] = ['ERR'];
  parse_table[['VB', 'ibana']] = ['ERR'];
  parse_table[['VB', 'au']] = ['ERR'];
  parse_table[['VB', 'manuhor']] = ['manuhor'];
  parse_table[['VB', 'maniop']] = ['maniop'];
  parse_table[['VB', 'mangalului']] = ['mangalului'];
  parse_table[['VB', 'manggadis']] = ['manggadis'];
  parse_table[['VB', 'pinahan']] = ['ERR'];
  parse_table[['VB', 'sira']] = ['ERR'];
  parse_table[['VB', 'miyak']] = ['ERR'];
  parse_table[['VB', 'lem']] = ['ERR'];
  parse_table[['VB', 'tas']] = ['ERR'];
  parse_table[['VB', 'EOS']] = ['ERR'];

  // non-term OB
  parse_table[['OB', 'ho']] = ['ERR'];
  parse_table[['OB', 'ibana']] = ['ERR'];
  parse_table[['OB', 'au']] = ['ERR'];
  parse_table[['OB', 'manuhor']] = ['ERR'];
  parse_table[['OB', 'maniop']] = ['ERR'];
  parse_table[['OB', 'mangalului']] = ['ERR'];
  parse_table[['OB', 'manggadis']] = ['ERR'];
  parse_table[['OB', 'pinahan']] = ['pinahan'];
  parse_table[['OB', 'sira']] = ['sira'];
  parse_table[['OB', 'miyak']] = ['miyak'];
  parse_table[['OB', 'lem']] = ['lem'];
  parse_table[['OB', 'tas']] = ['tas'];
  parse_table[['OB', 'EOS']] = ['ERR'];

  // doing parsing with stacking
  stack = [];
  stack.push('#');
  stack.push('S');

  document.getElementById(elemtIdResult).innerHTML += 'Doing Parsing<br>'

  for(iter_listInpt = 0;stack.length > 0;) {
    theWords = listInpt[iter_listInpt];
    let top = stack[stack.length - 1];

    document.getElementById(elemtIdResult).innerHTML += 'The stack before operation : ' + stack +'<br>';
    document.getElementById(elemtIdResult).innerHTML += 'Top stack : ' + top + '<br>';
    document.getElementById(elemtIdResult).innerHTML += 'The character : ' + theWords + '<br>';

    if (listNonTerm.includes(top)) {
      document.getElementById(elemtIdResult).innerHTML += 'Top stack is in non-term<br>';
      if (parse_table[[top, theWords]][0] != 'ERR') {
        stack.pop();
        let words_pushed = parse_table[[top, theWords]];
        words_pushed
        .slice()
        .reverse()
        .forEach(word => {
          stack.push(word);
        });
      } else {
        document.getElementById(elemtIdResult).innerHTML += '<br>Error occurred<br>';
        break;
      }
    } else if (listTerm.includes(top)) {
      document.getElementById(elemtIdResult).innerHTML += 'Top stack is in term<br>';
      if (top == theWords) {
        stack.pop();
        iter_listInpt++;
        theWords = listInpt[iter_listInpt];
        if (theWords == "EOS") {
          stack.pop();
          if (iter_listInpt <= 3) {
            document.getElementById(elemtIdResult).innerHTML += '<br>Error occurred<br>';
            break;
          }
        }
      } else {
        document.getElementById(elemtIdResult).innerHTML += '<br>Error occurred<br>';
        break;
      }
    } else {
      document.getElementById(elemtIdResult).innerHTML += '<br>Error occurred<br>';
      break;
    }

    document.getElementById(elemtIdResult).innerHTML += 'The stack after operation : ' + stack +'<br><br>';
  }

  if (theWords == 'EOS' && stack.length == 0) {
    document.getElementById(elemtIdResult).innerHTML += 'The input "' + kata_inpt + '" is valid' + '<br>';
    theBox.className = "alert alert-success";
    return true;
  } else {
    document.getElementById(elemtIdResult).innerHTML += 'The input "' + kata_inpt + '" is invalid' + '<br>';
    theBox.className = "alert alert-danger";
    return false;
  }
}

function duoFunction() {
  var kata_inpt = document.getElementById("inputduo").value;
  document.getElementById("result-duo").innerHTML = ''
  if (kata_inpt.length != 0){
    if (lexicalAnalyzer(kata_inpt, "result-duo", "result-duo-box")) {
      if(!parser(kata_inpt, "result-duo", "result-duo-box", true)) {
        document.getElementById("result-duo").innerHTML += 'Error occurred on parser<br>';
        document.getElementById("result-duo-box").className = "alert alert-danger";
      } else {
        document.getElementById("result-duo").innerHTML += 'Valid sentence<br>';
        document.getElementById("result-duo-box").className = "alert alert-success";
      }
    } else {
      document.getElementById("result-duo").innerHTML += 'Error occurred on lexical analyzer<br>';
      document.getElementById("result-duo-box").className = "alert alert-danger";
    }
  } else {
    document.getElementById("result-duo").innerHTML += 'don\'t try to test until you find a bug, all errors case have been coverage<br>';
    document.getElementById("result-duo-box").className = "alert alert-danger";
    Swal.fire({
      text: "Textbox cannot be empty",
      confirmButtonColor: '#52b69a',
      confirmButtonText: 'OK!'
    });
  }
}