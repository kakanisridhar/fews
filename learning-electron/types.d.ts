interface Window {
  electronApi: {
    serviceRequest(string, args:any[]): Promise 
  };
}
