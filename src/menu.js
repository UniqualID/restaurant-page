
export default function() {
	const contentNode = document.querySelector("#content")	
	const div = document.createElement("div")
	div.textContent = "menu"
	contentNode.appendChild(div)
}