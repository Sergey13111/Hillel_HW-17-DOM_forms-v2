function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.append(el);
}

function prepend(parent, el) {
    return parent.prepend(el);
}

const form_input = document.forms.form_message;
const {message} = form_input;
const errorMessage = document.querySelector(".error-message");
const ul = document.getElementById("list");

form_input.onsubmit = (event) => {
    event.preventDefault();
    
    if (message.value.trim().length === 0) {
        message.classList.add("error");
        errorMessage.classList.add("alert");
        errorMessage.innerHTML = "Message field is required";
        return;
    }

    const li = createNode("li");
    const checkbox = createNode("input");
    const button = createNode("button");

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "completed");
    checkbox.setAttribute("class", "form-check-input")
    li.classList.add("text-message");
    li.innerHTML = message.value;
    button.textContent = "Delete";
    append(ul, li);
    prepend(li, checkbox);
    append(li, button);
    form_input.reset();

    const chbox = li.querySelector("input[name='completed']");

    chbox.onchange = ({target:{checked}}) => {
        button.disabled = checked;
        chbox.disabled = checked;
        li.classList.add("line-through");
    }
};

message.onfocus = () => {
    const isErrorField = message.classList.contains("error");
  
    if (isErrorField) {
        message.classList.remove("error");
        errorMessage.classList.remove("alert");
        errorMessage.innerHTML = "";
    }
}

ul.addEventListener("click", (event) => {
    const isRemoveButton = event.target.nodeName === "BUTTON";

    if (isRemoveButton) {
        const messageBlock = event.target.closest(".text-message");
        messageBlock.remove();
    } 
});


