
export default function () {
	const create = (tag, className, text) => {
		const el = document.createElement(tag);
		if (className) el.className = className;
		if (text) el.textContent = text;
		return el;
	};

	const content = document.getElementById('content');
	content.className = "homepage"

	const splash = create('div', 'splash');
	content.appendChild(splash);

	const info = create('div', 'info');
	content.appendChild(info);

	// Greeting Heading
	const greetingHeading = create('div', 'greeting-heading');
	greetingHeading.appendChild(create('div', 'greetings-subtext', 'A little about us..'));
	greetingHeading.appendChild(create('div', 'greetings-main', 'Who We Are'));
	info.appendChild(greetingHeading);

	// Greeting Text
	const greetingText = create('div', 'greeting-text');
	const paragraphs = [
		`Welcome to ${em('Chez Fauxmier')}, where the wine is older than your father and the waiters judge you silently (but with love).`,
		`Tucked away behind an unmarked door that definitely used to be a locksmith, our bistro redefines exclusivity — mostly by being confusing to find.`,
		`Our chef, who once scowled at Gordon Ramsay on a flight to Lyon, creates dishes so delicate they legally qualify as emotions.`,
		`The bread is baked hourly, the butter has a PhD in culture, and our water sommelier will be with you shortly.`,
		`At ${em('Chez Fauxmier')}, every bite tells a story you don’t quite understand — and that’s exactly the point.`
	];

	paragraphs.forEach(html => {
		const p = document.createElement('p');
		p.innerHTML = html;
		greetingText.appendChild(p);
	});

	// Info Chart
	const infochart = create('div', 'infochart');
	const quads = [
		{
			icon: 'MENU',
			title: 'Price',
			text: `Price does not include drinks.
        The payment will be made in advance, and for the total number of guests of your reservation.`
		},
		{
			icon: 'assets/vegan.svg',
			title: 'Meat and Fish',
			text: `We do not have vegetarian and/or vegan menu.
        Tasting menu or a la carte service, full table.`,
			isImage: true
		},
		{
			icon: 'assets/guests.svg',
			title: 'Guests',
			text: `Party sizes are limited from a minimum of two to a maximum of twelve.
        We recommend children under 12 years of age to go eat a mickeedees instead.
        Guide dogs accepted, but owner must agree to let head chef pet them.`,
			isImage: true
		},
		{
			icon: 'assets/clock.svg',
			title: 'Lunch and Dinner',
			text: 'Lunch starts at 2pm, Dinner at 8pm. Welcome to Europe!',
			isImage: true
		}
	];

	quads.forEach(({ icon, title, text, isImage }) => {
		const infoquad = create('div', 'infoquad');
		const iconHeading = create('div', 'icon-heading');

		const iconDiv = create('div', 'icon');
		if (isImage) {
			const img = document.createElement('img');
			img.src = icon;
			img.alt = icon.split('/').pop();
			iconDiv.appendChild(img);
		} else {
			iconDiv.textContent = icon;
		}

		const h3 = document.createElement('h3');
		h3.textContent = title;

		iconHeading.appendChild(iconDiv);
		iconHeading.appendChild(h3);
		infoquad.appendChild(iconHeading);

		const quadtext = create('div', 'quadtext', text);
		infoquad.appendChild(quadtext);
		infochart.appendChild(infoquad);
	});

	greetingText.appendChild(infochart);
	info.appendChild(greetingText);

	// Second Greeting Heading
	const secondHeading = create('div', 'greeting-heading');
	secondHeading.appendChild(create('div', 'greetings-subtext', 'When are we open?'));
	secondHeading.appendChild(create('div', 'greetings-main', 'Service Hours'));
	info.appendChild(secondHeading);

	// Hours
	const hours = create('div', 'hours greeting-text');
	['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].forEach(day => {
		const hourLine = create('div', 'hour-line');
		hourLine.appendChild(create('p', null, day));

		const line = create('span', 'connectline');
		hourLine.appendChild(line);

		hourLine.appendChild(create('p', null, '2pm - 3am'));
		hours.appendChild(hourLine);
	});

	info.appendChild(hours);

	// Helper function to wrap italic text
	function em(text) {
		return `<em>${text}</em>`;
	}

}