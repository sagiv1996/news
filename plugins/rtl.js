export default function({ app, $vuetify })
{
    app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
        let file = app.i18n.locales.find((x)=> x.code == newLocale)?.file;
        file = require(`@/locales/${file}`)?.dir
        $vuetify.rtl = file==='rtl'
    }
}