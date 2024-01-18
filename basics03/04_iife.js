// Immediately Invoked Function Expressions (IIFE)
// global scope ke polsoition se problem hoti hai to khe baar to uss global scope ke jo variables hai, jo bhi decleareion hai uske polision ko hatane ke liye hamne iffe ka use kiya hai
(function chai(){
    // Named IIFE
    console.log(`DB Connected`);
})();

( () => {
    console.log("db 2")
})();

( (naem) => {
    console.log(`DB connected two ${name}`);
})("hukma ram");
