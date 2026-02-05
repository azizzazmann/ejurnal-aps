function openThesis(link) {
  if (link !== "") {
    window.location.href = link;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('thesisSearch');
  const resultsBox = document.getElementById('searchResults');

  if (!input || !resultsBox) return;

  // 🔹 SAME IDs as thesis-data.js
  const thesisIndex = [
    { title: "Impak Seni Pertahanan Diri", id: "ahmad-seni" },
    { title: "Sejarah Persilatan Melayu", id: "ahmad-sejarah" },
    { title: "Naratif Silat Dunia Melayu", id: "siti-naratif" },
    { title: "Pendidikan Persilatan", id: "siti-pendidikan" }
  ];

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    resultsBox.innerHTML = "";

    if (!query) {
      resultsBox.classList.remove('active');
      return;
    }

    const matches = thesisIndex.filter(item =>
      item.title.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      resultsBox.classList.remove('active');
      return;
    }

    matches.forEach(item => {
      const div = document.createElement('div');
      div.className = "search-item";
      div.textContent = item.title;

      div.addEventListener('click', () => {
        window.location.href = `thesis.html?id=${item.id}`;
      });

      resultsBox.appendChild(div);
    });

    resultsBox.classList.add('active');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.kandungan-search')) {
      resultsBox.classList.remove('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const headerMenu = document.querySelector('.header-menu');
  const optionsBtn = document.querySelector('.options-btn');
  const overlay = document.querySelector('.menu-overlay');

  if (!headerMenu || !optionsBtn) return;

  optionsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    headerMenu.classList.toggle('active');
  });

  if (overlay) {
    overlay.addEventListener('click', () => {
      headerMenu.classList.remove('active');
    });
  }

  document.addEventListener('click', () => {
    headerMenu.classList.remove('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.thesis-dropdown').forEach(dropdown => {
    dropdown.addEventListener('change', function () {
      if (this.value) {
        window.location.href = this.value;
      }
    });
  });
});

