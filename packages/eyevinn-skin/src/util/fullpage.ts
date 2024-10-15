export function isFullPage(element: HTMLDivElement | HTMLElement) {
	return !!(element.style.position === "fixed");
}

export function setFullPage(element: HTMLDivElement | HTMLElement) {
	element.style.position = "fixed";
	element.style.top = "0";
	element.style.left = "0";
	element.style.bottom = "0";
	element.style.right = "0";
}

export function exitFullPage(element: HTMLDivElement | HTMLElement) {
	element.style.position = "relative";
	element.style.top = "auto";
	element.style.left = "auto";
	element.style.bottom = "auto";
	element.style.right = "auto";
}
