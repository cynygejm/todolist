createElement();
function createElement(){
var elementsList=document.getElementById('listOfElements');
var mainElement = document.createElement('form');

var appName=document.createElement('label');
   appName.innerHTML=" To Do List  ";
  appName.setAttribute('id', 'appName');
    mainElement.appendChild(appName);
    var br=document.createElement('br');
     mainElement.appendChild(br);
    var br=document.createElement('br');
     mainElement.appendChild(br);

 var labelTitle=document.createElement('label');
    labelTitle.innerHTML="~ TITLE ~ ";
   labelTitle.setAttribute('id', 'labelTitle');
     mainElement.appendChild(labelTitle);
 var title=document.createElement('input');
    //title.setAttribute('text', 'title');
   title.setAttribute('id', 'title');
     mainElement.appendChild(title);
    var br=document.createElement('br');
     mainElement.appendChild(br);
    var br=document.createElement('br');
     mainElement.appendChild(br);

 var labelNote=document.createElement('label');
    labelNote.innerHTML="~ NOTE ~ ";
   labelNote.setAttribute('id', 'labelNote');
     mainElement.appendChild(labelNote);

     var note= document.createElement('input');
     note.setAttribute('text', 'note');
        note.setAttribute('id', 'note');
         mainElement.appendChild(note);

 var br=document.createElement('br');
     mainElement.appendChild(br);
    var br=document.createElement('br');
     mainElement.appendChild(br);

 var labelDate=document.createElement('label');
    labelDate.innerHTML="~ DATE ~ ";
   labelDate.setAttribute('id', 'labelDate');
     mainElement.appendChild(labelDate);
 var date=document.createElement('input');
    date.setAttribute('type', 'date');
   date.setAttribute('id', 'date');
     mainElement.appendChild(date);
    var br=document.createElement('br');
     mainElement.appendChild(br);
    var br=document.createElement('br');
     mainElement.appendChild(br);

 var save=document.createElement('button');
    save.setAttribute('id', 'save');
    save.innerHTML="~ SAVE ~";
     mainElement.appendChild(save);
    var br=document.createElement('br');
     mainElement.appendChild(br);
    var br=document.createElement('br');
     mainElement.appendChild(br);

     var hidden1=document.createElement('input');
        hidden1.setAttribute('type', 'hidden');
        hidden1.setAttribute('id', 'hidden');
         mainElement.appendChild(hidden1);

 var delete1=document.createElement('button');
    delete1.setAttribute('id', 'delete1');
    delete1.innerHTML="~ DELETE ~";
     mainElement.appendChild(delete1);
    var br=document.createElement('br');
     mainElement.appendChild(br);
elementsList.appendChild(mainElement);

}
