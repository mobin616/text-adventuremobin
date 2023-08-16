import inquirer from 'inquirer'
import { async } from 'rxjs'

const getName = async () => {
    let object = await inquirer.prompt({
        name: `userName`,
        type:  `input`,
        message: `What is your name`,
       
    })
     return object
}

const selectType = async () => {
    let {choice} = await inquirer.prompt({
    name: `choice`,   
    type: `list`,
    message: `you can either go left or go right`,
    choices : [ `go left` , `go right `],
    })
    return choice
}
start()