// Used to set the item ID
var numberOfItems = 0

$("#add-item").submit(function(event) {
  event.preventDefault()

  let newItem = {
    'name': $("#item").val(),
    'description': $("#item-description").val(),
    'deadline': $("#item-deadline").val(),
    'location': $("#item-location").val()
  };

  let $itemContainer = $("<li class='todo-item' id='item" + numberOfItems++ + "'>'" )

  $itemContainer.append("<h3 class='item-name'>" + newItem.name + "</h3>")
  $itemContainer.append("<p class='item-description'>" + newItem.description + "</p>")
  $itemContainer.append("<p class='item-deadline'>" + newItem.deadline + "</p>" )
  $itemContainer.append("<p class='item-location'>" + newItem.location + "</p>")
  $itemContainer.append("<button class='edit-item' name='edit'>Edit</button>")
  $itemContainer.append("<button class='delete-item' name='Delete'>Delete</button>")

  $("#todo-list").append($itemContainer);

  editItem()
  deleteItem()



})

function editItem() {
  $(".edit-item").click(function() {
    let $todoItem =$(this).parent()
    var itemId = $todoItem.attr('id')

    let editItemObj = {
      name: $(this).siblings(".item-name").text(),
      description: $(this).siblings(".item-description").text(),
      deadline: $(this).siblings(".item-deadline").text(),
      location: $(this).siblings(".item-location").text()
    }

    $todoItem.empty();

    let editForm = $("<form id='edit-item-" + itemId + "' action='index.html' method='post'>")
    editForm.append("<input id='edit-" + itemId + "-name' type='text' value='" + editItemObj.name + "'>")
    editForm.append("<textarea id='edit-" + itemId + "-description' name='edit-item-description' rows='8' cols='40'>" + editItemObj.description + "</textarea>")
    editForm.append("<input id='edit-"+ itemId + "-deadline' type='time' name='deadline' value='" + editItemObj.deadline + "'>")
    editForm.append("<input id='edit-" + itemId + "-location' value='" + editItemObj.location + "' >")
    editForm.append("<input class='button-save' type='submit' value='Save'>")


    $todoItem.append(editForm)

    $("#edit-item-" + itemId).submit(function(event){
      event.preventDefault()

      let saveItem = {
        name: $("#edit-"+ itemId + "-name").val(),
        description:  $("#edit-"+ itemId + "-description").val(),
        deadline:  $("#edit-"+ itemId + "-deadline").val(),
        location:  $("#edit-"+ itemId + "-location").val()
      }

      $todoItem.empty()

      $todoItem.append("<h3 class='item-name'>" + saveItem.name + "</h3>")
      $todoItem.append("<p class='item-description'>" + saveItem.description + "</p>")
      $todoItem.append("<p class='item-deadline'>" + saveItem.deadline + "</p>" )
      $todoItem.append("<p class='item-location'>" + saveItem.location + "</p>")
      $todoItem.append("<button class='edit-item' name='edit'>Edit</button>")
      $todoItem.append("<button class='delete-item' name='Delete'>Delete</button>")

      editItem()
      deleteItem()

    })
  })
}
function deleteItem() {
  $(".delete-item").click(function() {
    $(this).parent().remove();
  })
}
