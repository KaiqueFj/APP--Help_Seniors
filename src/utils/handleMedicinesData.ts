
type MedicinesData = {
    name: string;
    id: string;
    time: string;
    status: number;
    date?: string;
    initialDate: string;
    finalDate: string;
}

type HandleMedicinesDataProps = [
    medicinesWithoutStatus: MedicinesData[],
    medicinesWithStatus: MedicinesData[]
]


export function handleMedicineData(props: HandleMedicinesDataProps) {

    const medicines = props[0]

    const allMedicinesWithoutStatusDataHandled = [];
    for (var i = 0; i < medicines.length; i++) {

        // Show only "YYYY-MM-DD"
        const initialDate = medicines[i].initialDate.toString().replace('T03:00:00.000Z', '');
        const finalDate = medicines[i].finalDate.toString().replace('T03:00:00.000Z', '');

        // Data to show
        allMedicinesWithoutStatusDataHandled.push({
            'name': medicines[i].name,
            'id': medicines[i].id,
            'time': medicines[i].time,
            'initialDate': initialDate,
            'finalDate': finalDate,
            'status': 2,
        })
    }

    return allMedicinesWithoutStatusDataHandled
}


export function handleStatusOfMedicines(props: HandleMedicinesDataProps) {

    const medicinesStatus = props[1]

    // Medicines Status
    const medicinesStatusHandled = []
    for (var i = 0; i < medicinesStatus.length; i++) {

        // Show only "YYYY-MM-DD"
        
        const date = medicinesStatus[i]?.date?.toString().replace('T03:00:00.000Z', '')


        // Data to show
        medicinesStatusHandled.push({
            'name': medicinesStatus[i].name,
            'id': medicinesStatus[i].id,
            'time': medicinesStatus[i].time,
            'status': medicinesStatus[i].status,
            'date': date
        })
    }

    return medicinesStatusHandled
}
