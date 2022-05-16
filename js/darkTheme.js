class DarkTheme {
	constructor() {
		this.btn = document.querySelector('#checkbox-theme');
		this.theme = localStorage.getItem('theme');
		this.init();
	}

	init(e) {
		if (this.theme) {
			document.documentElement.setAttribute('data-theme', this.theme);
			this.theme === 'dark' ? (this.btn.checked = true) : (this.btn.checked = true);
		}
		this.btn.addEventListener('change', this.switchTheme);
	}

	switchTheme(e) {
		const theme = e.target.checked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}
}

const darkTheme = new DarkTheme();
