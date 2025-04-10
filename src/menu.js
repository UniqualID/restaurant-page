export default function () {
	const create = (tag, className, text) => {
		const el = document.createElement(tag);
		if (className) el.className = className;
		if (text) el.textContent = text;
		return el;
	};

	const content = document.getElementById('content');
	content.className = "menu";
	const menu = create('div', 'menu-container');
	content.appendChild(menu);

	menu.appendChild(create('h1', null, 'MENU'));

	const sections = [
		{
			heading: 'Entrées',
			items: [
				'Soupe à l’oignon',
				'Salade de chèvre chaud',
				'Rillettes de canard',
				'Tarte fine aux tomates et moutarde',
			],
		},
		{
			heading: 'Plats principaux',
			items: [
				'Boeuf Bourguignon',
				'Confit de canard',
				'Truite amandine',
				'Gratin dauphinois et ratatouille',
			],
		},
		{
			heading: 'Desserts',
			items: [
				'Tarte Tatin',
				'Île flottante',
				'Moelleux au chocolat',
				'Crème brûlée',
			],
		},
	];

	sections.forEach(({ heading, items }) => {
		menu.appendChild(create('h2', null, heading));
		const ul = document.createElement('ul');
		items.forEach(item => {
			const li = document.createElement('li');
			li.textContent = item;
			ul.appendChild(li);
		});
		menu.appendChild(ul);
	});

	const easterEgg = create("div", "hidden", "If you're wondering where the prices are, you don't belong here. Hon hon hon");
	content.appendChild(easterEgg)
}