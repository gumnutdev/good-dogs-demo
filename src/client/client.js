// Client-side JavaScript entry point
console.log("Client-side JavaScript loaded");

import {
  connectToGumnutDoc,
  configureGumnut,
  buildTestToken,
} from "gumnut-v0-api";

import "gumnut-v0-api/dom";

// Configure Gumnut
configureGumnut({
  remoteHost: "v0-collab.dev.gumnut.dev",
  projectId: "love-doggos",
  localDevKey: "_DO_NOT_USE_IN_PROD_ji8aimPL0CeTUmQfYXr6Gg",
});

const doc = await connectToGumnutDoc({
  docId: "not-different-enough-dogs",
  getToken: () =>
    buildTestToken("bandit-h", {
      name: "Bandit",
      email: "bandit.h@gumnut.dev",
    }),
});

await doc.ready;
console.log("Doc is ready", doc.docId);

document.getElementById("dogName").node = doc.forNode("dogName");

console.log("Gumnut loaded");
