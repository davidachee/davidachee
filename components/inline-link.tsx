interface Props {
  href: string
  text: string
  className?: string
}

export default function InlineLink(props: Props) {
  return (
    <a
      className={`
        hover:text-yellow-300
        dark:hover:text-red-400
        transition-colors
        duration-300
        underline
        ${props.className}
      `}
      href={props.href}
    >
      {props.text}
    </a>
  )
}
