import Layout from '@organism/Layout'

const IndexPage = () => (
  <div className="flex flex-col items-center text-primary mt-4 lg:mt-16">
    <h1 className="text-3xl mb-4" aria-label="heading">
      Landing NextJS
    </h1>
    <h2>Coming soon...</h2>
  </div>
)

IndexPage.getLayout = Layout

export default IndexPage
