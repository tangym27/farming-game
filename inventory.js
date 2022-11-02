const inventory_panel = document.getElementById('inventory_panel');
const inventory = document.getElementById('inventory');
const seeds = document.getElementById('seeds');
const tools = document.getElementById('tools');

// toggle inventory panel on/off with "i" key
function keyPressed() {
	if (key=="i") {
		if (inventory_panel.classList.contains('hidden')) {
			inventory_panel.classList.remove('hidden');
		} else {
			inventory_panel.classList.add('hidden');
		}
	}
}