//Immediately Invoked Function Expressions (IIFE)


(function chai(){                      // it is a named iife
    console.log(`DB CONNETED`);   // DB CONNETED
})();     // earsy way to remember to create an iife is (function)()
                 // IIFE is used to remove the global scope pollution and immediate execution of the function
                 // ; is used to end the code for next iife run will not give an error
                 ( () =>{          // it is an unanmed iife
                    console.log(`DB Connected two`); //DB Connected two
                })();


( (name) =>{      // it is an iife with parameter passing
    console.log(`DB Connected two ${name}`);  //DB Connected two Satish
})('Satish')