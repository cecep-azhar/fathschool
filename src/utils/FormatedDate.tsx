import moment from "moment";
import "moment/locale/id";

moment.locale("id");

export function FormatedDate(date: string | Date): string {
    const now = moment();
    const inputDate = moment(date);
    const diffHours = now.diff(inputDate, "hours");

    if (diffHours < 24) {
        return `Hari ini, ${inputDate.fromNow()}`;
    } else if (diffHours < 48) {
        return "Kemarin";
    } else {
        return inputDate.format("dddd, DD MMMM YYYY"); // output: "Rabu, 20 Desember 2024"
    }
}
