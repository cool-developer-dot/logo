// You can add validation or saving logic here if needed in the future
document.querySelectorAll('.edit').forEach(span => {
  span.addEventListener('input', () => {
    console.log(`${span.innerText} edited`);
  });
});
