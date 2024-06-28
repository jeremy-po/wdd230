const input = document.querySelector('#favchap');
const button = document.querySelector('#addButton'); 
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value !== '') {
    displayList(input.value); 
    chaptersArray.push(input.value); 
    setChapterList();
    input.value = ''; 
    input.focus(); 
}
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    deleteChapter(item); 
    input.focus(); 
});
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    const storedChapters = localStorage.getItem('myFavBOMList');
    return storedChapters ? JSON.parse(storedChapters) : [];
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList(); 
}

console.log('Initial chaptersArray:', chaptersArray);
