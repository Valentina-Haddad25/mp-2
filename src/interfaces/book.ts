// Defining the 'Book' interface to type-check book-related data structures
export interface Book {
    id: string; // Unique identifier for the book (could be an ISBN or a database-specific ID)
    title: string; // Title of the book
    cover_id: number; // Identifier for the book's cover image, typically used to fetch the cover image
    authors: { key: string; name: string }[]; // Array of author objects, where each author has a unique 'key' and 'name'
}