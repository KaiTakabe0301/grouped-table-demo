export type Todo = {
    id: string;
    title: string;
    completed: boolean;
    expiresAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}