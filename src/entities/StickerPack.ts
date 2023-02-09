import { Sticker } from ".";
export interface StickerPack {
  id: string;
  name: string;
  description?: string;
  banner_asset_id?: string;
  stickers: Sticker[];
  cover_sticker_id?: string;
  cover_sticker?: Sticker;
}
