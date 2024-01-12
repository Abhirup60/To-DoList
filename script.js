function displayNotes()
 {
    const notesContainer = document.getElementById('list-container');
    notesContainer.innerHTML = ''; 

    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <div class="note-content">${note}</div>
            <button onclick="deleteNote(${index})" class="delete-btn">Delete</button>
        `;
        notesContainer.appendChild(noteElement);
    });
}

function addTask() {
    const noteInput = document.getElementById('input-box');
    const note = noteInput.value.trim();

    if (note) {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];

        notes.push(note);

        localStorage.setItem('notes', JSON.stringify(notes));

        noteInput.value = '';
        displayNotes();
    }
}

function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));

    displayNotes();
}
displayNotes();
