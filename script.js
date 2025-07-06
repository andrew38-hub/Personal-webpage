window.onscroll = function() {
  const button = document.getElementById('back-to-top');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
};

document.getElementById('back-to-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = Document.getElementById('name'). values;
  const email = Document.getElementById('email'). values;
  const message = Document.getElementById('message'). values;

  if(name === '' || email === '' || message ==='') {
    alert('Please fill out all fields')
  }else {
    alert('Form submitted successfully')
  }
});

const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

window.addEventListener('load', function() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

