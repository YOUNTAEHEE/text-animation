const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');
const tits = main.querySelectorAll('h1');

splitText(tits[0]);
splitText(tits[1]); //querySelector()안에 문자열('h1')이어야하는데 지금 돔(h1이라는 DOM자체) 보내고 있음 그래서 에러 그래서 아래 함수 수정

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		activation(btns, idx);
		activation(boxs, idx);
	});
});

function activation(arr, idx) {
	arr.forEach((el) => el.classList.remove('on'));
	arr[idx].classList.add('on');
}

function splitText(el) {
	let tags = '';
	for (let letter of el.innerText) tags += `<span>${letter}</span>`;
	el.innerHTML = tags;
}
