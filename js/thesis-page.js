document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('thesis')) return;

  const params = new URLSearchParams(window.location.search);
  const thesisId = params.get('id');

  if (!thesisId || !thesisData[thesisId]) {
    document.getElementById('thesis-title').textContent = "Tesis Tidak Dijumpai";
    document.getElementById('thesis-body').innerHTML =
      "<p>Sila kembali ke halaman Kandungan dan pilih tesis yang sah.</p>";
    return;
  }

  const data = thesisData[thesisId];

  document.getElementById('thesis-title').textContent = data.title;
  document.getElementById('thesis-author').textContent =
    `${data.author} • ${data.year} • ${data.institution}`;

  document.getElementById('thesis-body').innerHTML = data.content;
});
