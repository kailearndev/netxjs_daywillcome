// ** React Imports
import { ReactNode, createContext, useState } from 'react'

// ** MUI Imports
import { PaletteMode } from '@mui/material'

// ** ThemeConfig Import
import themeConfig from 'src/configs/themeConfig'

// ** Types Import
import { ContentWidth, ThemeColor } from 'src/@core/layouts/types'
import ReduxProvider from 'src/redux/ReduxProvinder'

export type Settings = {
  mode: PaletteMode
  themeColor: ThemeColor
  contentWidth: ContentWidth
}

export type SettingsContextValue = {
  settings: Settings
  saveSettings: (updatedSettings: Settings) => void
}

const initialSettings: Settings = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  contentWidth: themeConfig.contentWidth
}

// ** Create Context
export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings
})

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
 
  // ** State
  const [settings, setSettings] = useState<Settings>({ ...initialSettings })

  const saveSettings = (updatedSettings: Settings) => {
    setSettings(updatedSettings)
  }
  
  return (
    <ReduxProvider>
      <SettingsContext.Provider value={{ settings, saveSettings }}>{children}</SettingsContext.Provider>
    </ReduxProvider>
  )
}

export const SettingsConsumer = SettingsContext.Consumer
