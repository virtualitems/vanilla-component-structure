const rootElement = document.getElementById('new-post-form');

rootElement.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(rootElement);
  const postData = Object.fromEntries(formData);
  console.log(postData);
});

export default rootElement;
