"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("http://localhost:3000/api/events", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch events");
        }
        const events = yield response.json();
        displayEvents(events);
    }
    catch (error) {
        console.error("Error fetching events:", error);
    }
});
// Function to display events in the HTML
const displayEvents = (events) => {
    const productList = document.getElementById("product-list");
    if (!productList)
        return;
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
//# sourceMappingURL=events.js.map