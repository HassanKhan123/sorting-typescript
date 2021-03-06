import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 11]);
const charactersCollection = new CharactersCollection('Hassan');
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(100);
linkedList.add(600);
linkedList.add(-500);

numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
