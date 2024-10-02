export const useGetHostname = (url: string) => {
  const hostname = new URL(url).hostname
  return hostname.replace(/^www\./, '')
}
