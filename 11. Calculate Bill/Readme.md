**Assignment - Calculate Bill**

You've 2 arrays of objects ( Items and Categories)

Find Below the structure of Items

    [{  	id : "item1",
    	        itemName : "Butter Roti",
        	rate : 20,
        	taxes : [{
                	name : "Service Charge",
                	rate : 10,
                	isInPercent : 'Y'
            		}],
        	category : {
            		categoryId : "C2"
        	}
    }, {...}]


Find Below the structure of Categories

    [{
    	id : "C1",
    	categoryName : "Platters",
    	superCategory : {
	        superCategoryName : "South Indian",
	        id : "SC1"
    	}
    }, {...}]
    
    
You have a variable bill

    {
	id : "B1",
	billNumber : 1,
	opentime : "06 Nov 2020 14:19",
	customerName : "CodeQuotient",
	billItems : [
	{
		id : "item2",
            	quantity : 3,
            	discount : {
        	        rate : 10,
                	isInPercent : 'Y'
	        }
        },
	{...}
	]
    }
    

**Task 1: Create a function that returns JSON structure in the following format**

    {
  	"id": "B1",
  	"billNumber": 1,
  	"opentime": "06 Nov 2020 14:19",
  	"customerName": "CodeQuotient",
  	"billItems": [
    	{
      		"id": "item2",
      		"name": "Paneer Butter Masala",
      		"quantity": 3,
	}, {...}
  	]
   }

**Task 2: Create a function that returns JSON structure in the following format and calculate the total amount (include taxes & discount) to be paid.**
    {
 	"id": "B1",
 	"billNumber": 1,
 	"opentime": "06 Nov 2020 14:19",
 	"customerName": "CodeQuotient",
 	"billItems": [
	{
   		"id": "item2",
   		"name": "Paneer Butter Masala",
   		"quantity": 3,
   		"discount": {
    			"rate": 10,
    			"isInPercent": "Y"
   		},
   		"taxes": [
    		{
     			"name": "Service Charge",
			"rate": 10,
     			"isInPercent": "Y"
    		}, {...}
   		],
   	"amount" : 123..,
   	"superCategoryName" : "",
   	"categoryName" : ""
  	}, {...}
 	],
 	"Total Amount" : ""
}
