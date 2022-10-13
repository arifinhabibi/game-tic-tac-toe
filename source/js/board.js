class Board {
    constructor(){

        this.rect = document.querySelectorAll('.rect')
        this.win = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
        this.choiceX = []
        this.choiceO = []
        this.user = false

    }

    render(){

        this.listen()

    }
    
    listen(){
        this.rect.forEach( (rect, index) => {
            rect.addEventListener('click', () => {
                if(!rect.classList.contains('is-filled')) {
                    rect.classList.add('is-filled');
                    this.action(index, this.user)
                }
            })
        });
    }

    action(index, user){

        if (user == false) {
            this.rect[index].innerHTML = 'x'
            this.rect[index].style.backgroundColor = 'blue'
            this.choiceX.push(index + 1)
            this.user = true
        } else {
            this.rect[index].innerHTML = 'o'
            this.rect[index].style.backgroundColor = 'red'
            this.choiceO.push(index + 1)
            this.user = false
        }

        this.win.forEach((win) => {
            if (this.choiceX.filter((winn) =>   win[0] == winn || win[1] == winn || win[2] == winn).length == 3) {
                setTimeout(() => {
                    alert('Player X menang')
                    location.reload()
                }, 1000);
            } else if (this.choiceO.filter((winn) => winn == win[0] || winn == win[1] || winn == win[2]).length == 3){
                setTimeout(() => {
                    alert('Player O menang')
                    location.reload()
                }, 1000); 
            }
        })

    }

}

const board = new Board()

board.render()