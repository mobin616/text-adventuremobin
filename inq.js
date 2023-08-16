console.clear();

import inquirer from "inquirer";


export const getName = async () => {
    let {userName} = await inquirer.prompt({
     name: `userName`,
     type: `input`,
     message: `What is your name?`,
    })
    return userName
 }

 export const getShip = async () => {
    let {ship} = await inquirer.prompt({
     name: `ship`,
     type: `input`,
     message: `What is your ship called?`
    })
    return ship
 }

 export const selectType1 = async () => {
   let choice1 = await inquirer.prompt({
   name: `choice1`,   
   type: `list`,
   message: `you can either enter the Breakroom or the Kitchen."`,
   choices : [ `Breakroom` , `Kitchen`],
   })
   return choice1.choice1
   
 }
 
 export const selectType2 = async () => {
   let choice2 = await inquirer.prompt({
   name: `choice2`,   
   type: `list`,
   message: `you can either Go to the crop room or the oxygen storage room."`,
   choices : [ `Crop Room` , `Oxygen Storage Room`],
   })
   return choice2.choice2
   
 }

 export const selectType3 = async () => {
   let choice3 = await inquirer.prompt({
   name: `choice3`,   
   type: `list`,
   message: `you can either enter the Toilet or the Bunks."`,
   choices : [ `Toilet` , `Bunks`],
   })
   return choice3.choice3
   
 }
