export default interface Task {
    title: string;
    done: boolean;
    timeInvested: Number;
    description?: string;
    dueDate?: Date;
    comments?: string[];
    images?: string[];
}