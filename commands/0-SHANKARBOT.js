module.exports = {
    name: 'goibot',
    description: 'Respond with funny messages when someone writes taklu or bot',
    nashPrefix: false,  // Added nashPrefix here
    execute: async (api, event) => {
        const message = event.body ? event.body.toLowerCase() : '';  // Checking if message exists
        console.log("Message received: ", message);  // For debugging
        const userName = event.senderID;

        // Funny responses array
        const responses = [
            "यार मेरी बीवी भाग गई 🥹👈",
            "तुम अपना फोन बेच के रेडियो ले लो😒👈",
            "और बताओ बड़े भैया क्या समाचार लाए हो?😒👈",
            "यार तुम्हारे भैया की साली मुझपर लाइन मरती है......🫣🙈😝👈",
            "आ गए तुम सिगरेट पी के 😒😒👈",
            "अब आया ऊंट पहाड़ के नीचे 🤣🤣😝👈",
            "मेरे टकले की कसम मैं गली दे दूंगा। 😒😒😝👈",
            "ले भईये ओम्फो 🤯👈",
            "ठरकी तु फिर आ गया, चलो कोई बात नही तुम तो हो ही निर्लज्ज 😝🤣👈",
            "हलकट कैसे हो 😝👈",
            "आज भैंस चराने नही गया तु 😒😝👈",
            "भाई 😒 अगर तुम्हे मेरे ग्रुप में 🤯 एड होना है तो टाइप करो\n\n#botgc",
            "कितनी गर्लफ्रेंड है तुम्हारी?😒👈",
            "जाओ पढ़ाई करो 😡👈",
            "तुम जैसे चुतीयों का सहारा है दोस्तों 🤣😝👈",
            "दोस्त प्यार करना मगर किसी लड़की को दिल मत देना, किडनी दे देना ताकी वो बेचकर i phone 🤳 ले ले 😝😝🤣👈",
            "बकवास नही 😒👈",
            "कास तुम लड़की होती मैं पक्का पटा लेता तुम्हे टकले की कसम 🤣😝👈",
            "देख लेना एक दिन मैं तुम्हारी गर्लफ्रेंड को भगा ले जाऊंगा 🤣😝👈",
            "दोस्त, लड़की 💃भी न प्यार 💏को सीरियस 🥹 लेती है 🥲 सौ में से नब्बे को धोखा देती है।🥹🥹🥲👈",
            "अपना भी टाइम आएगा 🥲👈",
            "यार मैं बोट हूं 🥲 अगले जनम में इंसान 🧍 बन के आऊंगा 🙃👈",
            "तुम अपना नाम 🤯 बदल के ठरकी 🫥 क्यों नहीं रख लेते, क्यूं की तुम इसी लायक हो। 😝🤣🤣👈",
            "यार मेरे सिर 💇 के बाल 💆 क्यों नहीं आते ?🥹🥲🥹👈"
        ];

        if (message.includes('taklu') || message.includes('bot')) {
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            console.log("Selected response: ", randomResponse);  // For debugging

            api.sendMessage({
                body: `@${userName}, ${randomResponse}`,
                mentions: [{ tag: `@${userName}`, id: userName }]
            }, event.threadID);
        } else {
            console.log("No matching words found.");  // For debugging
        }
    },
};
