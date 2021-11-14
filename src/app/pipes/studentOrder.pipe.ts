import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'studentOrder'
  })


export class StudentOrderPipe implements PipeTransform {
    transform(source: any[], sortOption: string, sortDirection: string): any[] {
        const thisRef = this;
        switch (sortOption.toUpperCase()) {
            
            case 'FIRSTNAME':
                source.sort(function(a, b) : number{
                    const nameA = a.FirstName.toUpperCase();
                    const nameB = b.FirstName.toUpperCase();
                    return thisRef.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
                case 'ID':
                source.sort(function(a, b) : number{
                    const nameA = a.ID.toUpperCase();
                    const nameB = b.ID.toUpperCase();
                    return thisRef.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'LASTNAME':
                source.sort(function(a, b) : number{
                    const nameA = a.LastName.toUpperCase();
                    const nameB = b.LastName.toUpperCase();
                    return thisRef.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'GENDER':
                source.sort(function(a, b): number{
                    const nameA = a.Gender.toUpperCase();
                    const nameB = b.Gender.toUpperCase();
                    return thisRef.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'MAJOR':
                source.sort(function(a, b): number {
                    const nameA = a.Major.toUpperCase();
                    const nameB = b.Major.toUpperCase();
                    return thisRef.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'STUDENTSTATUS':
                source.sort(function(a, b): number {
                    const nameA = a.StudentStatus.toUpperCase();
                    const nameB = b.StudentStatus.toUpperCase();
                    return thisRef.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
        }

        return source;
    }

    private getSortedBasedOnDirection(sortDirection : string, nameA: string, nameB: string) {
        switch (sortDirection) {
            case 'ASC':
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
                break;
            case 'DESC':
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                return 0;
                break;
            default: return 0;
                     break;
        }
    }
}