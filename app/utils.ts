export const disableIntentsRevalidations = (options: {
  formData: FormData
  disabledIntents: string[]
}) => {
  const intent = options.formData.get("intent")?.toString()
  return !options.disabledIntents.some((disabled) => intent === disabled)
}
