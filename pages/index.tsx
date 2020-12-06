import { Fragment } from 'react'
import InlineLink from '../components/inline-link'

export default function IndexPage() {
  return (
    <Fragment>
      <div className="p-10">
        <h1 className="font-mono font-bold text-5xl pb-2 text-white">David Achee</h1>
        <p className="font-mono font-light pt-4 text-xl max-w-2xl text-white">
          <InlineLink className="pr-4" href="mailto:hi@davidachee.com" text="email" />
          <InlineLink className="pr-4" href="https://github.com/davidachee" text="github" />
          <InlineLink className="pr-4" href="https://twitter.com/davidachee" text="twitter" />
          <InlineLink
            className="pr-4"
            href="https://www.linkedin.com/in/david-achee-14380338/"
            text="linkedin"
          />
        </p>
        <p className="font-mono font-light pt-4 text-xl max-w-2xl text-white">👋 Hi there!</p>
        <p className="font-mono font-light pt-4 text-xl max-w-2xl text-white">
          I'm a full stack engineer with experience building production ready Typescript
          applications from the ground up. I have extensive experience with{' '}
          <strong className="font-bold">React, GraphQL, Express, nodejs and Postgres</strong>.
        </p>
        <p className="font-mono font-light pt-4 text-xl max-w-2xl text-white">
          My strong design background allows me to identify problems before the development process
          begins. I pride myself on my ability to work with product and design to find the best
          possible version of what we're building.
        </p>
        <p className="font-mono font-light pt-4 text-xl max-w-2xl text-white">
          I'm currently a lead engineer at{' '}
          <InlineLink href="https://www.invisionapp.com/" text="InVision" />, working on the next
          version of Studio.
        </p>
      </div>
    </Fragment>
  )
}
