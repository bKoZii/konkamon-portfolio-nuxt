const dayjs = useDayjs()

export const useRelativeDate = (date: string) => {
  const { locale } = useI18n()
  dayjs.locale(locale.value)
  return dayjs().to(dayjs(date))
}
