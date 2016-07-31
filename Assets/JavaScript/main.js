$("#add-item").submit(function(event) {
  event.preventDefault();

  var newItem = {
    'name': $("#item").val(),
    'description': $("#item-description").val(),
    'deadline': $("#item-deadline").val(),
    'location': $("#item-location").val()
  };

  let itemContainer = $("<div class='todo-item'>")

  itemContainer.append("<h3>" + newItem.name + "</h3>")
  itemContainer.append("<p>" + newItem.description + "</p>")
  itemContainer.append("<p>" + newItem.deadline + "</p>" )
  itemContainer.append("<p>" + newItem.location + "</p>")

  $("#todo-list").append(itemContainer);
})
