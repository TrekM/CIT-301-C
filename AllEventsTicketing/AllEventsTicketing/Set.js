function Set() {

		/*-------------------------------Insert your code here -------------------------------------*/
        this.intersection = function (listA, listB) {

            var resultList = []; // create a resultList array

            if (listA === null || listB === null) { // check for invalid inputs
                return null; // exit and return null to indicate an error
            }
            for (var i = 0; i < listA.length; i++) {// for every element in list a
                var nextValue = listA[i]; // get next value in the list
                // for element in list b
                for (var j = 0; j < listB.length; j++) {
                    if (listB[j] === nextValue) { //this listB element equals next value
                        resultList.push(listB[j]); // add listB element to end of resultList
                        break; //break out of (exit) the listB inner loop
                    }
                } // end listB inner loop
            } //end listA outer loop
            return resultList;
        };


		/*-------------------------------Insert your code here -------------------------------------*/


		/*-------------------------------Insert your code here -------------------------------------*/
			this.union = function(listA, listB){
				var resultList = [];
                if (listA === null || listB === null) { // check for invalid inputs
                    return null; // exit and return null to indicate an error
                }
              var symmetric = this.symmetricDifference(listA, listB);
                this.append(resultList, symmetric);
                var intersect = this.intersection(listB, listA);
				this.append(resultList, intersect);

                return resultList;
			};

		/*-------------------------------Insert your code here -------------------------------------*/




		/*-------------------------------Insert your code here -------------------------------------*/
        this.relativeComplement = function (listA, listB) {

            var resultList = []; // create a resultList array

            if (listA === null || listB === null) { // check for invalid inputs
                return null; // exit and return null to indicate an error
            }
            for (var i = 0; i < listA.length; i++) {// for every element in list a
                var noItem = true;
                // for element in list b
                for (var j = 0; j < listB.length; j++) {
                    if (listA[i] === listB[j]) { //this listB element equals listA
                        noItem = false;
                    }
                } // end listB inner loop
                if (noItem) {
                    resultList.push(listA[i]);
                }
            } //end listA outer loop
            return resultList;
        };

		/*-------------------------------Insert your code here -------------------------------------*/

		/*-------------------------------Insert your code here -------------------------------------*/
        this.symmetricDifference = function (listA, listB) {
            var resultList = [];
            if (listA === null || listB === null) {
                return null; //
            }
            var abResult = this.relativeComplement(listA, listB);
            this.append(resultList, abResult);
            var baResult = this.relativeComplement(listB, listA);
            this.append(resultList, baResult);
            return resultList;
        };
			this.append = function(resultList, list){
            for (var i = 0; i < list.length; i++) {
                resultList.push(list[i]);
            }
            return resultList;
        };

		/*-------------------------------Insert your code here -------------------------------------*/

}