import { ButtonTree } from '@/components'
import { IconButtonProps } from '@/components/LinkButton/LinkButton'
import { getLatest } from '@/features/youtube/actions'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const EmbedYoutube = async () => {
    const data = await getLatest()
    const props: IconButtonProps = {
        href: `https://music.youtube.com/playlist?list=${data.audioPlaylistId}`,
        icon: faYoutube,
        title: 'youtube music',
        label: `listen to ${data.title}`,
    }

    return <ButtonTree items={[props]} />
}

export { EmbedYoutube }