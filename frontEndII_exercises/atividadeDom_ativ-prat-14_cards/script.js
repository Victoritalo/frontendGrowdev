const allCards = document.querySelectorAll(".card");
const allTitles = document.querySelectorAll(".titulo-card");
const allDescription = document.querySelectorAll(".descricao-card");
const editBtn = document.querySelectorAll(".botao-editar");
const deleteBtn = document.querySelectorAll(".botao-apagar");
styleCard();
editCard();
deleteCard();

function styleCard() {
  allCards.forEach((card) => {
    card.setAttribute("style", "background-color: #E16E0E");
  });

  allTitles.forEach((title) => {
    title.style.color = "#1F355C";
    title.style.padding = "20px";
    setTimeout(() => {
      title.innerHTML = `My Card`;
    }, 4000);
  });

  allDescription.forEach((description, i) => {
    description.style.color = "#FFFFFF";

    setTimeout(() => {
      description.innerHTML = `Description ${i} manipulated and modified using JavaScript`;
    }, 4200);
  });

  editBtn.forEach((button) => {
    button.classList.add("botao-verde", "styledButton");
    button.innerHTML = "EDIT";
  });

  deleteBtn.forEach((button) => {
    button.classList.add("botao-vermelho", "styledButton");
    button.setAttribute("style", "margin-top: 15px");
    button.innerHTML = "DELETE";
  });
}

function editCard() {
  editBtn.forEach((button, i) => {
    button.addEventListener("click", () => {
      const index = [i];
      alert(`Editing card index: ${index}`);
      console.log(allCards[index]);
    });
  });
}

function deleteCard() {
  deleteBtn.forEach((button, i) => {
    button.addEventListener("click", () => {
      const card = button.closest(".card");
      if (card) {
        if (confirm(`Deleting card ${i}. Are you sure?`)) {
          card.remove();
          console.log(`Deleted card index: ${i}`);
        } else {
          console.log("Canceled delete action");
        }
      }
    });
  });
}

