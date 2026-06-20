(async () => {
  try {
    const res = await fetch("http://localhost:5555/api/prompt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "Teste smoke: olá mundo" }),
    });
    const text = await res.text();
    console.log("HTTP", res.status);
    console.log(text);
  } catch (e) {
    console.error("ERROR", e.message);
    process.exit(1);
  }
})();
