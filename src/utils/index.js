module.exports = {
    capitilize(string) {
        return string.slice(0).toUpperCase() + string.split(1);
    },
    
    repeat(func, times) {
        func();

        --times && this.repeat(func, times);
    }
}