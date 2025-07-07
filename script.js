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

document.addEventListener('DOMContentLoaded', () => {
            const toggleButton = document.getElementById('toggle-dark-mode');
            const savedDarkMode = localStorage.getItem('dark-mode');
            let isDarkMode;

            if (savedDarkMode !== null) {
                isDarkMode = savedDarkMode === 'true';
            } else {
                isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            }

            document.body.classList.toggle('dark-mode', isDarkMode);
            toggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';

            toggleButton.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                isDarkMode = document.body.classList.contains('dark-mode');
                toggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
                localStorage.setItem('dark-mode', isDarkMode);
            });
        });

