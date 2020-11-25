import InlineLink from '../components/inline-link'

export default function IndexPage() {
  return (
    <div>
      <div className="p-20">
        <h1 className="text-5xl py-5 text-white">
            David Achee
        </h1>
        <p className="text-3xl text-white">
          I'm a full stack engineer from Austin, TX <br />
          I'm currently a lead engineer at <InlineLink href="https://www.invisionapp.com/" text="InVision" />. <br />
          You can see my work on <InlineLink href="https://dribbble.com/davidachee" text="dribbble" /> and <InlineLink href="https://github.com/davidachee" text="github" />. <br />
          You can see my not work on <InlineLink href="https://www.instagram.com/davidachee/" text="instagram" /> and <InlineLink href="https://twitter.com/davidachee" text="twitter" />.
        </p>
      </div>
    </div>
  )
}
