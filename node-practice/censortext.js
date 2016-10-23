var censoredWords=['sad','bad','mad'];
var customeCencoredWords=[];
function cencor(inStr){
	for (var i in censoredWords){
		inStr.replace(censoredWords[i],"***");
	}
	for (var i in customeCencoredWords){
		inStr.replace(customeCencoredWords[i],"***");
	}
	return inStr;
}

function addCensorWords(word){
	customeCencoredWords.push(word);
}

function getCensorWords(){
	return censoredWords.concat(customeCencoredWords);
}

export.cencor = cencor;
export.addCensorWords= addCensorWords;
export.getCensorWords = getCensorWords;