import { ButtonTree, ContentSection, IconButtonProps } from '@/components'
import {
    faInstagram,
    faThreads,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

export default function Socials() {
    const items: IconButtonProps[] = [
        {
            href: '/ko-fi',
            icon: faMugHot,
            title: 'ko-fi',
            label: 'throw coins in my tip jar',
        },
        {
            href: '/tiktok',
            icon: faTiktok,
            title: 'tiktok',
            label: 'look behind the scenes with tiktok',
        },
        {
            href: '/threads',
            icon: faThreads,
            title: 'threads',
            label: 'read my monologues and talk to me',
        },
        {
            href: '/instagram',
            icon: faInstagram,
            title: 'instagram',
            label: 'look at loafy pics',
        },
    ]

    return (
        <ContentSection section="music">
            <ButtonTree items={items} />
        </ContentSection>
    )
}