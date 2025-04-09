
export default function() {
	const contentNode = document.querySelector("#content")	
	
	const div = document.createElement("div")
	div.textContent = "homepage"
	contentNode.appendChild(div)
	contentNode.classList = "homepage"
}