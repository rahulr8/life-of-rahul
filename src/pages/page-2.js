import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LMFAO from "../images/lmfao.jpeg"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>OH HEY SEXY PUDS</h1>
    <p>SEE THIS HOT PIC!!</p>
    <div>
      <img src={require("../images/lmfao.jpeg")} />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
