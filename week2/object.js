// const date = new Date();

// const month = ['january', 'fabuary'] 

const table = {
    noOfLegs: 4,
    color: 'white', 
    material:'pastic',
    isFoldable:true,
}
console.log(table.noOfLegs);

table['coloroflegs']= 'grey';
table['width'] = 1.2;
console.log(table.coloroflegs + '\n ' + table.material +  '\n ' + table.width)
