import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'
  })


export class OrderByPipe implements PipeTransform {
    transform(source: any[], sortOption: string, sortDirection: string): any[] {
        const thisRef = this;
        switch (sortOption.toUpperCase()) {
            case 'PRODUCT':
                source.sort(function(a, b): number{
                    const nameA = a.product.toUpperCase();
                    const nameB = b.product.toUpperCase();
                    return thisRef.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;

            
            case 'CATEGORY':
                source.sort(function(a, b) : number{
                    const nameA = a.category.toUpperCase();
                    const nameB = b.category.toUpperCase();
                    return thisRef.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'LIST':
                source.sort(function(a, b) : number{
                    const nameA = a.list.toUpperCase();
                    const nameB = b.list.toUpperCase();
                    return thisRef.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
           
            case 'CREATED':
                source.sort(function(a, b): number {
                    const nameA = a.createdDaysAgo.toUpperCase();
                    const nameB = b.createdDaysAgo.toUpperCase();
                    return thisRef.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'ADSIZE':
                source.sort(function(a, b): number {
                    const nameA = a.adSize.toUpperCase();
                    const nameB = b.adSize.toUpperCase();
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