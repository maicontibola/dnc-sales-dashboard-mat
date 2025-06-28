import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponent } from '@/components'

function Login() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              alignItems: 'center',
              display: 'flex',
              height: '100vh',
            }}
          >
            <Container maxWidth="sm">
              <h1>LOGIN</h1>
              <FormComponent
                inputs={[
                  { type: 'email', placeholder: 'Email' },
                  { type: 'password', placeholder: 'Senha' },
                ]}
                buttons={[
                  { className: 'primary', type: 'submit', children: 'Login' },
                ]}
                message={{ msg: 'Sucesso!!!', type: 'success' }}
              />
            </Container>
          </Grid>
          <Grid
            size={{ sm: 6 }}
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
