function addListItem(x) {
  console.log(x);
  //   let listItem = document.createElement("div");
  //   listItem.classList.add("listItem");

  //   let chk = document.createElement("input");
  //   chk.type = "checkbox";

  //   let listItemText = document.createElement("div");
  //   listItemText.classList.add("listItemText");
  //   listItemText.contentEditable = true;

  //   listItem.appendChild(chk);
  //   listItem.appendChild(listItemText);

  //   x.appendChild(listItem);
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#addList").addEventListener("click", function() {
    let listName = prompt("Enter List Name:");
    let newList = document.createElement("div"); // <div></div>
    newList.classList.add("taskList"); // <div class="taskList"></div>
    let listIcon = document.createElement("i"); // <i></i>
    listIcon.style.cssFloat = "left"; // <i style="float:left;"></i>
    listIcon.classList.add("fas"); // <i style="float:left;" class="fas"></i>
    listIcon.classList.add("fa-list-ol"); // <i style="float:left;" class="fas fa-list-ol"></i>
    newList.appendChild(listIcon); // <div class="taskList"><i style="float:left;" class="fas fa-list-ol"></i></div>

    let listText = document.createTextNode(listName);
    newList.appendChild(listText);
    let listHolder = document.querySelector(".listHolder");
    newList.addEventListener("click", function() {
      document.getElementById(this.innerText).style.visibility = "visible";
    });
    listHolder.appendChild(newList);
    let list = document.createElement("div");
    list.id = listName;
    list.classList.add("list");
    let listTitle = document.createElement("H1");
    listTitle.innerHTML = listName;
    list.appendChild(listTitle);

    let listItem = document.createElement("div");
    listItem.classList.add("listItem");

    let chk = document.createElement("input");
    chk.type = "checkbox";

    let listItemText = document.createElement("div");
    listItemText.classList.add("listItemText");
    listItemText.contentEditable = true;
    //listItemText.addEventListener("blur", addListItem(listName));

    let listItems = document.createElement("div");
    listItems.classList.add("listItems");
    listItem.appendChild(chk);
    listItem.appendChild(listItemText);

    listItems.appendChild(listItem);

    let closeButton = document.createElement("div");
    closeButton.appendChild(document.createTextNode("X"));
    closeButton.style.color = "red";
    closeButton.addEventListener("click", function() {
      this.parentElement.style.visibility = "hidden";
    });
    closeButton.classList.add("closeButton");
    list.appendChild(closeButton);

    let btn = document.createElement("button");
    btn.innerText = "add item";
    btn.classList.add("btn");
    btn.addEventListener("click", function() {
      let listItem = document.createElement("div");
      listItem.classList.add("listItem");

      let chk = document.createElement("input");
      chk.type = "checkbox";

      let listItemText = document.createElement("div");
      listItemText.classList.add("listItemText");
      listItemText.contentEditable = true;
      // document.querySelector('[id="tes 1"] > div.listItems');
      let x = '[id="' + listName + '"] > div.listItems';
      console.log(x);
      listItem.appendChild(chk);
      listItem.appendChild(listItemText);
      document.querySelector(x).appendChild(listItem);
    });

    list.appendChild(listItems);
    list.appendChild(btn);
    document.body.appendChild(list);
  });
});
