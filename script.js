// Tabbed Menu
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-red";
  }
  document.getElementById("myLink").click();

  function showPopup() {
    document.getElementById('popup').style.display = 'block';
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  function calculateBillAndShowPopup() {
    const selectedItems = document.querySelectorAll('.menu-item.selected');
    const billItemsList = document.getElementById('billItems');
    billItemsList.innerHTML = ''; // Clear previous bill items
    let totalCost = 0;
  
    selectedItems.forEach(item => {
      const price = parseFloat(item.getAttribute('data-price'));
  
      totalCost += price;
  
      // Create a new container for the item with some spacing
      const itemContainer = document.createElement('div');
      itemContainer.classList.add('bill-item'); // Add a class for styling
      itemContainer.style.marginBottom = '10px'; // Adjust the spacing
      itemContainer.style.fontSize = '14px'; // Reduce the font size
  
      // Copy the item's content into the new container
      const itemContent = item.cloneNode(true);
      itemContainer.appendChild(itemContent);
  
      // Add the item container to the bill items list
      billItemsList.appendChild(itemContainer);
    });
  
    const totalCostPopup = document.getElementById('totalCostPopup');
    totalCostPopup.textContent = totalCost.toFixed(2);
  
    // Show the bill popup
    const billPopup = document.getElementById('billPopup');
    billPopup.style.display = 'block';
  }
  

  

  function closeBillPopup() {
    const billPopup = document.getElementById('billPopup');
    billPopup.style.display = 'none';
  }

  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
    });
});

  