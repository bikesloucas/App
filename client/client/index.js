console.log("Client loaded");

async function getData() {
  const response = await fetch("http://localhost:3000/football");
  const data = await response.json();
  console.log("API DATA:", data);
}

getData();
