$("body").on("keyup keydown keypress change", "input", function (e) {
	const $this_input = $(this);
	const $this_row = $this_input.closest("[data-tariff-percent]");
	// going up through the acestors to get to tariff in row
	const $span_pre_total = $this_row.find(".pre_total").find("span");
	const $span_post_total = $this_row.find(".post_total").find("span");
	let qty = $this_row.find(".qty").find("input").val();
	// .qty gets the cell, from the cell find the descendant input, throw that in the variable called Qty
	let cost = $this_row.find(".cost").find("input").val();
	let tariff = $this_row.data("tariff-percent");
	// the data attribute is on the tr tag as data-tariff-percent
	// let can be changed

	qty = parseFloat(qty);
	// in JS, what happens on the right of the = happens first
	cost = parseFloat(cost);
	tariff = parseFloat(tariff);

	let tariff_decimal = tariff / 100;
	// dividing tariff by 100 to change pct to decimal
	let pre_tariff = qty * cost;
	let post_tariff = (qty * cost) * (1 + tariff_decimal);

	console.log("Qty", qty);
	console.log("Cost", cost);
	console.log("Tariff", tariff);

	console.log("pre_tariff", pre_tariff);
	console.log("post_tariff", post_tariff);

	$span_pre_total.text(pre_tariff);
	// this shows the pre_tariff value on the page
	$span_post_total.text(post_tariff);
});

$("body").on("click", ".calculate", function (e) {
	e.preventDefault();

	let pre_total = 0;

	$(".pre_total").each(function () {
		const $this_pre_total = $(this);
		const $this_pre_total_span = $this_pre_total.find("span");

		let value = $this_pre_total_span.text();

		value = parseFloat(value);

		pre_total = pre_total + value;

	});

	console.log("Working");
	console.log("pre_total");

	let post_total = 0
	$(".post_total").each(function () {
		// targeting the post_total class/cells
		const $this_post_total = $(this);
		const $this_post_total_span = $this_post_total.find("span");

		let value = $this_post_total_span.text();

		value = parseFloat(value);

		post_total = post_total + value;

	});

	$("#pre_total").find("span").text(pre_total);
	// targeting the id=pre_total, finding the total before tariff in each cell
	$("#post_total").find("span").text(post_total);



	// console.log("Working");
	// console.log("pre_total");



});