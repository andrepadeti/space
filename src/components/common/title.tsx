import useMediaQuery from 'utils/media-query-all'
import * as S from './title.styles'

type TitleProps = {
  // i've made number optional for now just so that it doesn't break  the app
  // but it should be required in the future
  number?: string
  title: string
}

const Title = ({ number, title }: TitleProps) => {
  const { isDesktop, isTablet, isMobile } = useMediaQuery()

  return (
      <S.Text isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}>
        <S.Number>{number}</S.Number>
        {title}
      </S.Text>
  )
}

export default Title
