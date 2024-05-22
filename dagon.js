//? type: {'toggle','dropdown'}, default: 'toggle'
//? prefix: {string}, default: 'dagon'
//? trigger: {string}, default: 'trigger'
//? target: {string}, default: 'target'
//? seperator: {string}, default: '-'
//? toggle: {string}, default: 'active'
//? switch: {boolen}, default: true
//? itSlef: {boolen}, default: true
//? elements: ['menu'],

const merge = {
    selector: (prefix, type, element, seperator) => {
        return '.' + prefix + seperator + type + seperator + element
    }
}

const is = {
    filled: (value) => {
        return !(value === undefined || value === null || value === '' || value === ' ') ? true : false
    }
}

const get = {
    node: (selector) => {
        return document.querySelectorAll(selector)
    }
}

class Dagon {
    constructor(income) {
        this.type = income.type || 'toggle'
        this.prefix = income.prefix || 'dagon'
        this.trigger = income.trigger || 'trigger'
        this.target = income.target || 'target'
        this.seperator = income.seperator || '-'
        this.toggle = income.className || 'active'
        this.itSelf = income.itSelf || false
        this.switch = income.switch || false
        this.closeItSelf = income.closeItSelf || false

        this.elements = income.elements || null

        this.node = []

        if (is.filled(this.elements)) {
            this.build(this.mode)
        }
    }

    build() {
        this.gotSelectors()
        this.listen()
    }

    async gotSelectors() {
        this.elements.forEach(element => {
            let triggerSelector = merge.selector(
                this.prefix,
                this.trigger,
                element,
                this.seperator
            )

            let targetSelector = merge.selector(
                this.prefix,
                this.target,
                element,
                this.seperator
            )

            this.node.push({
                trigger: get.node(triggerSelector),
                target: get.node(targetSelector),
            })
        })
    }

    listen() {
        this.node.forEach(each => {
            each['trigger'].forEach(trigger => {
                trigger.addEventListener('click', () => {
                    this.handleEvent(each)
                })
            })
        });
    }

    handleEvent(nodes) {
        let allNodes = []
        let selectedNodes = []

        if (this.switch) {
            this.node.map(n => n['target']).forEach(n => n.forEach(sn => allNodes.push(sn)))
        }

        if (this.itSelf) {
            selectedNodes = Array.from(nodes['trigger']).concat(Array.from(nodes['target']))
        } else {
            selectedNodes = Array.from(nodes['target'])
        }

        if (this.itSelf && this.switch) {
            this.node.map(n => n['trigger']).forEach(n => n.forEach(sn => allNodes.push(sn)))
        }

        this.manipulateClass('remove', allNodes)
        this.manipulateClass('toggle', selectedNodes)
    }

    manipulateClass(action, nodes) {
        nodes.forEach(each => {
            switch (action) {
                case 'add':
                    each.classList.add(this.toggle)
                    break;
                case 'remove':
                    each.classList.remove(this.toggle)
                    break;
                case 'toggle':
                    each.classList.toggle(this.toggle)
                    break;
            }
        })
    }
}

export { Dagon }