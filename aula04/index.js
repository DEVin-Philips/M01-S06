const lista = document.getElementById('lista');
const form = document.getElementById('form');
const BASE_URL = 'http://localhost:3000';

function popularPostHtml(post) {
  const item = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  item.id = `post-${post.id}`;
  span.innerText = `${post.titulo} - ${post.descricao}`;
  button.innerText = 'Excluir';
  button.addEventListener('click', () => excluirPost(post.id));

  item.appendChild(span);
  item.appendChild(button);

  lista.appendChild(item);
}

function popularPostsHtml(posts) {
  lista.innerHTML = '';

  posts.forEach((post) => {
    popularPostHtml(post);
  });
}

async function buscarPosts() {
  const resultado = await fetch(`${BASE_URL}/posts`);
  const posts = await resultado.json();
  popularPostsHtml(posts);
}

async function criarPost(post) {
  const resultado = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(post),
  });

  const postCriado = await resultado.json();
  return postCriado;
}

async function excluirPost(id) {
  await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
  });

  const item = document.getElementById(`post-${id}`);
  item.remove();
}

async function submitForm(event) {
  event.preventDefault();

  const post = {
    titulo: event.target.titulo.value,
    descricao: event.target.descricao.value,
  };

  const postCriado = await criarPost(post);

  popularPostHtml(postCriado);
}

window.addEventListener('load', buscarPosts);
form.addEventListener('submit', submitForm);
