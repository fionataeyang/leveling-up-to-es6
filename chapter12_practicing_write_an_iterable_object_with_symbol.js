const obj = {
    number: 53820391,
    [Symbol.iterator] () {
        // TODO: implement me to print out all the digits of this.number
        let cur = 0, stringNumber = this.number.toString();
        return {
            next() {
                return {
                    value: stringNumber.charAt(cur),
                    done: cur++ > stringNumber.length
                }
            }
        }
        
    }
}