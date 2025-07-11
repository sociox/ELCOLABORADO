function checkCode() {
  const input = document.getElementById('codeInput').trim();

  const agents = {
    "access777": {
      id: "AGENT_404",
      role: "Decryption Specialist",
      avatar: "avatar1.png"
    },
    "neo1337": {
      id: "AGENT_NEO",
      role: "Matrix Penetrator",
      avatar: "avatar2.png"
    },
    "trinity007": {
      id: "AGENT_TRINITY",
      role: "Signal Interceptor",
      avatar: "avatar3.png"
    },
    "root999": {
      id: "ROOT_ADMIN",
      role: "System Root Overlord",
      avatar: "avatar4.png"
    }
  };

  const agentData = agents[input];

  if (agentData) {
    localStorage.setItem("agentID", agentData.id);
    localStorage.setItem("agentRole", agentData.role);
    localStorage.setItem("agentAvatar", agentData.avatar);
    window.location.href = "secret.html";
  } else {
    const error = document.getElementById("error");
    error.classList.remove("hidden");
    error.style.animation = "shake 0.3s";
    setTimeout(() => (error.style.animation = ""), 300);
  }
}
