import { Channel } from "./Channel";
import { Guild } from "./Guild";
import { Member } from "./Member";
import { User } from "./User";
export interface VoiceState {
  id: string;
  guild_id: string;
  guild?: Guild;
  channel_id: string;
  channel: Channel;
  user_id: string;
  user: User;
  // @JoinColumn([{ name: "user_id", referencedColumnName: "id" },{ name: "guild_id", referencedColumnName: "guild_id" }])
  // @ManyToOne(() => Member, {
  // 	onDelete: "CASCADE",
  // })
  //TODO find a way to make it work without breaking Guild.voice_states
  member: Member;
  session_id: string;
  token: string;
  deaf: boolean;
  mute: boolean;
  self_deaf: boolean;
  self_mute: boolean;
  self_stream?: boolean;
  self_video: boolean;
  suppress: boolean;
  request_to_speak_timestamp?: Date;
}
