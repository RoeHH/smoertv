export interface Command {
    name: string;
    description?: string;
    execute: ({}:any) => any | void | Promise<void> | Promise<any>;
    style: {
        icon: string;
        height?: number;
        width?: number;
        dangerous?: boolean;
        reload?: boolean;
    };
}
