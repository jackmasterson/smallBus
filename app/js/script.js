var model = {
	bagels: [
		{
			type: "Plain"
		},
		{
			type: "Everything"
		},
		{
			type: "Salt"
		},
		{
			type: "Cinammon Raisin"
		},
		{
			type: "Poppy Seed"
		},
		{
			type: "Whole Wheat"
		}
	],
	cheese: [
		{
			type: "Plain"
		},
		{
			type: "Veggie"
		},
		{
			type: "Honey"
		},
		{
			type: "Apple Cider"
		},
		{
			type: "Mango"
		}
	],
	get: [
		{
			type: "Come for the bagels"
		},
		{
			type: "Stay for the friends"
		},
		{
			type: "(555)555 5555"
		},
		{
			type: "514 Sunset Drive"
		},
		{
			type: "SG, NJ 08762"
		}
	]
}

var viewModel = {
	init: function() {

	}
};

ko.applyBindings(viewModel.init());