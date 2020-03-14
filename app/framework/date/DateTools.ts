export default class DateTools {
    public static getTPTDate(date: Date): string {
        return date.getDate().toString().padStart(2, '0') +
            "." +
            (date.getMonth() + 1).toString().padStart(2, '0') +
            "." +
            date.getFullYear().toString().padStart(4, '0') +
            "T" +
            date.getHours().toString().padStart(2, '0') +
            ":" +
            date.getSeconds().toString().padStart(2, '0') +
            ":" +
            "00";
    }

    public static getMiFazDate(date: Date): string {
        return date.getFullYear().toString().padStart(4, '0') +
            "-" +
            (date.getMonth() + 1).toString().padStart(2, '0') +
            "-" +
            date.getDate().toString().padStart(2, '0');
    }

    public static miFazToDate(searchDate: string, time: string): Date {
        return new Date(searchDate + "T" + time + ":00");
    }
}
