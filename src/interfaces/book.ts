export interface Book {
    id: string;
    title: string;
    cover_id: number;
    authors: { key: string; name: string }[];
}