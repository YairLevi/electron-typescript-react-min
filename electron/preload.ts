/**
 * Here you can expose anything to the renderer process,
 * including functions that interact with ipcMain and ipcRenderer.
 * You can expose variables and functions.
 */
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('versions', {
  electron: () => process.versions.electron,
})