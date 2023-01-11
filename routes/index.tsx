import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import GridButton, { GridButtonProps } from "../islands/GridButton.tsx";

export default function Home(props: PageProps) {
  const defaultButtons: GridButtonProps[] = [
    {
      name: "power",
      icon: "power"
    },
    {
      name: "volume-up",
      icon: "plus"
    },
    {
      name: "volume-down",
      icon: "minus"
    }
  ]

  const buttons: GridButtonProps[] = [
    {
      name: "logo",
      icon: "logo",
    },
    {
      name: "123",
      icon: "123",
      width: 2,
    },
        {
      name: "logo",
      icon: "logo",
    },
        {
      name: "logo",
      icon: "logo",
    },
    
        {
      name: "logo",
      icon: "logo",
    },    {
      name: "logo",
      icon: "logo",
    },
        {
      name: "logo",
      icon: "logo",
    },
        {
      name: "logo",
      icon: "logo",
    }
  ]
  return (
    <>
      <Head>
        <title>Smört tv</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md grid md:grid-cols-6" style={"grid-template-columns: repeat(3,minmax(0,1fr));"}>
        {[...defaultButtons, ...buttons].map((b) => (
          <GridButton {...b} host={props.url.toString()} />
        ))}
      </div>
    </>
  );
}
