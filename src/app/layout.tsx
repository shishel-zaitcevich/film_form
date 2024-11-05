import { Box, Typography } from '@mui/material'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="h4">
            Производственные параметры фильма
          </Typography>
        </Box>
        {children}
      </body>
    </html>
  )
}
