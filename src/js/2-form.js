"use strict";

const listenerForm = document.querySelector(".feedback-form");

const formData = {
    email: "",
    message: "",
};

listenerForm.addEventListener("input", recordValue);

 function recordValue(event) {
    const email = listenerForm.elements.email.value;
    const message = listenerForm.elements.message.value;
     
     formData.email = email.trim();
     formData.message = message.trim();
     if (email || message) {localStorage.removeItem(localDataKey);};
    }

listenerForm.addEventListener("submit", eventSubmit);
const localDataKey = "feedback-form-state";

function eventSubmit(event) {
    event.preventDefault();

    const email = listenerForm.elements.email.value.trim();
    const message = listenerForm.elements.message.value.trim();

    if (email === "" || message === "") {
         return alert("Fill please all fields"); 
    } else {
    console.log(formData)
        listenerForm.reset();
    
        localStorage.setItem(localDataKey, JSON.stringify(formData))
    };
}

function loadData(event) {
    if (localStorage.getItem(localDataKey) !== null) {
        const formDataNev = JSON.parse(localStorage.getItem(localDataKey));
        formData.email = formDataNev.email;
        formData.message = formDataNev.message;

        listenerForm.elements.email.value = formData.email;
        listenerForm.elements.message.value = formData.message;
    }
    
    localStorage.removeItem(localDataKey);
    
// повна очистка сховища якщо потрібно
// localStorage.clear();
}
loadData();