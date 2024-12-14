import { ContentSection } from '@/components'
import Link from 'next/link'
import styles from './page.module.sass'

export default function Showcase() {
    return (
        <ContentSection section="showcase">
            <div className={styles.showcase}>
                <iframe
                    src="https://www.youtube.com/embed/T4wmdn5XrP4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <Link href="/latest">→ other loafymage media ←</Link>
            </div>
        </ContentSection>
    )
}
