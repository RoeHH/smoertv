import { Button } from "../components/Button.tsx";

export interface GridButtonProps{
  name: string;
  icon: string;
  width?: number;
  hight?: number;
}

export default function GridButton({name, icon, width, hight, host}: {host:string} & GridButtonProps) {
  const c = `px-2 py-1 border(gray-100 2) hover:bg-gray-200 ${width ? `col-span-${width}`: ""} ${hight ? `row-span-${hight}`: ""}`;
  const i = `/${icon}.svg`
  
  return (
    <button
      onClick={() => fetch(`${host}/trigger/${name}`)}
      class={c}
    >
      <img
        class="mx-auto"
        src={i}
      />
    </button>
  );
}
