
type ButtonBlueDarkIconProps = {
  text: string
  children: React.ReactNode
}

export default function ButtonGrayIcon({text, children } : ButtonBlueDarkIconProps) {
  return (
    <button className={`isolate relative z-10 w-full rounded border-2 border-gris-oscuro bg-gris-oscuro/85 px-5 py-2 text-sm font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gris-oscuro before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 active:brightness-110`}>
      {text}
      <span className="fill ml-2">{children}</span>
      </button>
  )
}
