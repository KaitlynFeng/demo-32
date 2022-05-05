window.dom = {
    find(selector) {    // 返回的是一个数组
        return document.querySelectorAll(selector);
    },
    style(node,name,value) {
        node.style[name] = value; 
    },
    each(nodeList,fn) {
        for(let i = 0;i < nodeList.length;i++){
            fn.call(null,nodeList[i]);
        }
    }
}