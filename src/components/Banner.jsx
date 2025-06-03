import { useTranslation } from "react-i18next";

export default function Banner() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";

    return (
        <div className={`w-full bg-primary text-white py-4 px-6 text-base md:text-lg flex flex-col md:flex-row items-center justify-center gap-4 ${isRTL ? "text-right" : "text-left"}`}>
            <div className="flex items-center gap-4">
                <span className="whitespace-nowrap">
                    <span className="font-bold text-lg md:text-xl"
                        dir={isRTL ? "ltr" : undefined}
                        style={isRTL ? { unicodeBidi: "bidi-override" } : {}}
                    >
                        {t("contact.phone")}
                    </span>
                </span>

                <span className="hidden md:inline-block w-px h-6 bg-white/50 mx-1"></span>

                <span className="whitespace-nowrap">
                    {t("contact.hours_weekdays")}: <span className="font-bold">{t("contact.hours_weekdays_time")}</span>
                </span>

                <span className="hidden md:inline-block w-px h-6 bg-white/50 mx-1"></span>

                <span className="whitespace-nowrap">
                    {t("contact.hours_weekend")}: <span className="font-bold">{t("contact.hours_weekend_time")}</span>
                </span>
            </div>
        </div>
    );
}