interface Props {
    href: string
    text: string
}

export default function InlineLink(props: Props) {
    return (<a className="hover:text-yellow-300 dark:hover:text-red-400 transition-colors duration-300 underline" href={props.href}>{props.text}</a>)
}
