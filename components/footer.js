import Link from 'next/link'
import footer from './style_component/footer.module.css'
export default function Footer () {
  return (
        <Link href={'#'} >
            <a className={footer.container}>Designed & Built by Stephen Gachoka</a>
        </Link>

  )
}
