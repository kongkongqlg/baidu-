var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
    function helper(tree){
        if(tree===null){
            return
        }
        if(tree.name===name){
            return tree.id
        }
        if(tree.left){
            return helper(tree.left)
        }
        if(tree.right){
            return helper(tree.right)
        }
    }
    return helper(tree)
}
// console.log(findIdByName('Carl'))

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
    function helper(tree){
        if(tree===null){
            return
        }
        if(tree.id===id){
            return tree.name
        }
        if(tree.left){
            return helper(tree.left)
        }
        if(tree.right){
            return helper(tree.right)
        }
    }
    return helper(tree)
}
// console.log(findNameById(3))

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR() {
    var helper=function(tree){
        if(tree===null){
            return
        }
        console.log(tree.name)
        if(tree.left){
            helper(tree.left)
        }
        if(tree.right){
            helper(tree.right)
        }
    }
    helper(tree)
}
// getListWithDLR()

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR() {
    var helper=function(tree){
        if(tree===null){
            return
        }
        if(tree.left){
            helper(tree.left)
        }
        console.log(tree.name)
        if(tree.right){
            helper(tree.right)
        }
    }
    helper(tree)
}
getListWithLDR()

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {
    var helper=function(tree){
        if(tree===null){
            return
        }
        if(tree.left){
            helper(tree.left)
        }
        if(tree.right){
            helper(tree.right)
        }
        console.log(tree.name)
    }
    helper(tree)
}
getListWithLRD()