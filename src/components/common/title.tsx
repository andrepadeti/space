import useMediaQuery from 'utils/media-query-all'
import * as S from './title.styles'

interface TitleProps {
  // i've made number optional for now just so that it doesn't break  the app
  // but it should be required in the future
  number?: string
  title: string
  className?: string
}

const Title = ({ number, title, className }: TitleProps) => {
  const { isDesktop, isTablet, isMobile } = useMediaQuery()

  return (
    <S.Text isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} className={className}>
      <S.Number>{number}</S.Number>
      {title}
    </S.Text>
  )
}

export default Title
