import Layout from './Layout'

const LayoutedComponent = (WrappedComponent, props) => (
  <Layout>
    <WrappedComponent {...props} />
  </Layout>
)

const withLayout = (WrappedComponent) => (props) => LayoutedComponent(WrappedComponent, props)

export default withLayout
