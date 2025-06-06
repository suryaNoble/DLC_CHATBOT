// Developed and implemented by Swayam Swarup Panda for the Digital Literacy Campaign
// Anyone can use this to teach digital tools in a simple, interactive way

// DOM Elements
const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const suggestionChips = document.getElementById("suggestionChips");

// Helper variables
let isTyping = false;
const botTypingDelay = 1500; // Simulate bot typing time in milliseconds

// Initialize the chatbot
function initChatbot() {
  // Display welcome message
  setTimeout(() => {
    displayBotMessage(
      "👋 Hello! I'm your Digital Literacy Assistant. I can help you learn how to use WhatsApp, Paytm, Google Maps, and other digital tools. What would you like to know?"
    );

    // Show suggestion chips after welcome message
    displaySuggestionChips(suggestionTopics);
  }, 500);

  // Set up event listeners
  sendButton.addEventListener("click", handleUserMessage);
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleUserMessage();
    }
  });
}

// Display bot message with typing animation
function displayBotMessage(message, steps = []) {
  if (isTyping) return;

  isTyping = true;

  // Create typing indicator
  const typingIndicator = document.createElement("div");
  typingIndicator.className = "typing-indicator";
  typingIndicator.innerHTML = "<span></span><span></span><span></span>";
  chatMessages.appendChild(typingIndicator);

  // Scroll to bottom of chat
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Simulate bot typing
  setTimeout(() => {
    // Remove typing indicator
    chatMessages.removeChild(typingIndicator);

    // Create message element
    const messageElement = document.createElement("div");
    messageElement.className = "message bot-message";

    // Create message content
    const messageContent = document.createElement("div");
    messageContent.className = "message-content";
    messageContent.textContent = message;

    // Append message content to message element
    messageElement.appendChild(messageContent);

    // Add steps if available
    if (steps && steps.length > 0) {
      const stepsContainer = document.createElement("div");
      stepsContainer.className = "steps";

      steps.forEach((step, index) => {
        const stepElement = document.createElement("div");
        stepElement.className = "step";

        const stepNumber = document.createElement("div");
        stepNumber.className = "step-number";
        stepNumber.textContent = index + 1;

        const stepContent = document.createElement("div");
        stepContent.className = "step-content";
        stepContent.textContent = step;

        stepElement.appendChild(stepNumber);
        stepElement.appendChild(stepContent);
        stepsContainer.appendChild(stepElement);
      });

      messageElement.appendChild(stepsContainer);
    }

    // Developed and implemented by Swayam Swarup Panda for the Digital Literacy Campaign
    // Anyone can use this to teach digital tools in a simple, interactive way

    // Add timestamp
    const timestamp = document.createElement("div");
    timestamp.className = "timestamp";
    timestamp.textContent = getFormattedTime();
    messageElement.appendChild(timestamp);

    // Add message to chat
    chatMessages.appendChild(messageElement);

    // Scroll to bottom of chat
    chatMessages.scrollTop = chatMessages.scrollHeight;

    isTyping = false;
  }, botTypingDelay);
}

// Display user message
function displayUserMessage(message) {
  // Create message element
  const messageElement = document.createElement("div");
  messageElement.className = "message user-message";

  // Create message content
  messageElement.textContent = message;

  // Add timestamp
  const timestamp = document.createElement("div");
  timestamp.className = "timestamp";
  timestamp.textContent = getFormattedTime();
  messageElement.appendChild(timestamp);

  // Add message to chat
  chatMessages.appendChild(messageElement);

  // Scroll to bottom of chat
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle user message
function handleUserMessage() {
  const message = userInput.value.trim();

  if (message === "") return;

  // Display user message
  displayUserMessage(message);

  // Clear input field
  userInput.value = "";

  // Process message and generate response
  processUserMessage(message);
}

// Process user message and generate response
function processUserMessage(message) {
  const lowerCaseMessage = message.toLowerCase();

  // Find matching FAQ
  let bestMatch = findBestMatch(lowerCaseMessage);

  if (bestMatch) {
    displayBotMessage(bestMatch.answer, bestMatch.steps);

    // Show relevant suggestion chips
    displaySuggestionChips(getRelatedQuestions(bestMatch.category));
  } else {
    // Default response if no match found
    displayBotMessage(
      "I'm not sure about that. Could you try asking about WhatsApp, Paytm, or Google Maps? Or choose one of these common questions:"
    );

    // Show default suggestion chips
    displaySuggestionChips(suggestionTopics);
  }
}

// Find best matching FAQ for user's query
function findBestMatch(query) {
  let bestMatch = null;
  let highestScore = 0;
  let matchCategory = "";

  // Search through all categories and questions
  for (const category in faqData) {
    for (const question in faqData[category]) {
      const score = calculateMatchScore(query, question.toLowerCase());

      if (score > highestScore) {
        highestScore = score;
        bestMatch = {
          question: question,
          answer: faqData[category][question].answer,
          steps: faqData[category][question].steps,
          category: category,
        };
      }
    }
  }

  // Return best match if score is above threshold
  return highestScore > 0.3 ? bestMatch : null;
}

// Developed and implemented by Swayam Swarup Panda for the Digital Literacy Campaign
// Anyone can use this to teach digital tools in a simple, interactive way

// Calculate match score between query and question
function calculateMatchScore(query, question) {
  // Simple matching algorithm based on keyword presence
  const queryWords = query.split(" ").filter((word) => word.length > 2);
  const questionWords = question.split(" ").filter((word) => word.length > 2);

  let matchCount = 0;

  // Count matching words
  queryWords.forEach((queryWord) => {
    questionWords.forEach((questionWord) => {
      if (
        questionWord.includes(queryWord) ||
        queryWord.includes(questionWord)
      ) {
        matchCount++;
      }
    });
  });

  // Calculate score (0 to 1)
  const totalWords = Math.max(queryWords.length, 1);
  return matchCount / totalWords;
}

// Get related questions for a category
function getRelatedQuestions(category) {
  const relatedQuestions = [];

  // Get up to 4 questions from the category
  let count = 0;
  for (const question in faqData[category]) {
    if (count < 3) {
      relatedQuestions.push(question);
      count++;
    } else {
      break;
    }
  }

  // Add a general question if we have space
  if (relatedQuestions.length < 4) {
    for (const question in faqData["general"]) {
      relatedQuestions.push(question);
      break;
    }
  }

  return relatedQuestions;
}

// Display suggestion chips
function displaySuggestionChips(suggestions) {
  // Clear existing chips
  suggestionChips.innerHTML = "";

  // Create and add chips
  suggestions.forEach((suggestion) => {
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.textContent = suggestion;

    // Add click event
    chip.addEventListener("click", () => {
      userInput.value = suggestion;
      handleUserMessage();
    });

    suggestionChips.appendChild(chip);
  });
}

// Get formatted time for message timestamp
function getFormattedTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // convert 0 to 12

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${formattedMinutes} ${ampm}`;
}

// Initialize chatbot when page loads
window.addEventListener("load", initChatbot);

// Developed and implemented by Swayam Swarup Panda for the Digital Literacy Campaign
// Anyone can use this to teach digital tools in a simple, interactive way
