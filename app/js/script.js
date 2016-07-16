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
	]
}

var viewModel = {
	init: function() {

	}
};

ko.applyBindings(viewModel.init());