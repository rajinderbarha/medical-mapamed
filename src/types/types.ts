export interface Procedure {
    description: string;
    id: number;
    name: string;
    cost: number;
    hospital_id: number;
    doctor_id: number;
}

export interface Doctor {
    specialization: string | null | undefined;
    phone: string;
    email: string;
    description: string;
    id: number;
    name: string;
    specialty: string;
    hospital_id: number;
    procedure_id: Procedure[];
}

export interface Hospital {
    email: string;
    phone: string;
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
