export type Block =
  | {
      type: 'heading';
      level: number;
      text: string;
      id: string;
    }
  | { type: 'paragraph'; inlines: InlineToken[] }
  | {
      type: 'list';
      ordered: boolean;
      items: { inlines: InlineToken[]; checked?: boolean; level: number }[];
    }
  | { type: 'code'; code: string; lang?: string }
  | { type: 'blockquote'; inlines: InlineToken[] }
  | { type: 'hr' }
  | { type: 'table'; header: string[]; rows: string[][] }
  | { type: 'image'; uri: string; alt?: string };

export type InlineToken =
  | { type: 'text'; text: string }
  | { type: 'bold'; text: string }
  | { type: 'strike'; text: string }
  | { type: 'code'; text: string }
  | { type: 'link'; text: string; url: string };
