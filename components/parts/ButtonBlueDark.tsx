type ButtonProps = {
    text: string
}

export default function ButtonBlueDark({text} : ButtonProps) {
  return (
    <button className="isolate relative z-10 rounded border-2 border-azul-oscuro bg-azul-oscuro/85 px-4 py-2 text-sm font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-azul-oscuro before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 active:brightness-110">{text}</button>
  )
}
