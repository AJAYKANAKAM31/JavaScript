async function list() {
  const users = await fetch(
    "https://611fef8124d11c001762eb6b.mockapi.io/users"
  );
  const data_users = await users.json();
  console.log(data_users);
  console.log(data_users[0].avatar);

  const main = document.createElement("div");
  main.className = "main-container";
  document.body.append(main);

  for (let i = 0; i < data_users.length; i++) {
    const scnd_container = document.createElement("div");
    scnd_container.className = "users";
    scnd_container.innerHTML = `
    <div class="image">
    <img
      src="${data_users[i].avatar}"
      alt="profile pic"
    />
  </div> 
  <div class="content">
          <p><b>Name: </b>${data_users[i].name}</p>
          <p><b>id: </b>${data_users[i].id}</p>
          <p><b>createdAt: </b>${data_users[i].createdAt}</p>
        </div> `;
    main.append(scnd_container);
  }
}

list();
