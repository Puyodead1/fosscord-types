export interface RateLimit {
  id: string;
  executor_id: string;
  hits: number;
  blocked: boolean;
  expires_at: Date;
}
