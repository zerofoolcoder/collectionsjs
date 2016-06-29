import test from 'ava';
import Collection from './../src/collection';

test('should return a collection with filtered items', t => {
    let collection = new Collection([1, 4, 8, 10, 20]).filter(item => item >= 5);

    t.true(collection instanceof Collection);
    t.deepEqual([8, 10, 20], collection.all());
});
