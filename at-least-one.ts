type AtLeastOne<T> = {
  [K in keyof T]: Pick<T, K>;
}[keyof T];

/* 
type Example = AtLeastOne<{ prop1: string, prop2: number }>

const example1: Example = {} // ❌
const example2: Example = {prop1: 'value'} // ✅
const example3: Example = {prop1: 'value', prop2: 2} // ✅
*/
