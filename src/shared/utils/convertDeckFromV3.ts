import convertV3ListToV2 from "./convertV3ListToV2";
import { ArenaV3Deck, InternalDeck } from "../../types";
import Deck from "../deck";

export default function convertDeckFromV3(v3deck: ArenaV3Deck): InternalDeck {
  const newMain = convertV3ListToV2(v3deck.mainDeck);
  const newSide = convertV3ListToV2(v3deck.sideboard);
  const v2Deck: InternalDeck = {
    mainDeck: newMain,
    sideboard: newSide,
    id: v3deck.id,
    name: v3deck.name,
    lastUpdated: v3deck.lastUpdated,
    deckTileId: v3deck.deckTileId,
    description: v3deck.description,
    commandZoneGRPIds: v3deck.commandZoneGRPIds,
    companionGRPId: v3deck.companionGRPId,
    format: v3deck.format,
    type: "InternalDeck",
  };
  const deck = new Deck(v2Deck);
  return deck.getSave();
}
