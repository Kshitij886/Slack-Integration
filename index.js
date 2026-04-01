const { WebClient } = require("@slack/web-api");
const client = new WebClient("your-bot-user-oauth-token");

async function sendMessage() {
  await client.chat.postMessage({
    channel: "channel-id",
    text: "hello kshitij",
  });
}

sendMessage();

async function findUserByEmail(emailAddress) {
  try {
    const result = await client.users.lookupByEmail({
      email: emailAddress,
    });

    if (result.ok) {
      console.log(`User ID for ${emailAddress} is: ${result.user.id}`);
      return result.user.id;
    }
  } catch (error) {
    if (error.data && error.data.error === "users_not_found") {
      console.error("No user found with that email address.");
    } else {
      console.error("Error looking up user:", error);
    }
  }
}
findUserByEmail("kshitiz.khatri@codavatar.tech");
