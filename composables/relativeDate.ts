const dayjs = useDayjs()
export const useRelativeDate = (date: string) => {
  return dayjs().to(dayjs(date))
}
