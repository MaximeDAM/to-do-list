const task = document.getElementById("task");
const add = document.getElementById("add");
const edit = document.getElementById("edit-");
const article= document.querySelector(".article");
let counter = [];
let regex = /[a-zA-Z0-9_&é"'(è_çà)=]/;

add.addEventListener("click", function addOneTache(e) {

    if (regex.test(task.value)) {
        e.preventDefault();
        counter.push(counter.length)
        let newUl = document.createElement("ul");
        let newLi = document.createElement("li");
        let newInput = document.createElement("input");
        let newLabel = document.createElement("label");
        let newEdit = document.createElement("button");
        let newSupr = document.createElement("button");
        let newSave = document.createElement("button");
        let newCancel = document.createElement("button");

        function addUl() {
            newUl.className = "ListTodo__task";
            article.appendChild(newUl);
        }
        function addLi() {
            newLi.className = "formTodo__task";
            newUl.appendChild(newLi);
        }

        function addLabel() {
            newLabel.setAttribute("for", "toDo-" + counter.length);
            newLabel.innerText = task.value;
            newLi.appendChild(newLabel);
            task.value = "";
        }

        function addCheckbox() {
            newInput.type = "checkbox";
            newInput.name = "toDo-" + counter.length;
            newInput.id = "toDo-" + counter.length;
            newLi.appendChild(newInput);
        }


        function addBtnEdit() {
            newEdit.id = "edit";
            newEdit.innerText = "Editer";
            newEdit.classList.add("btnTodo");
            newLi.appendChild(newEdit);
        }

        function addBtnSupr() {
            newSupr.id = "supr";
            newSupr.innerText = "Supprimer";
            newSupr.classList.add("btnTodo");
            newLi.appendChild(newSupr);
        }
        
        addUl()
        addLi()
        addCheckbox();
        addLabel();
        addBtnEdit();
        addBtnSupr();

        newEdit.addEventListener("click", function editTache(e) {
            e.preventDefault();
            newLi.replaceChild(newInput, newLabel);
            newInput.type = "text";
            newInput.value = newLabel.innerText;
            newInput.setAttribute("size", newLabel.innerText.length - 13)
            newLi.replaceChild(newSave, newEdit);
            newSave.id = "save";
            newSave.innerText = "Valider"
            newLi.replaceChild(newCancel, newSupr);
            newCancel.id = "cancel";
            newCancel.innerText = "Annuler"

            newSave.addEventListener("click", function saveTache(e) {
                e.preventDefault();
                newLi.replaceChild(newLabel, newInput);
                newLabel.innerText = newInput.value;
                newInput.type = "checkbox";
                newLi.insertBefore(newInput, newLabel);

                newLi.replaceChild(newEdit, newSave);
                newLi.replaceChild(newSupr, newCancel);
            });

            newCancel.addEventListener("click", function cancelTache(e) {
                e.preventDefault();
                newLi.replaceChild(newLabel, newInput);
                newInput.type = "checkbox";
                newLi.insertBefore(newInput, newLabel);
                newLi.replaceChild(newEdit, newSave);
                newLi.replaceChild(newSupr, newCancel);
            });
        });

        newSupr.addEventListener("click", function suprTache(e) {
            e.preventDefault();
            newUl.removeChild(newLi)
        });
    }
    else if (task.value != "") {
        e.preventDefault();
    }
});
