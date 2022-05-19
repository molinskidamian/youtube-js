class VerticalNav {
	constructor() {
		this.button = document.querySelector('.switch-menu');
		this.menu = document.querySelector('.vertical-nav');
		this.menuHidden = document.querySelector('.vertical-nav--hidden');
		this.init();
	}

	init = () => {
		this.button.addEventListener('click', this.switchMenu);
	};

	switchMenu = () => {
		this.menu.classList.toggle('vertical-nav--hidden');
		console.log('menuToggle');
	};
}

const verticalMenu = new VerticalNav();
