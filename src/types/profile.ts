export interface Profile {
  name: string;
  wordmark: string;
  role: string;
  introduction: string;
  location?: string;
  portrait?: { src: string; alt: string };
  aboutPortrait?: { src: string; alt: string };
  available: boolean;
  resume?: string;
}
