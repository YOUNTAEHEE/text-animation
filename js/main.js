/*const h1 = document.querySelector('h1');
const text = h1.innerText;
let tags = '';

for (let letter of text) {
	console.log(letter);
	tags += `<span>${letter}</span>`;
}

console.log(tags);
h1.innerHTML = tags;
*/

splitText('h1');
splitText('h2');
//미션 위의 내용을 처리해주는 함수 제작(인수로 선택자 전달)
function splitText(el) {
	const dom = document.querySelector(el);
	let tags = '';

	for (let letter of dom.innerText) tags += `<span>${letter}</span>`;

	dom.innerHTML = tags;
}
//맨위처럼 쓰면 전역변수로 메모리 남아있어서 불필요한 메모리 낭비인데 함수를 쓰면 바로바로 사라지는 지역변수라 메모리 관리 효율적임.
