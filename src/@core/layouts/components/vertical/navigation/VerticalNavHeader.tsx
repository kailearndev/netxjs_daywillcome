// ** React Import
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  verticalNavMenuBranding?: (props?: any) => ReactNode
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = (props: Props) => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  // ** Hooks
  // const theme = useTheme()

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={32}
              height={32}
              style={{
                shapeRendering: 'geometricPrecision',
                textRendering: 'geometricPrecision',

                // imageRendering: 'optimizeQuality',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
              }}
              {...props}
            >
              <path
                fill='#2e313c'
                d='M9.5 3.5c1.602 1.574 3.602 2.24 6 2v1c-2.545.927-4.878.927-7 0 .372 2.883.372 5.883 0 9l-2-7c-.227-2.433.773-4.1 3-5Z'
                style={{
                  opacity: 1
                }}
              />
              <path
                fill='#5a6a58'
                d='M15.5 5.5h1c.848 1.125 1.848 1.125 3 0 .948 1.478 2.28 2.478 4 3-1.333 1-1.333 2 0 3h-2c.039-1.256-.461-2.256-1.5-3-1.414.913-2.914.913-4.5 0v-3Z'
                style={{
                  opacity: 1
                }}
              />
              <path
                fill='#e7dec6'
                d='M15.5 6.5v2c1.586.913 3.086.913 4.5 0 1.039.744 1.539 1.744 1.5 3 .927 1.976 2.26 2.31 4 1-.457-.797-1.124-1.13-2-1-1.333-1-1.333-2 0-3h3c.667 0 1 .333 1 1 1.76 3.721.76 6.388-3 8-.343-1.725-1.343-2.225-3-1.5.752.67 1.086 1.504 1 2.5-4.01-1.763-7.677-1.263-11 1.5h4l-4 3c2.178.165 4.011-.668 5.5-2.5 1.016 1.134 1.683.8 2-1a20.473 20.473 0 0 1 3.5 2.5c-1.384 1.65-3.051 2.816-5 3.5h-4c-1.562-.233-2.895-.9-4-2v-5c2.05-.822 1.716-1.822-1-3 .372-3.117.372-6.117 0-9 2.122.927 4.455.927 7 0Z'
                style={{
                  opacity: 1
                }}
              />
              <path
                fill='#2d2926'
                d='M15.5 8.5c-.603 1.135-.936 2.135-1 3-.992.172-1.658-.162-2-1 1.238-.31 1.238-.81 0-1.5a4.932 4.932 0 0 1 3-.5Z'
                style={{
                  opacity: 1
                }}
              />
              <path
                fill='#0f0f11'
                d='M17.5-.5h4c.361 3.722 2.028 6.722 5 9h-3c-1.72-.522-3.052-1.522-4-3v-1c1.282-1.208 1.282-2.542 0-4-.797.457-1.13 1.124-1 2-.901.79-1.568 1.79-2 3h-1c-1.033-3.1-3.033-3.766-6-2-2.227.9-3.227 2.567-3 5a36.03 36.03 0 0 0-3 8c.457.797 1.124 1.13 2 1 1.068.934 2.401 1.268 4 1v5c-1.174 1.014-1.84 2.347-2 4-.997.03-1.664-.47-2-1.5a34.845 34.845 0 0 0 3-6 20.627 20.627 0 0 1-6-2c-1.017-1.05-1.184-2.216-.5-3.5a32.776 32.776 0 0 0 4-10c2.823-3.071 6.156-3.738 10-2 1.039-.744 1.539-1.744 1.5-3Z'
                style={{
                  opacity: 0.741
                }}
              />
              <path
                fill='#e3d77a'
                d='M18.5 2.5c.838.342 1.172 1.008 1 2v1c-1.152 1.125-2.152 1.125-3 0 .432-1.21 1.099-2.21 2-3Z'
                style={{
                  opacity: 1
                }}
              />
              <path
                fill='#6a80c0'
                d='M15.5 5.5c-2.398.24-4.398-.426-6-2 2.967-1.766 4.967-1.1 6 2Z'
                style={{
                  opacity: 1
                }}
              />
              <path
                fill='#a57066'
                d='M19.5 4.5c.172-.992-.162-1.658-1-2-.13-.876.203-1.543 1-2 1.282 1.458 1.282 2.792 0 4Z'
                style={{
                  opacity: 1
                }}
              />
              <path
                fill='#758dd3'
                d='m6.5 8.5 2 7c-.321 1.548-1.321 2.215-3 2-.876.13-1.543-.203-2-1a36.03 36.03 0 0 1 3-8Z'
                style={{
                  opacity: 1
                }}
              />
              <path
                fill='#e9929c'
                d='M21.5 11.5h2c.876-.13 1.543.203 2 1-1.74 1.31-3.073.976-4-1Z'
                style={{
                  opacity: 1
                }}
              />
              <path
                fill='#eba0a5'
                d='M12.5 10.5c.342.838 1.008 1.172 2 1-.683 1.677-2.017 2.343-4 2-.215-1.679.452-2.679 2-3Z'
                style={{
                  opacity: 1
                }}
              />
              <path
                fill='#878376'
                d='M24.5 17.5c-.342.838-1.008 1.172-2 1 .086-.996-.248-1.83-1-2.5 1.657-.725 2.657-.225 3 1.5Z'
                style={{
                  opacity: 1
                }}
              />
              <path
                fill='#404967'
                d='M8.5 15.5c2.716 1.178 3.05 2.178 1 3-1.599.268-2.932-.066-4-1 1.679.215 2.679-.452 3-2Z'
                style={{
                  opacity: 1
                }}
              />
              <path
                fill='#161616'
                d='M27.5 9.5c3.653 5.664 1.986 9.164-5 10.5 1.282 2.79.448 4.957-2.5 6.5-.494 1.634-.66 3.3-.5 5h-4c-.084-5.14-.75-5.14-2 0h-3l-2-4c.876.13 1.543-.203 2-1a5.576 5.576 0 0 1-1-3c1.105 1.1 2.438 1.767 4 2v1c1.643-.02 2.976.647 4 2 1.062-.925 1.062-1.925 0-3 1.949-.684 3.616-1.85 5-3.5a20.473 20.473 0 0 0-3.5-2.5c-.317 1.8-.984 2.134-2 1-1.489 1.832-3.322 2.665-5.5 2.5l4-3h-4c3.323-2.763 6.99-3.263 11-1.5.992.172 1.658-.162 2-1 3.76-1.612 4.76-4.279 3-8Z'
                style={{
                  opacity: 0.82
                }}
              />
              <path
                fill='#7189cd'
                d='M9.5 23.5a5.576 5.576 0 0 0 1 3c-.457.797-1.124 1.13-2 1h-1c.16-1.653.826-2.986 2-4Z'
                style={{
                  opacity: 1
                }}
              />
              <path
                fill='#7e796a'
                d='M13.5 26.5v-1h4c1.062 1.075 1.062 2.075 0 3-1.024-1.353-2.357-2.02-4-2Z'
                style={{
                  opacity: 1
                }}
              />
              <path
                fill='#9a9587'
                d='M13.5 26.5c-.14 1.837-.806 2.17-2 1 .457-.797 1.124-1.13 2-1Z'
                style={{
                  opacity: 1
                }}
              />
            </svg>
            <HeaderTitle variant='h6' sx={{ ml: 1 }}>
              {themeConfig.templateName}
            </HeaderTitle>
          </StyledLink>
        </Link>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
