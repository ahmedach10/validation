let Validation = new class {
    constructor() {
        this.ele;
    }

    add(ele) {
        this.ele = ele;
        return this;
    }

    req() {
        this.ele = (this.ele != '') ? this.ele : false;
        return this;
    }

    alpha() {
        const reg = /^[a-z\s]+$/ig;
        this.ele = (reg.test(this.ele)) ? this.ele : false;
        return this;
    }

    num() {
        const reg = /^[0-9]+$/g;
        this.ele = (reg.test(this.ele)) ? this.ele : false;
        return this;
    }

    alphaNum() {
        const reg = /^[a-z0-9]+$/ig;
        this.ele = (reg.test(this.ele)) ? this.ele : false;
        return this;
    }

    email() {
        const reg = /^([a-z.-_]+)@([a-z]+)\.([a-z]{2,4})$/ig;
        this.ele = (reg.test(this.ele)) ? this.ele : false;
        return this;
    }

    eq(anotherField) {
        this.ele = (this.ele === anotherField) ? true : false;
        return this;
    }

    max(max) {
        const maximum = parseInt(max);
        this.ele = (this.ele.length <= maximum) ? this.ele : false;
        return this;
    }

    min(min) {
        const lease = parseInt(min);
        this.ele = (this.ele.length >= lease) ? this.ele : false;
        return this;
    }

    between(between) {
        const max = parseInt(between.max);
        const min = parseInt(between.min);
        this.ele = ((this.ele.length >= min) && (this.ele.length <= max)) ? this.ele : false;
        return this;
    }

    select(defaultValue) {
        this.ele = (this.ele == defaultValue) ? false : this.ele;
        return this;
    }

    isValid(obj, className = 'primary') {

        if (!(obj instanceof Object) && !(typeof obj === 'object')) {
            return false;
        }

        Object.values(obj.ele).forEach((ele, key) => {
            if (ele === null) {
                return Error(ele + ' Not Exists');
            }

            const parent = this;

            ele.onblur = function () {
                // If Rolse Not Exists
                if (!obj.hasOwnProperty('roles')) {
                    return;
                }
                // Get Values From Object
                const arr = Object.keys(obj.roles)[key];
                // Check if this.name equal roles Keys
                let isAllowed = this.name == arr;

                // If not Equal
                if (!isAllowed) {
                    return;
                }



                // DOM Elements
                const parentChild = this.parentNode;
                const msg = this.nextElementSibling;
                const label = parentChild.previousElementSibling;

                let text = [];

                // Messenger object
                let messenger = Object.create(null);

                // RegExp Pattern
                const pattern = /^(eq)\(([a-z]+)\)$/gi;
                const numPattern = /^(min|max)\(([0-9]+)\)$/g;
                const betweenPattern = /^(between)\(([0-9]+),([0-9]+)\)$/g;

                // Convert roles String to Array
                const roles = obj.roles[arr].split("|");
                let control = [];

                for (const role of roles) {
                    // req
                    if (role == "req") {
                        control.push(parent.add(this.value).req().ele);
                        text.push(role);
                        messenger.req = label.textContent + ' is required';
                    }
                    // Eq
                    else if (pattern.test(role)) {
                        const word = /^(eq)\(([a-z]+)\)$/gi;
                        const matchValue = word.exec(role)[2];
                        const element = obj.ele[matchValue];
                        if (element == undefined) {
                            return;
                        }
                        control.push(parent.add(this.value).eq(element.value).ele);
                        messenger.eq = label.textContent + ' should be equal ' + element.name;
                        text.push('eq');
                    }
                    // min and max
                    else if (numPattern.test(role)) {
                        const num = /^(min|max)\(([0-9]+)\)$/g;
                        const arr = num.exec(role);
                        const method = arr[1];
                        const matchValue = arr[2];
                        control.push(parent.add(this.value)[method](matchValue).ele);
                        messenger.minmax = (method == 'min') ? label.textContent + ' should be greater then ' + matchValue : label.textContent + ' should be least then ' + matchValue;
                        text.push(method);
                    }
                    // Between
                    else if (betweenPattern.test(role)) {
                        const between = /^(between)\(([0-9]+),([0-9]+)\)$/g;
                        const arr = between.exec(role);
                        const min = arr[2];
                        const max = arr[3];
                        control.push(parent.add(this.value).between({
                                max: max,
                                min: min
                            })
                            .ele);
                        messenger.between = label.textContent + ' should be greater then ' + min + ' and least then ' + max;
                        text.push(arr[1]);
                    }
                    // alpha
                    else if (role == "alpha") {
                        control.push(parent.add(this.value).alpha().ele);
                        messenger.alpha = label.textContent + ' should be alphabet only';
                        text.push(role);
                    }
                    // alphaNum
                    else if (role == "alphaNum") {
                        control.push(parent.add(this.value).alphaNum().ele);
                        messenger.alphaNum = label.textContent + ' should be alphabet and number';
                        text.push(role);
                    }
                    // Number
                    else if (role == "num") {
                        control.push(parent.add(this.value).num().ele);
                        messenger.num = label.textContent + ' should be number only';
                        text.push(role);
                    }
                    // Email
                    else if (role == "email") {
                        control.push(parent.add(this.value).email().ele);
                        messenger.email = label.textContent + ' should be contain @ _ . -';
                        text.push(role);
                    }
                }

                // Messages
                const messages = {
                    req: messenger.req,
                    alpha: messenger.alpha,
                    alphaNum: messenger.alphaNum,
                    email: messenger.email,
                    num: messenger.num,
                    max: messenger.minmax,
                    min: messenger.minmax,
                    between: messenger.between,
                    eq: messenger.eq,
                    select: messenger.select
                };



                for (let i = 0, ii = control.length; i < ii; i++) {

                    const isValided = control[i];
                    if (isValided === false) {
                        const msgs = messages[text[i]];
                        msg.textContent = msgs;
                        msg.classList.add("show-label", "alert", "alert-" + className);
                        label.style.color = 'red';
                        break;
                    } else {
                        msg.classList.remove("show-label", "alert", "alert-" + className, "bg-" + className);
                        msg.textContent = "";
                        label.style.color = '#000';
                        parentChild.classList.remove("bg-" + className);
                    }
                };
            };
        });

        return this;
    }


}