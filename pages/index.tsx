import InlineLink from '../components/inline-link'

export default function IndexPage() {
  return (
    <>
      <div className="p-10">
        <h1 className="font-mono font-bold text-5xl pb-2 text-white">David Achee</h1>
        <p className="font-mono font-light pt-4 text-xl max-w-2xl text-white">
          <InlineLink className="pr-4" href="mailto:david.achee@gmail.com" text="email" />
          <InlineLink className="pr-4" href="https://github.com/davidachee" text="github" />
          <InlineLink className="pr-4" href="www.linkedin.com/in/davidachee" text="linkedin" />
        </p>
        <p className="font-mono font-light pt-4 text-xl max-w-2xl text-white">👋 Hi there!</p>
        <p className="font-mono font-light pt-4 text-xl max-w-2xl text-white">
          I'm an empathetic engineering leader and full-stack engineer with over thirteen years of
          experience translating complex business needs into delightful, production-ready user
          experiences. My journey has grown from hands-on development and technical leadership to
          people management, most recently as an Engineering Manager at{' '}
          <InlineLink href="https://www.lattice.com/" text="Lattice" />.
        </p>

        <p className="font-mono font-light pt-4 text-xl max-w-2xl text-white">
          I thrive on architecting and leading high-impact, cross-functional projects. As a
          technical lead, I set the vision for key business initiatives that unblocked international
          market expansion and resolved critical performance bottlenecks for enterprise customers.
        </p>

        <p className="font-mono font-light pt-4 text-xl max-w-2xl text-white">
          As a manager, I excel at leading teams through change, successfully stabilizing my team
          through restructuring and guiding them into a new product domain. I am passionate about
          fostering a culture of psychological safety and high performance, mentoring engineers to
          take on greater ownership, and helping them achieve their career goals.
        </p>

        <p className="font-mono font-light pt-4 text-xl max-w-2xl text-white">
          With a strong design background, I pride myself on my ability to partner with product and
          design to break down large, abstract problems into actionable milestones, ensuring we find
          the best possible version of what we're building. I'm happiest collaborating with team
          members to create something amazing together. My technical expertise includes TypeScript,
          React, GraphQL, Jest, Express, Node.js, and Postgres.
        </p>
      </div>
    </>
  )
}
