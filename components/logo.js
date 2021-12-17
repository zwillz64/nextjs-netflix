import Image from 'next/image'
import Link from 'next/link'


const Logo = () => {
    return <Link href="/">
        <a>
            <Image
                src={`/images/netflix-logo.svg`}
                alt="Netflix logo"
                width={160}
                height={50}
            />
        </a>
    </Link>
}

export default Logo
