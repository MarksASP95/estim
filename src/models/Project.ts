import Task from './Task';
import Group from './Group';

export default interface Project {
    name: string;
    active: boolean;
    image?: string;
    about?: string;
    group?: Group;
    tasks?: Task[];
    dueDate?: Date;
}