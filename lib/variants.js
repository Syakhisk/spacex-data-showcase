const parent = {
	anim: {
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const parent2 = {
	anim: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 1.3,
		},
	},
};

const scaleUp = {
	init: {
		scale: 0.5,
		opacity: 0,
	},
	anim: {
		scale: 1,
		opacity: 1,
	},
};

const landingItemsInit = {
	scale: 0.5,
	opacity: 0,
	marginTop: -150,
};

const landingItemsAnim = {
	scale: 1,
	opacity: 1,
	marginTop: 20,
	transition: {
		delay: 0.5,
	},
};

const fade = {
	init: {
		opacity: 0,
	},
	anim: {
		opacity: 1,
	},
};

export {
	parent,
	parent2,
	fade,
	scaleUp,
	landingItemsInit,
	landingItemsAnim,
};
