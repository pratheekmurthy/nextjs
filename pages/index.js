import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>  Pratheek list | Home</title>
      <meta name="keywords" content="pratheek"/>
    </Head>
    <div>
      <h2>Hey Pratheek</h2>
      <p>
      There are many important components of effective web design, 
      like white space, font selection, color schemes, and layout, but the core of a website is its content, not its design. 
      Within a matter of seconds, your homepage needs to introduce your product or service and entice visitors to explore your site further.
      </p>
      <p>
      There are four essential pieces of information you should have on your homepage: value proposition, differentiation, proof, and calls to action. 
      Though the role of the homepage has changed, chances are it's still the most highly trafficked and most important page on your website
      </p>
      <p>
      Some elements of excellent website homepage design include your logo, branding information, social proof, and an intro to your team and products. 
      However, there's much more you can and should cover if you want an amazing homepage
      </p>
    </div>
    </>
  )
}
