// let menuList = document.querySelectorAll(".menu_Links ul li");
// let sections = document.querySelectorAll(".sections > section");

// menuList.forEach(li => {
// 	li.addEventListener("click", e => {
// 		// Remove 'active' class from currently active menu item
// 		let activeMenu = document.querySelector(".menu_Links ul li.active");
// 		if (activeMenu) {
// 			activeMenu.classList.remove("active");
// 		}

// 		// Add 'active' class to clicked menu item
// 		e.target.classList.add("active");

// 		// Show the corresponding section and hide others
// 		sections.forEach((section) => {
// 			if (e.target.textContent === section.dataset.section) {
// 				// Hide currently visible section
// 				let visibleSection = document.querySelector(".sections .visible");
// 				if (visibleSection) {
// 					visibleSection.classList.remove("visible");
// 				}

// 				// Show the clicked section
// 				section.classList.add("visible");
// 			}
// 		});
// 	});
// });


let menu = document.querySelector(".menu_Links ul");
let sections = document.querySelectorAll(".sections > section");

menu.addEventListener("click", e => {
	if (e.target.tagName === 'LI') {
		// Remove 'active' class from currently active menu item
		let activeMenu = document.querySelector(".menu_Links ul li.active");
		if (activeMenu) {
			activeMenu.classList.remove("active");
		}

		// Add 'active' class to clicked menu item
		e.target.classList.add("active");

		// Show the corresponding section and hide others
		sections.forEach((section) => {
			if (e.target.textContent === section.dataset.section) {
				// Hide currently visible section
				let visibleSection = document.querySelector(".sections .visible");
				if (visibleSection) {
					visibleSection.classList.remove("visible");
				}

				// Show the clicked section
				section.classList.add("visible");
			}
		});
	}
});
