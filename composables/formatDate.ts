const dayjs = useDayjs()
export const useFormatDate = (date: string) => {
  return dayjs(date).format('D MMMM YYYY - HH:mm')
}