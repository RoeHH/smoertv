import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import GridButton, { GridButtonProps } from "../islands/GridButton.tsx";
import { commandToGridButtonProps } from "utils/CommandAdapter.ts";
import { commandController } from "commands";

export default function Home(props: PageProps) {
  const defaultButtons = commandController.getCommands().map(commandToGridButtonProps);
  return (
    <>
      <Head>
        <title>Smört tv</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md grid md:grid-cols-6 gap-1 place-content-stretch" style={"grid-template-columns: repeat(3,minmax(0,1fr));"}>
        {defaultButtons.map((b) => (
          <GridButton {...b} host={props.url.toString()} />
        ))}
      </div>
    </>
  );
}
