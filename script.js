let screen = document.querySelector('.screen')
let numbers = document.querySelectorAll('.numbers')
let reset = document.querySelector('#reset')
let deleteBtn = document.querySelector('#delete')
let equal = document.querySelector('#equal')
let blueMode = document.querySelector('.blue-mode-btn') 
let whiteMode = document.querySelector('.white-mode-btn') 
let purpleMode = document.querySelector('.purple-mode-btn') 

numbers.forEach(num=>{
    num.addEventListener('click',e=>{
        screen.innerText += num.innerText
    })
})

equal.addEventListener('click',e=>{
    try {
        if(!screen.innerText) return
        let result = eval(screen.innerText)
        screen.innerText = result.toString().slice(0,13)
    } catch (err) {
        screen.innerText = '!Error'
        setTimeout(()=>{
            screen.innerText = ''
        },2000)
    }
})

reset.addEventListener('click',e=>[
    screen.innerText = ''
])

deleteBtn.addEventListener('click',e=>[
    screen.innerText = screen.innerText.slice(0,-1)
])

blueMode.addEventListener('click',e=>{
    document.body.className = ''
})

whiteMode.addEventListener('click',e=>{
    document.body.className = 'white-mode'
})

purpleMode.addEventListener('click',e=>{
    document.body.className = 'purple-mode'
})