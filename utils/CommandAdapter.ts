import { Command } from "commands";
import { GridButtonProps } from "../islands/GridButton.tsx";

export const commandToGridButtonProps = (command: Command): GridButtonProps => {
    return {
        fetchUrl: command.fetch,
        redirect: command.redirect,
        name: command.name,
        icon: command.style.icon,
        height: command.style.height,
        width: command.style.width,
        dangerous: command.style.dangerous,
        reload: command.style.reload
    };
}