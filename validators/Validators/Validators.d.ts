import { FormControl } from '@angular/forms';
export declare const Severino: {
    CPFValidator: (c: FormControl) => {
        validCPF: boolean;
    };
    MinValue: (Value: any) => (c: FormControl) => {
        minvalue: boolean;
    };
    DateValidator: (c: FormControl) => {
        dateValid: boolean;
    };
};
