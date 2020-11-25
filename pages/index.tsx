import { Fragment } from 'react'
import InlineLink from '../components/inline-link'

export default function IndexPage() {
  return (
    <Fragment>
      <div className="p-10 absolute bottom-0">
        <h1 className="font-extrabold text-5xl pb-2 text-white">
            David Acheé
        </h1>
        <p className="font-light pt-4 text-2xl text-white">
          I'm a full stack engineer from Austin, TX <br />
          I'm currently a lead engineer at <InlineLink href="https://www.invisionapp.com/" text="InVision" />. <br />
          You can see my work on <InlineLink href="https://dribbble.com/davidachee" text="dribbble" /> and <InlineLink href="https://github.com/davidachee" text="github" />. <br />
          You can see my not work on <InlineLink href="https://www.instagram.com/davidachee/" text="instagram" /> and <InlineLink href="https://twitter.com/davidachee" text="twitter" />.
        </p>
      </div>
      </Fragment>
  )
}
