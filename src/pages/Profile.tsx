import { useContext } from 'react'
import { CardComponent, Header, StyledButton } from '@/components'
import { AppThemeContext } from '@/context/AppThemeContext'
function Profile() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <CardComponent>
        <StyledButton className="primary" onClick={themeContext?.toggleTheme}>
          Trocar para tema{' '}
          {themeContext?.appTheme === 'light' ? 'claro' : 'escuro'}
        </StyledButton>
      </CardComponent>
    </>
  )
}

export default Profile
