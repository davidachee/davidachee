interface Props {
    href: string
    text: string
}

export default function InlineLink(props: Props) {
    return (<a className="hover:text-purple-500 transition-colors duration-300" href={props.href}>{props.text}</a>)
}
