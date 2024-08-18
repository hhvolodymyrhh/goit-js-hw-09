"use strict";

const listenerForm = document.querySelector(".feedback-form");

const formData = {
    email: "",
    message: "",
};

const localDataKey = "feedback-form-state";

//1. при вводі запис значень в formData без пробілів
 function recordValue(event) {
    const email = listenerForm.elements.email.value.trim();
    const message = listenerForm.elements.message.value.trim();
     
     formData.email = email;
     formData.message = message;
//відправлення данних до сховища та приведення до рядка обєкту formData
     localStorage.setItem(localDataKey, JSON.stringify(formData));
    }

function eventSubmit(event) {
    //3. прибрати стандартну поведінку сабміту завантаження сторінки
    event.preventDefault();

    const email = listenerForm.elements.email.value.trim();
    const message = listenerForm.elements.message.value.trim();
    //4. при пустому рядку повернути повідомлення
    if (email === "" || message === "") {
         return alert("Fill please all fields"); 
    } else {
        //5. вивід в консоль обєкту відправлення данних у локальне сховище
        console.log(formData);
        
        //6. сброс значень форми
        listenerForm.reset();
        //видалення значення локального сховища
        localStorage.removeItem(localDataKey);
    };
}

function loadData() {
    //7. якщо локальне сховище не пусте
    if (localStorage.getItem(localDataKey) !== null) {
        //8. розпарсити перевід данних з JSON формату з сховища
        const formDataNev = JSON.parse(localStorage.getItem(localDataKey));
        formData.email = formDataNev.email;
        formData.message = formDataNev.message;
        //9. запис данних в formData
        listenerForm.elements.email.value = formData.email;
        listenerForm.elements.message.value = formData.message;
        return;
    }
    return;
}

loadData();
listenerForm.addEventListener("input", recordValue);
listenerForm.addEventListener("submit", eventSubmit);

//10. очистка сховища
// localStorage.removeItem(localDataKey); 
// повна очистка сховища якщо потрібно
// localStorage.clear();