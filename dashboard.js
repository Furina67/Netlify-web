const content = document.getElementById("content");

function login() {
  window.location.href = "/.netlify/functions/login";
}

const user = localStorage.getItem("user");

if (!user) {
  content.innerHTML = `
    <div class="empty">
      <h1>No Servers Found</h1>
      <p>You need Administrator permissions.</p>
      <a class="btn" href="https://discord.com/oauth2/authorize?client_id=1462876315915915264">
        Invite Bot
      </a>
    </div>
  `;
} else {
  content.innerHTML = `
    <div class="card">
      <h2>Your Servers</h2>
      <div class="guild" onclick="location.href='guild.html?guild=123'">
        Example Server
      </div>
    </div>
  `;
}
