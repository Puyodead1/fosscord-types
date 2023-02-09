export interface Release {
  id: string;
  name: string;
  pub_date: Date;
  url: string;
  platform: string;
  enabled: boolean;
  notes?: string;
}
