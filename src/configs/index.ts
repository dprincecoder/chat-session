export interface loginType {
  email: string;
  password: string;
}
export interface chatType {
  id: string;
  chatSummary: string;
  createdOn: string;
  lastModified: string;
  [key: string]: string;
}

export interface MessageType {
  id: number;
  sender: string;
  content: string;
  createdOn: string;
  lastModified: string;
}

export interface Dialogue {
  id: number;
  messages: MessageType[];
}
