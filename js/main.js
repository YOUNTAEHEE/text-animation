const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');
const tits = main.querySelectorAll('h1');

splitText(tits[0], 0.2);
splitText(tits[1], 0); //querySelector()안에 문자열('h1')이어야하는데 지금 돔(h1이라는 DOM자체) 보내고 있음 그래서 에러 그래서 아래 함수 수정

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

function splitText(el, interval) {
	let tags = '';
	let count = 0;
	for (let letter of el.innerText) {
		tags += `<span style='transition-delay:${interval * count}s;'>${letter}</span>`; //이게 인라인 스타일
		count++;
	}
	el.innerHTML = tags;
}
