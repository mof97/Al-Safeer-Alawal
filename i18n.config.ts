import en from "@/locales/en-US.json"
import ar from "@/locales/ar-IQ.json"
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en,
        ar
    }
}))