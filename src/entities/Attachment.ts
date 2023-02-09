import { Message } from "./Message";

export interface Attachment {
  id: string;
  filename: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number;
  width?: number;
  content_type?: string;
  message_id: string;
  message: Message;
}
