// const date = new Date();

// const month = ['january', 'fabuary', 'march']
//console.log(date.getUTCMonth()); 

const table = {
    noOfLegs: 4,
    color: 'white',  
    material:'pastic',
    isFoldable:true,
}

const fan = {
    color: 'black',
    type:'standing',
    isRechargeable: false,
    noOfBlades: 3,
    adjustableHeight: true,
}

const television = {}
television['type'] = 'flatscreen'
television['size'] = 55;
television['color'] = 'silver'
television['maker'] = 'Startimes'
// console.log(table.noOfLegs);

table['coloroflegs']= 'grey';
table['width'] = 1.2;
// console.log(table.coloroflegs + '\n ' + table.material +  '\n ' + table.width)
const allObjects = {}
for (item in table){
    // console.log(table[item]);
    allObjects[item] = table[item];
}
console.log('\n\n')

for (properties in fan){
    // console.log(fan[properties]);
    allObjects[properties] = fan[properties];
}

console.log('\n\n')

for (item in television){
    // console.log(television[item]);
    allObjects[item] = television[item];
}

console.log(allObjects)

const bible = {}
bible['version'] = 'NIV';
bible['numOfbooksInBook'] = 66;
bible['part'] = 'New testament & Old testament';
console.log(bible)

