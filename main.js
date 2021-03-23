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
    return new Promise(function(resolve, reject){
        const result = [];

        function cooking({ name, time }, index) {
            const condition = +Math.random().toFixed();
            setTimeout(() => {
                if (condition) {
                    result[index] = name;
                    if (menuName.length === result.filter(Boolean).length) {
    
                        return resolve(result);
                    }
    

                } else {
                    return reject(new Error('shit happens')) ;
                }

            }, time);
    }
    
    menuName.forEach(cooking); 
    })
}

const first = order(menu.tako);
const second = order(menu.pizza);
const third = order(menu.meat);
const fourth = order(menu.pizza);

Promise.allSettled([first, second, third, fourth])
.then(result => {
function status(result) {
    let val = false
// Проблема с тем, что бы выбрать сколько ж у result'a 'fullfield', что бы поставить if > 3 => true, не знаю, пол дня над этим отсидел, не то времени не хватает, не то знаний, не то мозгов) мб ты даш фидбэк и я что-то пойму
    result.forEach((el, index) => {
        // let stat = result[index].status

        console.log(result[index].status)
        if (result[index].status === 'fullfield') {
            return  val = true
        } 
    })
    return val
}
console.log({finished: `${status(result)}`, order: result})
})
.catch(error => {
console.log(error.message)
})
//  а мб вообще все криво сделано и надо было по-другому... ну крч..