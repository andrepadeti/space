import useMediaQuery from 'utils/media-query-all'
import * as S from './styles'

interface TitleProps {
  number: string
  title: string
  className?: string
}

const Title = ({ number, title, className }: TitleProps) => {
  const { isDesktop, isTablet, isMobile } = useMediaQuery()

  return (
    <S.Text
      isDesktop={isDesktop}
      isTablet={isTablet}
      isMobile={isMobile}
      className={className}
    >
      <S.Number>{number}</S.Number>
      {title}
    </S.Text>
  )
}

export default Title
