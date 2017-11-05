/* var elementList=document.getElementById('listOfElements');
var mainElement = document.createElement('form');
elementsList.appendChild(mainElement);*/

createElement();
function createElement(){
var elementsList=document.getElementById('listOfElements');
var mainElement = document.createElement('form');
    
 var labelTitle=document.createElement('label');
    labelTitle.innerHTML="TYTUŁ ";
     mainElement.appendChild(labelTitle);
 var title=document.createElement('input');
    title.setAttribute('text', 'title');
     mainElement.appendChild(title);
    var br=document.createElement('br');
     mainElement.appendChild(br);
    var br=document.createElement('br');
     mainElement.appendChild(br);
    
 var labelNote=document.createElement('label');
    labelNote.innerHTML="NOTATKA ";
     mainElement.appendChild(labelNote);
 var note= document.createElement('input');
    note.setAttribute('text', 'note');  
     mainElement.appendChild(note);
 var br=document.createElement('br');
     mainElement.appendChild(br);
    var br=document.createElement('br');
     mainElement.appendChild(br);
    
 var hidden1=document.createElement('input');
    hidden1.setAttribute('type', 'hidden');
     mainElement.appendChild(hidden1);
    
 var labelDate=document.createElement('label');
    labelDate.innerHTML="DATA ";
     mainElement.appendChild(labelDate);
 var date=document.createElement('input');
    date.setAttribute('type', 'date');
     mainElement.appendChild(date);
    var br=document.createElement('br');
     mainElement.appendChild(br);
    var br=document.createElement('br');
     mainElement.appendChild(br);
    
 var save=document.createElement('button');
    save.setAttribute('id', 'save');
    save.innerHTML="ZAPISZ";
     mainElement.appendChild(save);
    var br=document.createElement('br');
     mainElement.appendChild(br);
    var br=document.createElement('br');
     mainElement.appendChild(br);
    
 var delete1=document.createElement('button');
    delete1.setAttribute('id', 'delete1');
    delete1.innerHTML="USUŃ";
     mainElement.appendChild(delete1);
    var br=document.createElement('br');
     mainElement.appendChild(br);
elementsList.appendChild(mainElement);
  
}