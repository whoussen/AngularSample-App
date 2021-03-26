import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'dns';
import { promise } from 'protractor';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return {cannotContainSpace: true};
        }
        return null;
    }

    static shoulBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'waleed') {
                        resolve ({shoulBeUnique: true});
                    }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}
