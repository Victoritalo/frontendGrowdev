const main = document.querySelector("main");
let currentPage = document.querySelector("#currentPage");
const btn = document.querySelector("#btn");

function userList() {
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const crrtPage = currentPage.value;
    const res = await axios.get(`https://reqres.in/api/users?page=${crrtPage}`);
    const body = res.data;
    console.log(body.data);
    let html = "";
    for (const user of body.data) {
      html += `<ul>
        <li>
        <img src="${user.avatar}" alt="">
            <p>ID: ${user.id}</p>
            <p>Email: ${user.email}</p>
            <p>Nome: ${user.first_name}</p>
            <p>Sobrenome: ${user.last_name}</p>
        </li>
    </ul>`;
    }
    main.innerHTML = html;
  });
}
userList();
