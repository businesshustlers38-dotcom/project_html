/*
const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP-fel! Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log("✅ Data:", data); 
  })
  .catch((err) => {
    console.error("❌ Något gick fel:", err);
  })
  .finally(() => {
    console.log("🔚 Klart!");
  });
*/


  fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    if (!res.ok) throw new Error(`User-fetch fel: ${res.status}`);
    return res.json();
  })
  .then((user) => {
    console.log("👤 Användare:", user.name);

    // VIKTIGT: returnera fetch så nästa .then() väntar på detta
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then((res) => {
    if (!res.ok) throw new Error(`Posts-fetch fel: ${res.status}`);
    return res.json();
  })
  .then((posts) => {
    console.log("📝 Första inläggets titel:", posts[0]?.title);
  })
  .catch((err) => {
    console.error("❌ Något gick fel:", err);
  })
  .finally(() => {
    console.log("🔚 Klart!");
  });