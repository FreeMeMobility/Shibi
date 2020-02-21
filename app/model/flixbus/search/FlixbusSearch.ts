export interface FlixbusSearch {
    success: string;
    message: Message[];
}

export interface Message {
    id:        string;
    relevance: number;
    score:     number;
    weight:    number;
    type:      string;
    name:      string;
}
