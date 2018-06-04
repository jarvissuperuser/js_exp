function solution(S,L){
	var words = S.split(" ");
	var errlen = false;
	let cnt = 0; 
	words.some((w)=>{
		errlen = w.length > L;
		return errlen;
	});
	console.log(errlen,cnt);
	let final_word = "";
	let msg_cnt = 0;
	let word_joiner = (a,b)=>{
		return a + " "  +b;
	}
	let l_test = (str)=>{
		return str.length <= L;
	}
	reset = () =>{
		cnt = 0;
		msg_cnt = 0;
	}
	let message_build = (ws,shift)=>{
		let pos = shift?shift:0;
	 	while(cnt<ws.length-pos){
			final_word += word_joiner(final_word,ws[cnt+pos]);
			final_word = final_word.trim();
			while (l_test(word_joiner(final_word,ws[cnt+pos+1]))){
				cnt++;
				final_word = word_joiner(final_word,ws[cnt+pos]);
			};
			//if (final_word) break;
			cnt++;
			msg_cnt++;
			console.log(final_word);
			final_word = "";
		}
		console.log(pos+msg_cnt);
	};
	message_build(words);
	reset();
	message_build(words,2);
	reset();
	message_build(words,1)
	
}

let string = process.argv.splice(2)[0];

solution(string,6);
