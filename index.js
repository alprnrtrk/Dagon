import { Dagon } from "./dagon.js"

let exampleClass = new Dagon({
    //? type: {'toggle','dropdown'}, default: 'toggle'
    //? prefix: {string}, default: 'dagon'
    //? trigger: {string}, default: 'trigger'
    //? target: {string}, default: 'target'
    //? seperator: {string}, default: '-'
    //? toggle: {string}, default: 'active'
    //? switch: {boolen}, default: true
    //? itSlef: {boolen}, default: true
    //? elements: ['menu'],
})

let filterButtons = new Dagon({
    elements: ['new', 'blog', 'other'],
    switch: true,
    itSelf: true,
    closeItSelf: true,
})