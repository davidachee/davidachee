import InlineLink from '../components/inline-link'

export default function IndexPage() {
  return (
    <>
      <div className="p-10">
        <h1 className="font-mono font-bold text-5xl pb-2 text-white">David Achee</h1>
        <p className="font-mono font-light pt-4 text-xl max-w-2xl text-white">
          <InlineLink className="pr-4" href="mailto:hi@davidachee.com" text="email" />
          <InlineLink className="pr-4" href="https://github.com/davidachee" text="github" />
          <InlineLink
            className="pr-4"
            href="https://www.linkedin.com/in/david-achee-14380338/"
            text="linkedin"
          />
        </p>
        <p className="font-mono font-light pt-4 text-xl max-w-2xl text-white">👋 Hi there!</p>
        <p className="font-mono font-light pt-4 text-xl max-w-2xl text-white">
          I'm a full-stack engineer with over thirteen years of experience building production ready
          applications from the ground up. Most recently, I have been working as the technical lead
          of the Compensation team at <InlineLink href="https://www.lattice.com/" text="Lattice" />.
          I have particular expertise with{' '}
          <strong className="font-bold">
            Typescript, React, GraphQL, Jest, Express, nodejs and Postgres
          </strong>
          .
        </p>
        <p className="font-mono font-light pt-4 text-xl max-w-2xl text-white">
          My strong design background allows me to identify problems before the development process
          begins. I pride myself on my ability to work with product and design to find the best
          possible version of what we're building. I love taking large, abstract problems and
          breaking them down into actionable milestones. I'm happiest collaborating with team
          members to create something amazing together.
        </p>
      </div>
    </>
  )
}
