import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xc18a836bD920b205CD589Acb1EadC4B50996c0f8", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Road Waves Member NFT",
        description: "This NFT will give you access to JamDAO!",
        image: readFileSync("scripts/assets/vertical C0002T01.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();