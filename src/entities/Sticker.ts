import { Guild } from "./Guild";
import { StickerPack } from "./StickerPack";
import { User } from "./User";
export enum StickerType {
  STANDARD = 1,
  GUILD = 2,
}
export enum StickerFormatType {
  GIF = 0,
  PNG = 1,
  APNG = 2,
  LOTTIE = 3,
}
export interface Sticker {
  id: string;
  name: string;
  description?: string;
  available?: boolean;
  tags?: string;
  pack_id?: string;
  pack: StickerPack;
  guild_id?: string;
  guild?: Guild;
  user_id?: string;
  user?: User;
  type: StickerType;
  format_type: StickerFormatType;
}
