

var addButton = document.getElementById('addButton');

var list = document.getElementById('todoList');


addButton.addEventListener('click', ()=>{

    var todoList = document.querySelector('#todoList')

    console.log(todoList)

    var newTodoItem = document.createElement('li');

    	newTodoItem.classList.add('list-item');


    var userInput = document.getElementById('userInput').value;

    	newTodoItem.innerHTML= userInput
    		if (userInput) {
        		todoList.appendChild(newTodoItem)
    		}

		document.getElementById('userInput').value = ''
	});


/*
list.addEventListener('click', (item)=>{

    setTimeout(() => {
        var deleteItem = item.target.parentElement

    for (let i=0; i < list.children.length; i++) {
        if (deleteItem == list.children[i]) {
            deleteItem.remove()
         }
        }
    }, 250);        
});
*/



//Removes list item when click after 1 second
$('li.li').click(function() { 
      var self=this;
      setTimeout(function() {
      	
        $(self).remove();}, 1000);

  });

//Change color of list when hovered over
$("li").hover(function(){
  $(this).css("background-color", "purple");
  }, function(){
  $(this).css("background-color", "black");
});


//Title blinks in and out when hovered over
$("h1").hover(function() {
  $(this).fadeOut(100);
  $(this).fadeIn(200);
});

//button moves up then down when clicked
$("button").click(function() {
  $(this).slideUp(100);
  $(this).slideDown(100);
});

//Removes items added to list when clicked
$(document).ready(function(){
  $("div").on("click", "li", function(){
    $(this).remove();
  });

//adds new list items to list
  $("button").click(function(){
    $("userInput").insertAfter("button");
  });
});



/*
//Makes content in page move around and shrink and fade.. (can't figure out how to return to normal form)
$("button").click(function(){
  var div = $("div");
  div.animate({height: '300px', opacity: '0.4'}, "slow",complete);
  div.animate({width: '300px', opacity: '0.8'}, "slow");
  div.animate({height: '100px', opacity: '0.4'}, "slow");
  div.animate({width: '100px', opacity: '0.8'}, "slow");
}); 
*/



/*
function deleteListItem(){
    $('deleteItem').click(function(){
    $(this).css("text-decoration" , "line-through");
    var self=this;
     setTimeout(function(){$(self).remove(); 
    },1000);  
      // $(this).remove(); 
    });     
  }
*/

