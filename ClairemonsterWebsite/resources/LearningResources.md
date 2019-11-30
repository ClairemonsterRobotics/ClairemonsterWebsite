You can learn Javascript here:
http://www.learn-js.org/en

The reason i made this doc is because I am confused as to what this means "http://www.learn-js.org/en/Function_Context"
and I would like Charlie or someone else to read it and tell me if they understand what it means.

So pretty much what you are doing is setting the value of 'this' for each specific function.  The test at the end is this:
      
      var person = {
          firstName : "John",
          lastName : "Smith",
          age : 23
      };

      function printFullName()
      {
          console.log(this.firstName + " " + this.lastName);
      }

      function printDetails()
      {
          console.log(this.firstName + " is " + this.age + " years old");
      }

      // TODO: create bound copies of printFullName and printDetails.
      var boundPrintFullName;
      var boundPrintDetails;

      boundPrintFullName();
      boundPrintDetails();
      
What it want you to do is change 

      var boundPrintFullName;
      var boundPrintDetails;
to:

      var boundPrintFullName = printFullName.bind(person);
      var boundPrintDetails = printDetails.bind(person);
      
Then when it calls 
      
      console.log(this.firstName + " " + this.lastName);
from boundPrintFullName(), 'this' will referred to as person because of the .bind(person).  Same thing goes for boundPrintDetails().
