const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/events", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
  
      const events = await response.json();
      displayEvents(events);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  
  // Function to display events in the HTML
  const displayEvents = (events: any[]) => {
    const productList = document.getElementById("product-list");
    if (!productList) return;
  
    productList.innerHTML = events.map(event => `
      <div class="event">
        <h3>${event.name}</h3>
        <p>Date: ${event.date}</p>
        <p>Location: ${event.location}</p>
      </div>
    `).join("");
  };
  
  // Fetch events on page load
  fetchEvents();
  