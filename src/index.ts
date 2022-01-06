import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 11]);
const charactersCollection = new CharactersCollection('Hassan');

const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
