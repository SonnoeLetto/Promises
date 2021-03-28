const menu = {
    tako: [
        {
            name: '🌮',
            time: 3000
        },
        {
            name: '🍟',
            time: 750
        },
        {
            name: '🥤',
            time: 500
        },
    ],
    pizza: [
        {
            name: '🍕',
            time: 3500
        },
        {
            name: '🍟',
            time: 2850
        },
        {
            name: '🥤',
            time: 500
        },
    ],
    meat: [
        {
            name: '🍖',
            time: 3000
        },
        {
            name: '🍗',
            time: 2850
        },
    ]
}


function order(menuName) {
    const cookFood = ({name, time}) => new Promise((resolve, reject) => {
        const condition = +Math.random().toFixed();

        setTimeout(() => {
            condition ? resolve(name) : reject(name);
        }, time);
    });

    return Promise.allSettled(menuName.map(cookFood));


}
const order_first = order(menu.meat).then((result) => {
   return new Promise((resolve, reject) =>{
            const resutWthStatus = {
                result,
                status:false
            }
            function ready(el) {
                return el.status === 'fulfilled';
            }
            
            if (result.every(ready)) {
                resutWthStatus.status = true;
                resolve(resutWthStatus)
            } else {
                return reject('shit happens')
            }
        })

});
const order_second = order(menu.pizza).then((result) => {
    return new Promise((resolve, reject) =>{
             const resutWthStatus = {
                 result,
                 status:false
             }
             function ready(el) {
                 return el.status === 'fulfilled';
             }
             
             if (result.every(ready)) {
                 resutWthStatus.status = true;
                 resolve(resutWthStatus)
             } else {
                 return reject('shit happens')
             }
         })
 
 });
 const order_third = order(menu.tako).then((result) => {
    return new Promise((resolve, reject) =>{
             const resutWthStatus = {
                 result,
                 status:false
             }
             function ready(el) {
                 return el.status === 'fulfilled';
             }
             
             if (result.every(ready)) {
                 resutWthStatus.status = true;
                 resolve(resutWthStatus)
             } else {
                 return reject('shit happens')
             }
         })
 
 });
 const order_fouth = order(menu.pizza).then((result) => {
    return new Promise((resolve, reject) =>{
             const resutWthStatus = {
                 result,
                 status:false
             }
             function ready(el) {
                 return el.status === 'fulfilled';
             }
             
             if (result.every(ready)) {
                 resutWthStatus.status = true;
                 resolve(resutWthStatus)
             } else {
                 return reject('shit happens')
             }
         })
 
 });
 const order_fivth = order(menu.meat).then((result) => {
    return new Promise((resolve, reject) =>{
             const resutWthStatus = {
                 result,
                 status:false
             }
             function ready(el) {
                 return el.status === 'fulfilled';
             }
             
             if (result.every(ready)) {
                 resutWthStatus.status = true;
                 resolve(resutWthStatus)
             } else {
                 return reject('shit happens')
             }
         })
 
 });

const resultArray = [order_first, order_second, order_third, order_fouth, order_fivth]
Promise.allSettled(resultArray)
.then(results => {
    const res = results.filter(element => element.status === 'fulfilled');
        if (res.length >= 2) {

            console.log(res)
        }

})

