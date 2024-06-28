const input = document.querySelector('#favchap');
const button = document.querySelector('#addButton'); 
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

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
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    console.log('Updated localStorage:', chaptersArray);
}

function getChapterList() {
    const chapters = JSON.parse(localStorage.getItem('myFavBOMList'));
    console.log('Retrieved from localStorage:', chapters);
    return chapters;
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

console.log('Initial chaptersArray:', chaptersArray);
