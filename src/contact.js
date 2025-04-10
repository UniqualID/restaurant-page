export default function () {
  const create = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  };

  const content = document.getElementById("content");
  content.className = "contact";

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  content.appendChild(heading);

  const form = document.createElement("form");
  form.action = "#";

  // Name field
  const labelName = document.createElement("label");
  labelName.htmlFor = "name";
  labelName.textContent = "Name";
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.name = "name";
  inputName.id = "name";
  inputName.required = true;

  // Email field
  const labelEmail = document.createElement("label");
  labelEmail.htmlFor = "email";
  labelEmail.textContent = "Email";
  const inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.name = "email";
  inputEmail.id = "email";
  inputEmail.required = true;

  // Message field
  const labelMessage = document.createElement("label");
  labelMessage.htmlFor = "message";
  labelMessage.textContent = "Message";
  const textarea = document.createElement("textarea");
  textarea.name = "message";
  textarea.id = "message";

  // Legal checkbox
  const labelLegal = document.createElement("label");
  labelLegal.htmlFor = "legal-checkbox";

  const span = document.createElement("span");
  span.innerHTML = 'I accept the <a href="#">terms and conditions</a>';

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "legal-checkbox";
  checkbox.id = "legal-checkbox";
  checkbox.required = true;

  labelLegal.appendChild(span);
  labelLegal.appendChild(checkbox);

  // Submit button
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Send";

  // Append all to form
  form.appendChild(labelName);
  form.appendChild(inputName);
  form.appendChild(labelEmail);
  form.appendChild(inputEmail);
  form.appendChild(labelMessage);
  form.appendChild(textarea);
  form.appendChild(labelLegal);
  form.appendChild(button);

  // Add form to content
  content.appendChild(form);
}
