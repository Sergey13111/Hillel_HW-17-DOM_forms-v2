"use strict";

function createNode(element) {
    return document.createElement(element);
};

function append(parent, el) {
    return parent.append(el);
};

function prepend(parent, el) {
    return parent.prepend(el);
};

function removeTask(event) {
    const isRemoveButton = event.target.nodeName === "BUTTON";

    if (isRemoveButton) {
        const messageBlock = event.target.closest(".text-message");
        return messageBlock.remove();
    } 
};

function removeError() {
    const isErrorField = message.classList.contains("error");

    if (isErrorField) {
        message.classList.remove("error");
        errorMessage.classList.remove("alert");
        errorMessage.innerHTML = "";
    }
    return;
}

function getCompletedTask(event) {
    const btnRemove = li.querySelector("button");
    const isChecked = event.target.className === "form-check-input";

    if (isChecked) {
        const chbox = event.target;
        span.classList.add("line-through");
        chbox.disabled = true;
        btnRemove.disabled = true;
    };
}

const form_input = document.forms.form_message;
const {message} = form_input;
const errorMessage = document.querySelector(".error-message");
const ul = document.getElementById("list");

message.onfocus = removeError;
ul.addEventListener("click", (removeTask));

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
    const span = createNode("span")
    const button = createNode("button");

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "completed");
    checkbox.setAttribute("class", "form-check-input")
    li.classList.add("text-message");
    span.innerHTML = message.value;
    button.textContent = "Delete";

    append(ul, li);
    append(li, span)
    prepend(li, checkbox);
    append(li, button);
    form_input.reset();

    ul.addEventListener("change", (event) => {
        const isChecked = event.target.className === "form-check-input";

        if (isChecked) {
            const li = event.target.closest("li");
            const btnRemove = li.querySelector("button");
            const span = li.querySelector("span");
            const chbox = event.target;
            
            span.classList.add("line-through");
            chbox.disabled = true;
            btnRemove.disabled = true;
        };
    });
};









