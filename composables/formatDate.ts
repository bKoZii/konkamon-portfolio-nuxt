const dayjs = useDayjs()

export const useFormatDate = (date: string) => {
  const { locale } = useI18n()
  dayjs.locale(locale.value)
  return dayjs(date).format('D MMMM YYYY - HH:mm')
}
