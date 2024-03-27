
const notesContainer = document.querySelector('.notes-container');
const btn = document.querySelector('.btn');

// Function to show notes from localStorage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}

// Function to update localStorage with notes content
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener for adding a new note
btn.addEventListener('click', () => {
    let inputBox = document.createElement("p");
    let img = document.createElement('img');
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
});

// Event listener for deleting a note
notesContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Event listener for dynamically updating notes content in localStorage
notesContainer.addEventListener('input', updateStorage);

// Prevent Enter key from creating a new paragraph
notesContainer.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});

// Initialize notes from localStorage
showNotes();


