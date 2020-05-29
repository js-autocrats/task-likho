import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})


export class ResponseHandlerService {

    constructor(private snackBar: MatSnackBar) { }

    /**
    *
    * @param executable Function to execute after sucessfull response
    * @param showMessage default true, send false if snackbar msg is not required
    *
    */
    public getResponseHandler(executable?: (response?: any) => void, showMessage = true) {

        return (
            response => {
                if (!response) return;

                const { code, info } = response;
                if (code !== 200) return;

                if (showMessage) this.snackBar.open(info, 'Ok', { duration: 4000 });

                if (!executable) return;
                executable(response);
            }
        )
    }
}