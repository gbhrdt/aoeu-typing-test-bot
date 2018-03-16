const input = document.querySelector('#input');
let currentValue;
let currentIndex = 0;

const dispatchChar = (key) => {
  input.dispatchEvent(new KeyboardEvent('keydown', { key }));
  input.value = currentValue.slice(0, currentIndex + 1) + (key === 'Space' ? ' ' : '');
  input.dispatchEvent(new KeyboardEvent('keyup', { key }));
};

const nextChar = () => {
	const nextCurrent = document.querySelector('#currentword');
	if (!nextCurrent) {
		return;
	}

	if (nextCurrent.innerText !== currentValue) {
		currentValue = nextCurrent.innerText;
		currentIndex = 0;
	}

  const key = currentValue[currentIndex];
  dispatchChar(key);

	currentIndex += 1;

	if (currentIndex >= currentValue.length) {
		dispatchChar('Space');
	}

	setTimeout(nextChar, 50);
};

nextChar();
