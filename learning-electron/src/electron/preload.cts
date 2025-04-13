import { contextBridge , ipcRenderer } from 'electron';

const api = {
    serviceRequest: (topic: string, args: any[]) => ipcRenderer.invoke(topic,args)
};

contextBridge.exposeInMainWorld('electronApi', api);