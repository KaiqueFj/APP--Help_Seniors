import { daysOfWeek } from "./daysWeek";


type MedicinesData = {
    name: string;
    id: string;
    time: string;
    status: number;
    date?: string;
    initialDate?: string;
    finalDate?: string;
}

export function medicinesOnDay(props : MedicinesData[]) {
    const days = daysOfWeek();

    // Filter data of days week
    const handleData = []

    for (var i = 0; i < days.length; i++) {
        handleData.push(props.filter((medicine) => moment(days[i]).isBetween(medicine?.initialDate, medicine?.finalDate, null, '[]')))
    }

    // Order medicines of day by time
    const array = []
    for (var i = 0; i < handleData.length; i++) {
        if (handleData[i].length > 0) {
            const x = handleData[i].sort(function (a, b) {
                const n1 = parseInt(b.time.replace(':', ''))
                const n2 = p