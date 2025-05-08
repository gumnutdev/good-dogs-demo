import {
  configureGumnut,
  connectToGumnutDoc,
  buildTestToken,
} from "@gumnutdev/api";

import "@gumnutdev/api/dom";

configureGumnut({
  remoteHost: "v0-collab.dev.gumnut.dev",
  projectId: "your-project-id",
  localDevKey: "your-local-dev-key",
});

const gumnutDoc = connectToGumnutDoc({
  docId: "good-dogs",
  getToken: () =>
    buildTestToken(undefined, {
      name: "Bandit Heeler",
      email: "bandit.h@gumnut.dev",
      // picture: base64 image will include a picture of the user
    }),
}).doc; // the doc here is important!

await gumnutDoc.ready;

// attach
document.getElementById("dogName").node = gumnutDoc.useNode("dogName");
document.getElementById("dogNameFocus").node = gumnutDoc.useNode("dogName");

document.getElementById("description").node = gumnutDoc.useNode("description");
document.getElementById("descriptionFocus").node =
  gumnutDoc.useNode("description");

document.getElementById("floppyEars").node = gumnutDoc.useNode("floppyEars");
document.getElementById("floppyEarsFocus").node =
  gumnutDoc.useNode("floppyEars");

document.getElementById("boopableSnoot").node =
  gumnutDoc.useNode("boopableSnoot");
document.getElementById("boopableSnootFocus").node =
  gumnutDoc.useNode("boopableSnoot");

document.getElementById("toeBeans").node = gumnutDoc.useNode("toeBeans");
document.getElementById("toeBeansFocus").node = gumnutDoc.useNode("toeBeans");

document.getElementById("goodDog").node = gumnutDoc.useNode("goodDog");
document.getElementById("goodDogFocus").node = gumnutDoc.useNode("goodDog");

document.getElementById("save").addEventListener("click", async () => {
  try {
    await gumnutDoc.actions.commit(async (changes) => {
      console.log("Beep Boop, Saving to Your Database:", changes);
    });

    console.log("Document snapshot created");
  } catch (error) {
    console.error("Error saving document", error);
  }
});
