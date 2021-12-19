let fs = require('fs');
let arg = process.argv;
let t = arg[3].toString();
let s = fs.readFileSync(arg[2]).toString();

let m = t.length;
let n = s.length;
let alph = new Array();
let result = new Array();

for (let i = 0; i < m; i++){
	alph[t.charAt(i)] = 0;
}
let del = new Array(m + 1);

for (let j = 0; j <= m; j++){
	del[j] = new Array()
}	

for (i in alph){
	del[0][i] = 0;
}

for (j = 0; j < m; j++){
	prev = del[j][t.charAt(j)];
	del[j][t.charAt(j)] = j + 1;
	for (i in alph){
		del[j + 1][i] = del[prev][i];
	}
}

for (j = 0; j <= m; j++){
	let out = '';
	for (i in alph){
		out += del[j][i] + ' ';
	}
	console.log(j, out);
}

let state = 0;
for (i = 0; i <= n; i++){
	if (s[i] in alph)
		state = del[state][s[i]];
	else
		state = 0;
	if (state == m)
		result.push(i - m + 1);
}
console.log(result);
	