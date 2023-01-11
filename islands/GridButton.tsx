import { useEffect, useState } from "preact/hooks";

export interface GridButtonProps{
  name: string;
  icon: string;
  width?: number;
  height?: number;
  dangerous?: boolean;
  reload?: boolean;
}

export default function GridButton({name, icon, width, height, host, dangerous, reload}: {host:string} & GridButtonProps) {
  const [now, setNow] = useState(new Date());
  const [target, setTarget] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setNow((now) => {
        if (now > target) {
          clearInterval(timer);
        }
        return new Date();
      });
    }, 400);
    return () => clearInterval(timer);
  }, [target]);
  const secondsLeft = Math.ceil((target.getTime() - now.getTime()) / 1000);

  const i = secondsLeft > 0 ? `/icons/number-${secondsLeft}.svg` : `/icons/${icon}.svg`
  const c = `px-2 py-1 border(gray-100 2) hover:bg-gray-200 ${width ? `col-span-${width}`: ""} ${height ? `row-span-${height} h-[75px]`: "h-9"}`;

  return (
    <button
      onClick={() => {
        if (dangerous && secondsLeft <= 0) {
            setTarget(new Date(now.getTime() + 3000));
            return;
          }
        fetch(`${host}trigger/${name}`)
        if(reload) window.location.reload();
      }}
      class={c}
    >
      <img
        class={`mx-auto h-${((height || 1) + 1)*3} ${dangerous && secondsLeft > 0 ? "animate-pulse" : ""}`}
        src={i}
      />
    </button>
  );
}
