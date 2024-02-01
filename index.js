import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const numbers = of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

const oddNumbers = numbers.pipe(
  filter((number) => number % 2 === 1),
  map((number) => `${number}`)
);

oddNumbers.subscribe(
  (result) => console.log(result),
 
);

    