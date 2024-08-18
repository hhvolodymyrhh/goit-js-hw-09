"use strict";

const listenerForm = document.querySelector(".feedback-form");

const formData = {
    email: "",
    message: "",
};

listenerForm.addEventListener("input", recordValue);
//1. при вводі запис значень в formData без пробілів
 function recordValue(event) {
    const email = listenerForm.elements.email.value;
    const message = listenerForm.elements.message.value;
     
     formData.email = email.trim();
     formData.message = message.trim();
     //2. видалення значень з локального сховища
     if (email || message) {localStorage.removeItem(localDataKey);};
    }

listenerForm.addEventListener("submit", eventSubmit);
const localDataKey = "feedback-form-state";

function eventSubmit(event) {
    //3. прибрати стандартну поведінку сабміту завантаження сторінки
    event.preventDefault();

    const email = listenerForm.elements.email.value.trim();
    const message = listenerForm.elements.message.value.trim();
    //4. при путому рядку повернути повідомлення
    if (email === "" || message === "") {
         return alert("Fill please all fields"); 
    } else {
        //5. вівід в консоль обєкту відправлення данних у локальне сховище
        console.log(formData);
        localStorage.setItem(localDataKey, JSON.stringify(formData));
        //6. сброс значень форми
        listenerForm.reset();
    };
}

function loadData(event) {
    //7. якщо локальне сховище не пусте
    if (localStorage.getItem(localDataKey) !== null) {
        //8. розпарсити перевід данних з JSON формату з сховища
        const formDataNev = JSON.parse(localStorage.getItem(localDataKey));
        formData.email = formDataNev.email;
        formData.message = formDataNev.message;
        //9. запис данних в formData
        listenerForm.elements.email.value = formData.email;
        listenerForm.elements.message.value = formData.message;
    }
    //10. очистка сховища
    localStorage.removeItem(localDataKey);
    
// повна очистка сховища якщо потрібно
// localStorage.clear();
}
loadData();