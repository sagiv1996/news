<i18n>
{
  "il": {
      "why-us": "למה אנחנו?",
    "responsive":{
        "title":"רספונסיבי",
        "text": "המערכת שבנינו מותאמת למסכים שונים לפי גודל וסוג המסך. ההתאמה מתבצעת באופן אוטומטי"
    },
    "languages":{
        "title": "ריבוי שפות",
        "text": "המערכת תומכת במספר רב של שפות כאשר היא מתאימה את שפת המערכת לפי המדינה שתבחר לצפות בחדשות שלה"
    },
    "catagory":{
        "title": "בחירה לפי קטגוריה",
        "text": "ניתן לסנן חדשות לפי קטגוריה רצויה. המערכת תזכור את הבחירה שלך ותייבא חדשות מהקטגוריה שבחרת בכניסה הבאה שלך למערכת"
    },
    "search":{
        "title":"חיפוש חופשי",
        "text":"אפשרי גם לחפש בתיבת החיפוש מחרוזת חופשית והמערכת תייבא לך מידע רלוונטי על המחרוזת שהקלדת"
    },
    "notfication":{
        "title": "התראות מותאמות",
        "text":"תוכל לבחור תדירות להתראות שישלחו אליך ויזכירו לך להתעדכן בתחומים הרלוונטים עבורך"
    },
    "mony":{
        "title": "השרות חינמי",
        "text": "המערכת נותנת את השרות הזה בחינם בשביל לעזור לאנשים להיגמל מאתרי חדשות"
    }
  },
  "en": {
      "why-us": "Why U.S?",
    "responsive": {
        "title": "responsive",
        "text": "The system we built is adapted to different screens according to the size and type of screen"
    },
    "languages":{
        "title": "Multilingualism",
        "text": "The system supports multiple languages ​​when it adjusts the system language according to the country you choose to watch its news"
    },
    "catagory":{
        "title": "Selection by category",
        "text":"You can filter news by desired category. The system will remember your selection and import news from the category you selected at your next login"
    },
    "search":{
        "title":"free search",
        "text":"It is also possible to search in the search box for a free string and the system will import relevant information about the string you typed."

    },
"notfication":{
    "title":"Custom alerts",
    "text": "You can choose the frequency of notifications that will be sent to you and remind you to stay up to date in the areas that are relevant to you"
},
"mony":{
    "title":"The service is free",
"text":"The system gives this service for free to help people get rid of news sites"


}
    
    

  }
}
</i18n>
<template>
  <v-card :dark="dark || $vuetify.dark">
    <v-card-title primary-title class="justify-center">
      {{ $t("why-us") }}
    </v-card-title>
    <v-card-text class="text-center">
      <v-row justify="space-around" align="start">
        <v-col v-for="Square in data" :key="Square" cols="12" sm="4" md="2">
          <v-img
            :src="'/' + Square + '.gif'"
            contain
            :alt="Square + 'gif'"
            height="150"
          />

          <div class="text-h6 text-center mb-2">{{ $t(Square)["title"] }}</div>
          <v-divider class="mb-3" />
          {{ $t(Square)["text"] }}
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text style="direction: ltr">
      <v-card-title primary-title class="justify-center">
        Supported countries
      </v-card-title>

        <no-ssr>
          <marquee-text :duration="30">
          <span v-for="(locale, index) in $i18n.locales" :key="index" outlined>
            <country-flag :country="locale.code" />
          </span>
        </marquee-text>
        </no-ssr>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    data: [
      "responsive",
      "languages",
      "catagory",
      "search",
      "notfication",
      "mony",
    ],
  }),
  props:{
    dark:{
      type: Boolean,
      default: false
    }
  }
};
</script>
