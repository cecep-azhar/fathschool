import moment from "moment";
import "moment/locale/id";

moment.locale("id");

export function FormatedDate(date: string | Date): string {
    const now = moment().startOf("day");
    const inputDate = moment(date).startOf("day");

    const diffDays = now.diff(inputDate, "days");

    if (diffDays === 0) {
        return `Hari ini, ${moment(date).fromNow()}`;
    } else if (diffDays === 1) {
        return "Kemarin";
    } else {
        return moment(date).format("dddd, DD MMMM YYYY"); // output: "Rabu, 20 Desember 2024"
    }
}