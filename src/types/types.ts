export interface Procedure {
    id: number;
    name: string;
    cost: number;
    hospital_id: number;
    doctor_id: number;
}

export interface Doctor {
    id: number;
    name: string;
    specialty: string;
    hospital_id: number;
    procedure_id: Procedure[];
}

export interface Hospital {
    id: number;
    name: string;
    address: string;
    category: string;
    latitude: number;
    longitude: number;
    doctors: Doctor[];
    procedures: Procedure[];
}

export type LocationCoords = {
    latitude: number;
    longitude: number
} | null;
