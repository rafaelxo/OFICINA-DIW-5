function imprimeObjeto(objeto) {
    var mensagem = `
      <br>
      {
        <br>
        "<span class='campo'>id</span>": ${objeto.id},
        <br>
        "<span class='campo'>userId</span>": ${objeto.userId},
        <br>
        "<span class='campo'>title</span>": ${objeto.title},
        <br>
        "<span class='campo'>body</span>": ${objeto.body}
        <br>
      }
      <br>`;

        return mensagem;
}

function imprimeVetor(vetor) {
    let mensagem = "<br>[";

    vetor.forEach(function (obj) {
          mensagem += `
        <br>
        {
          <br>
          "<span class='campo'>id</span>": ${obj.id},
          <br>
          "<span class='campo'>userId</span>": ${obj.userId},
          <br>
          "<span class='campo'>title</span>": ${obj.title},
          <br>
          "<span class='campo'>body</span>": ${obj.body}
          <br>
        },
        <br>`;
        });

        return mensagem;
}

async function GET(id) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson.innerHTML = imprimeObjeto(json);
        });
}

async function GETALL() {
    await fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson.innerHTML = imprimeVetor(json);
        });
}

async function POST() {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            title: "Nova Postagem",
            body: "Essa é a minha mais nova postagem! :D",
            userId: 1,
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson.innerHTML = imprimeObjeto(json);
        });
}

async function PUT(id) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            id: id,
            title: "Minha Mais Nova Postagem",
            body: "Essa é a atualização da minha mais nova postagem! :D",
            userId: 1,
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson.innerHTML = imprimeObjeto(json);
        });
}

async function PATCH(id) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            title: "Essa é a modificação da minha mais nova postagem! :D",
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson.innerHTML = imprimeObjeto(json);
        });
}

async function DELETE(id) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson.innerHTML = `Post ${id} deletado!`;
        });
}

async function FILTER(id) {
    await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson.innerHTML = imprimeVetor(json);
        });
}