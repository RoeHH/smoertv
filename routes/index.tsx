import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import GridButton, { GridButtonProps } from "../islands/GridButton.tsx";
import { commandToGridButtonProps } from "utils/CommandAdapter.ts";
import { CommandController } from "commands/mod.ts";
import { User } from "utils/oauth2.ts";
import { MiddlewareState } from "./_middleware.ts";

export const handler: Handlers<any | MiddlewareState> = {
  async GET(_, ctx) {
      return ctx.render({commandController: ctx.state.commandController, user: ctx.state.user});
  },
};

export default function Home(props: PageProps<MiddlewareState>) {  
  const defaultButtons = props.data.commandController.getCommands().map(commandToGridButtonProps);
  return (
    <>
      <Head>
        <title>Smört tv</title>
        <link rel="icon" type="image/x-icon" href={props.data.user.avatarUrl}></link>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md grid md:grid-cols-6 gap-1 place-content-stretch" style={"grid-template-columns: repeat(3,minmax(0,1fr));"}>
        {defaultButtons.map((b: GridButtonProps) => (
          <GridButton {...b} host={props.url.toString()} />
        ))}
      </div>
    </>
  );
}
