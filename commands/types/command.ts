export interface Command {
    name: string;
    description?: string;
    execute: (fullscreen?: boolean, index?: number) => {fullscreen?: boolean, index?: number} | void | Promise<void> | Promise<{fullscreen?: boolean, index?: number}>;
    state?: number;
    style: {
        icon: string;
        height?: number;
        width?: number;
        dangerous?: boolean;
        reload?: boolean;
    };
}