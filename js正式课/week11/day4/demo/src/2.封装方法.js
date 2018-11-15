class Element {
    constructor(type, attr, children) {
        this.type = type;
        this.attr = attr;
        this.children = children;
    }
    ren() {
        let ele = document.createElement(this.type);
        for (let key in this.attr) {
            let val = key
            if (key === 'className') {
                val = "class";
            }
            if (key === 'htmlfor') {
                val = "for";
            }
            ele.setAttribute(key, this.attr[key]);
        }
        this.children.forEach((item, index) => {
            let newEle = item instanceof Element ? item.ren() : document.createTextNode(item)
            ele.appendChild(newEle)
        })
        return ele
    }
}
let React = {
    createElement(type,attr,...children){  
        return new Element(type,attr,children)
    }
}
let ReactDOM = {
    render(element,container){
        container.appendChild(element.ren())
    }
}

let a = React.createElement('p',{attr:1},"wangqi",)
ReactDOM.render(a,window.root)