// Developed and implemented by Swayam Swarup Panda for the Digital Literacy Campaign
// Anyone can use this to teach digital tools in a simple, interactive way

// FAQ Data with tutorials for digital tools
const faqData = {
  whatsapp: {
    "What is WhatsApp?": {
      answer:
        "WhatsApp is a free messaging app that lets you send messages, make voice and video calls, and share photos, videos, and documents with friends and family worldwide using just your internet connection.",
      steps: [],
    },
    "How do I install WhatsApp?": {
      answer: "Installing WhatsApp is easy! Follow these steps:",
      steps: [
        "Open the App Store (iOS) or Google Play Store (Android) on your phone",
        "Search for 'WhatsApp'",
        "Tap 'Install' or 'Get'",
        "Once installed, open the app",
        "Verify your phone number by entering the code sent to you via SMS",
        "Set up your profile by adding a name and optional profile picture",
      ],
    },
    "How do I send a message on WhatsApp?": {
      answer: "Sending a message on WhatsApp is simple:",
      steps: [
        "Open WhatsApp on your phone",
        "Tap on the chat icon (usually at the bottom right)",
        "Select the contact you want to message",
        "Type your message in the text field at the bottom",
        "Tap the send button (green arrow) to send your message",
      ],
    },
    "How do I send a photo on WhatsApp?": {
      answer: "To send a photo on WhatsApp:",
      steps: [
        "Open the chat with the person you want to send a photo to",
        "Tap the attachment icon (paperclip or + sign)",
        "Select 'Gallery' or 'Photos'",
        "Choose the photo you want to send",
        "Add a caption if you wish",
        "Tap the send button",
      ],
    },
    "How do I make a video call on WhatsApp?": {
      answer: "Making a video call on WhatsApp is easy:",
      steps: [
        "Open the chat with the person you want to call",
        "Tap the video call icon at the top right of the screen",
        "Wait for the person to answer",
        "To end the call, tap the red phone icon",
      ],
    },
    "How do I create a WhatsApp group?": {
      answer: "To create a WhatsApp group:",
      steps: [
        "Open WhatsApp and go to the Chats tab",
        "Tap the New Chat icon (on Android) or tap More options > New Group (on iPhone)",
        "Select the contacts you want to add to your group",
        "Tap the arrow or Next button",
        "Enter a group subject (name) and optional group icon",
        "Tap Create or Done",
      ],
    },
  },
  paytm: {
    "What is Paytm?": {
      answer:
        "Paytm is a popular digital payment platform in India that allows you to make online payments, transfer money to friends and family, pay bills, recharge your mobile, and shop online - all from your smartphone.",
      steps: [],
    },
    "How do I create a Paytm account?": {
      answer: "To create a Paytm account:",
      steps: [
        "Download the Paytm app from the App Store or Google Play Store",
        "Open the app and enter your mobile number",
        "Verify your number with the OTP (One Time Password) sent to you",
        "Create a profile by entering your name and email",
        "Set up a password or PIN for security",
        "Complete your KYC (Know Your Customer) verification for full access to services",
      ],
    },
    "How do I add money to Paytm wallet?": {
      answer: "To add money to your Paytm wallet:",
      steps: [
        "Open the Paytm app",
        "Tap on 'Balance' or 'Paytm Wallet'",
        "Select 'Add Money'",
        "Enter the amount you wish to add",
        "Choose your preferred payment method (debit card, credit card, net banking)",
        "Complete the payment process",
        "The money will be added to your Paytm wallet instantly",
      ],
    },
    "How do I send money to someone using Paytm?": {
      answer: "To send money to someone using Paytm:",
      steps: [
        "Open the Paytm app",
        "Tap on 'Pay' or 'Send Money'",
        "Enter the recipient's mobile number or choose from your contacts",
        "Alternatively, scan their Paytm QR code if available",
        "Enter the amount you want to send",
        "Add a message (optional)",
        "Tap 'Pay' and confirm with your PIN or password",
      ],
    },
    "How do I pay bills using Paytm?": {
      answer: "To pay bills using Paytm:",
      steps: [
        "Open the Paytm app",
        "Scroll down to 'Recharge & Pay Bills'",
        "Select the type of bill you want to pay (electricity, water, gas, etc.)",
        "Choose your service provider",
        "Enter your consumer/account number",
        "Enter the amount or fetch the bill amount",
        "Select a payment method and confirm the payment",
      ],
    },
    "How do I scan a QR code with Paytm?": {
      answer: "To scan a QR code with Paytm:",
      steps: [
        "Open the Paytm app",
        "Tap on the 'Scan' icon at the bottom of the screen",
        "Point your phone camera at the QR code",
        "The app will automatically recognize the QR code",
        "Enter the amount if not already specified",
        "Add a note if needed",
        "Tap 'Pay' and confirm with your PIN or password",
      ],
    },
  },

  // Developed and implemented by Swayam Swarup Panda for the Digital Literacy Campaign
  // Anyone can use this to teach digital tools in a simple, interactive way

  googlemaps: {
    "What is Google Maps?": {
      answer:
        "Google Maps is a web mapping service that offers satellite imagery, street maps, 360° panoramic views of streets, real-time traffic conditions, and route planning for traveling by foot, car, bicycle, or public transportation.",
      steps: [],
    },
    "How do I find directions on Google Maps?": {
      answer: "To find directions on Google Maps:",
      steps: [
        "Open the Google Maps app on your phone",
        "Tap on the 'Directions' button (usually a blue arrow)",
        "Enter your starting point or use 'Your location'",
        "Enter your destination",
        "Select your mode of transportation (car, public transit, walking, etc.)",
        "Tap 'Start' to begin navigation",
      ],
    },
    "How do I save a location on Google Maps?": {
      answer: "To save a location on Google Maps:",
      steps: [
        "Search for the location you want to save",
        "Tap on the location to open its details",
        "Tap 'Save'",
        "Choose which list to save it to (Favorites, Want to go, Starred places, etc.)",
        "The location will now appear in your saved places list",
      ],
    },
    "How do I share my location with someone?": {
      answer: "To share your location with someone using Google Maps:",
      steps: [
        "Open Google Maps",
        "Tap on your profile picture or initial at the top right",
        "Select 'Location sharing'",
        "Tap on 'New share'",
        "Choose how long you want to share your location",
        "Select the people you want to share with",
        "Tap 'Share'",
      ],
    },
    "How do I use Street View on Google Maps?": {
      answer: "To use Street View on Google Maps:",
      steps: [
        "Open Google Maps and search for a location",
        "Touch and hold the screen on the spot you want to see",
        "At the bottom, tap the Street View image (small photo)",
        "To move around, swipe in any direction",
        "To look around, drag your finger on the screen",
        "To zoom, pinch or spread your fingers",
      ],
    },
    "How do I download offline maps?": {
      answer: "To download offline maps for use without internet:",
      steps: [
        "Open Google Maps",
        "Tap on your profile picture or initial at the top right",
        "Select 'Offline maps'",
        "Tap 'Select your own map'",
        "Adjust the area you want to download by pinching or expanding",
        "Tap 'Download'",
        "The map will be saved for offline use",
      ],
    },
  },
  general: {
    "What does digital literacy mean?": {
      answer:
        "Digital literacy refers to the skills and knowledge required to use digital devices, communication applications, and networks to access and manage information. It includes the ability to use smartphones, computers, and the internet safely and effectively for daily tasks.",
      steps: [],
    },
    "Why is digital literacy important?": {
      answer:
        "Digital literacy is important because it helps you access essential services, stay connected with loved ones, find information quickly, protect yourself online, and participate in modern society. It opens up opportunities for learning, employment, and social interaction.",
      steps: [],
    },
    "How can I stay safe online?": {
      answer: "To stay safe online, follow these important practices:",
      steps: [
        "Use strong, unique passwords for different accounts",
        "Enable two-factor authentication when available",
        "Be careful about what personal information you share online",
        "Don't click on suspicious links or download unknown attachments",
        "Keep your devices and apps updated",
        "Use trusted security software",
        "Be wary of public Wi-Fi networks",
      ],
    },
    "What is a strong password?": {
      answer:
        "A strong password is one that is hard for others to guess but easy for you to remember. Here's how to create one:",
      steps: [
        "Make it at least 12 characters long",
        "Include a mix of uppercase and lowercase letters",
        "Add numbers and special characters (like !@#$%)",
        "Avoid common words, phrases, or personal information",
        "Don't reuse passwords across different accounts",
        "Consider using a password manager to help create and store strong passwords",
      ],
    },
  },
};

// Suggestion topics to show
const suggestionTopics = [
  "How do I send a photo on WhatsApp?",
  "How do I add money to Paytm wallet?",
  "How do I find directions on Google Maps?",
  "How can I stay safe online?",
];

// Developed and implemented by Swayam Swarup Panda for the Digital Literacy Campaign
// Anyone can use this to teach digital tools in a simple, interactive way
